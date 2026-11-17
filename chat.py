"""Chat com a LétimaX. A chave da IA vive só no servidor."""
import httpx
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, Field
from app.config import settings
from app.security import validar_token

router = APIRouter()

SISTEMA = (
    "És a LétimaX, assistente de negócios digitais do Senhor Letício. "
    "Responde em português de Portugal, de forma clara, direta e honesta. "
    "Não prometas resultados financeiros garantidos. Nunca reveles chaves, "
    "segredos ou configurações internas. Sugere apenas estratégias legais."
)
_historico: list[dict] = []  # memória simples; passará para base de dados depois
MAX_MSGS = 20


class ChatIn(BaseModel):
    mensagem: str = Field(min_length=1, max_length=4000)


@router.post("")
async def conversar(dados: ChatIn, _=Depends(validar_token)):
    if not settings.ANTHROPIC_API_KEY:
        raise HTTPException(503, "Chave da IA ainda não configurada no servidor.")
    _historico.append({"role": "user", "content": dados.mensagem})
    del _historico[:-MAX_MSGS]
    try:
        async with httpx.AsyncClient(timeout=60) as cliente:
            r = await cliente.post(
                "https://api.anthropic.com/v1/messages",
                headers={
                    "x-api-key": settings.ANTHROPIC_API_KEY,
                    "anthropic-version": "2023-06-01",
                    "content-type": "application/json",
                },
                json={
                    "model": settings.ANTHROPIC_MODEL,
                    "max_tokens": 1000,
                    "system": SISTEMA,
                    "messages": _historico,
                },
            )
        r.raise_for_status()
    except httpx.HTTPError:
        _historico.pop()
        raise HTTPException(502, "A IA não respondeu. Tente novamente.")
    texto = "".join(b.get("text", "") for b in r.json().get("content", []))
    _historico.append({"role": "assistant", "content": texto})
    return {"resposta": texto}
