"""
LétimaX — Servidor Principal
Ponto de entrada da aplicação FastAPI.
Arquitectura: processamento pesado aqui no servidor, o telemóvel (PWA)
só mostra resultados e envia pedidos simples — pensado para hardware
de entrada (ex: 2GB RAM) correr bem, porque quase nada pesado corre
no dispositivo.
"""
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
import time

from app.config import settings
from app.routers import auth, chat, dashboard

app = FastAPI(
    title="LétimaX API",
    version="0.1.0",
    description="Cérebro da LétimaX — toda a lógica de negócio e IA vive aqui.",
)

# CORS — necessário para o frontend (PWA) conseguir falar com este servidor.
# Em produção, trocar "*" pelo domínio real do frontend publicado.
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.middleware("http")
async def adicionar_tempo_resposta(request: Request, call_next):
    """Mede quanto tempo cada pedido demora — útil para depurar lentidão."""
    inicio = time.time()
    resposta = await call_next(request)
    duracao = time.time() - inicio
    resposta.headers["X-Tempo-Resposta"] = str(round(duracao, 3))
    return resposta


@app.exception_handler(Exception)
async def tratador_erros_global(request: Request, exc: Exception):
    """
    Nunca deixa o servidor "rebentar" sem resposta — devolve sempre
    uma resposta JSON clara, mesmo quando algo corre mal.
    IMPORTANTE: nunca inclui detalhes internos (stack trace, chaves) na resposta.
    """
    return JSONResponse(
        status_code=500,
        content={"erro": "Ocorreu um erro interno. Tente novamente."},
    )


# --- Routers: cada ficheiro em app/routers/ trata de uma área ---
app.include_router(auth.router, prefix="/auth", tags=["Autenticação"])
app.include_router(chat.router, prefix="/chat", tags=["Chat"])
app.include_router(dashboard.router, prefix="/dashboard", tags=["Dashboard"])


@app.get("/saude")
async def saude():
    """
    Endpoint público (sem autenticação) para verificar se o servidor está vivo.
    O Railway e o app usam isto para saber se o cérebro está activo.
    """
    return {"estado": "activo", "nome": "LétimaX", "versao": "0.1.0"}


# Serve a interface (PWA) na raiz — um único endereço para tudo.
app.mount("/", StaticFiles(directory="static", html=True), name="static")
