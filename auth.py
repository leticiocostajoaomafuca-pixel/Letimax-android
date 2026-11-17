"""Login do Senhor Letício por PIN. Biometria fica no dispositivo numa fase seguinte."""
import time
from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel
from app.security import verificar_pin, criar_token_acesso

router = APIRouter()
_falhas: dict[str, list[float]] = {}
MAX_FALHAS, JANELA = 5, 15 * 60  # 5 falhas em 15 min = bloqueio temporário


class LoginIn(BaseModel):
    pin: str


@router.post("/login")
async def login(dados: LoginIn, request: Request):
    ip = request.client.host if request.client else "desconhecido"
    agora = time.time()
    recentes = [t for t in _falhas.get(ip, []) if agora - t < JANELA]
    if len(recentes) >= MAX_FALHAS:
        raise HTTPException(429, "Demasiadas tentativas. Aguarde 15 minutos.")
    if not verificar_pin(dados.pin):
        recentes.append(agora)
        _falhas[ip] = recentes
        raise HTTPException(401, "PIN incorreto.")
    _falhas.pop(ip, None)
    return {"token": criar_token_acesso({"sub": "letício"}), "tipo": "bearer"}
