"""Dashboard — por agora valores vazios. Dados reais só entram quando houver vendas reais."""
from fastapi import APIRouter, Depends
from app.security import validar_token

router = APIRouter()


@router.get("")
async def dashboard(_=Depends(validar_token)):
    return {
        "receita_dia": 0.0,
        "receita_mes": 0.0,
        "meta_mensal": 0.0,
        "produtos_publicados": 0,
        "nota": "Sem dados reais ainda. Ligue as plataformas de venda para ver números.",
    }
