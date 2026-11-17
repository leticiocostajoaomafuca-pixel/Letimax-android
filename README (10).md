# LétimaX — Base v0.1

Já funciona: login por PIN (com bloqueio após 5 falhas), chat com a IA, dashboard vazio, interface leve para telemóvel.

## Publicar SEM instalar nada no computador
1. Crie conta em github.com e um repositório novo (privado).
2. Carregue a pasta `backend` (botão "Add file > Upload files").
3. Em railway.app: New Project > Deploy from GitHub > escolha o repositório.
4. Em Variables, adicione: SECRET_KEY, DONO_PIN_HASH, ANTHROPIC_API_KEY.
5. Em Settings > Networking > Generate Domain. Abra o endereço no telemóvel.

## Gerar o PIN (DONO_PIN_HASH)
Precisa de Python. Alternativa: peça-me aqui no chat um hash para o PIN que escolher
(use um PIN de teste; depois troque por outro gerado por si).
