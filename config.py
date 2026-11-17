"""
Configurações do servidor.
REGRA DE OURO: nenhuma chave de API ou segredo é escrito directamente
no código. Tudo vem de variáveis de ambiente (.env localmente, ou
variáveis do Railway em produção).
"""
from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    # --- Segurança ---
    SECRET_KEY: str = "trocar-isto-antes-de-publicar"  # usado para assinar tokens JWT
    ALGORITHM: str = "HS256"
    TOKEN_EXPIRA_MINUTOS: int = 60 * 12  # 12 horas de sessão

    # --- IA ---
    ANTHROPIC_API_KEY: str = ""
    ANTHROPIC_MODEL: str = "claude-sonnet-5-5"

    # --- Dono do sistema ---
    # Hash da palavra-passe/PIN de emergência do Senhor Letício — nunca a palavra em texto simples.
    DONO_PIN_HASH: str = ""
    NOTIFICATION_EMAIL: str = ""

    # --- Rede ---
    CORS_ORIGINS: List[str] = ["*"]  # trocar por domínio real em produção

    class Config:
        env_file = ".env"


settings = Settings()
