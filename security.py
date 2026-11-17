"""
Funções de segurança: criar e validar tokens, verificar PIN.
Centralizado aqui para não haver lógica de segurança espalhada
por vários ficheiros (mais fácil de rever e corrigir).
"""
from datetime import datetime, timedelta, timezone
from jose import JWTError, jwt
from passlib.context import CryptContext
from fastapi import HTTPException, Security, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

from app.config import settings

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
bearer_scheme = HTTPBearer()


def verificar_pin(pin_texto_simples: str) -> bool:
    """Compara o PIN introduzido com o hash guardado — nunca compara texto simples directamente."""
    if not settings.DONO_PIN_HASH:
        return False
    return pwd_context.verify(pin_texto_simples, settings.DONO_PIN_HASH)


def gerar_hash_pin(pin_texto_simples: str) -> str:
    """Usado uma vez, ao configurar o PIN — gera o hash a guardar em DONO_PIN_HASH."""
    return pwd_context.hash(pin_texto_simples)


def criar_token_acesso(dados: dict) -> str:
    """Gera um token JWT assinado, válido por tempo limitado."""
    para_codificar = dados.copy()
    expira = datetime.now(timezone.utc) + timedelta(minutes=settings.TOKEN_EXPIRA_MINUTOS)
    para_codificar.update({"exp": expira})
    return jwt.encode(para_codificar, settings.SECRET_KEY, algorithm=settings.ALGORITHM)


def validar_token(credenciais: HTTPAuthorizationCredentials = Security(bearer_scheme)) -> dict:
    """
    Dependency do FastAPI: protege qualquer endpoint que a use.
    Se o token for inválido ou tiver expirado, recusa o pedido imediatamente.
    """
    token = credenciais.credentials
    excepcao_credenciais = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Credenciais inválidas ou sessão expirada.",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        if payload.get("sub") is None:
            raise excepcao_credenciais
        return payload
    except JWTError:
        raise excepcao_credenciais
