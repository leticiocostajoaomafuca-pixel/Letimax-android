# LétimaX — Servidor

Backend central da aplicação Android LétimaX. Stack: Node.js 20+, TypeScript, Express, Firebase Admin/Firestore e Upstash Redis.

## Estado real do projecto

Implementado no repositório:
- API Express com cabeçalhos de segurança, CORS configurável, limite de pedidos e endpoint de saúde.
- Autenticação Firebase ID token e autorização exclusiva pelo UID configurado do proprietário.
- Registos de espaço de trabalho (tarefas, produtos, notas e negócios) no Firestore.
- Pedidos de aprovação e registo de auditoria.
- Fila Upstash Redis com consulta de estado e worker separado.
- Testes HTTP básicos e workflow GitHub Actions para typecheck, build e testes.

Ainda não está implementado ou validado:
- Integração dentro do projecto Android existente (não há código Android neste repositório).
- Sincronização offline/Room em ambos os sentidos.
- Os 42 ecrãs, 140+ endpoints, 45 tarefas e restantes módulos do documento oficial.
- Integrações comerciais externas, IA, biometria facial/vocal própria ou APK final.
- Testes reais com credenciais Firebase/Redis e deployment de produção.

Não considerar o sistema pronto para produção até concluir configuração, CI verde, testes com serviços reais e revisão de segurança.

## Requisitos e comandos

- Node.js 20 ou superior e npm.
- Instalar: `npm install`
- Verificar tipos: `npm run typecheck`
- Compilar: `npm run build`
- Testar: `npm test`
- API local: `npm run dev`
- Worker local: `npm run worker:dev`
- Worker compilado: `npm run worker`

## Configuração do servidor

Copiar `.env.example` para `.env` e configurar no ambiente privado:

- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`
- `OWNER_FIREBASE_UID`
- `OPENAI_API_KEY` e, opcionalmente, `OPENAI_MODEL` para activar o chat com IA
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`
- `APP_ORIGIN` e `PORT`, conforme o alojamento.

As duas variáveis Upstash devem ser definidas em conjunto. Nunca guardar credenciais reais no Git ou na aplicação Android. O backend usa Firebase Admin SDK; a chave privada só existe no servidor.

## Autenticação Android

1. A aplicação autentica a conta do proprietário através de Firebase Authentication.
2. Obtém um Firebase ID token actualizado através do Firebase SDK (`getIdToken()`; com renovação forçada no início de sessão).
3. Envia o token em cada pedido protegido: `Authorization: Bearer <ID_TOKEN>`.
4. O servidor valida assinatura, validade e revogação do token e compara o UID com `OWNER_FIREBASE_UID`.
5. Se a conta não corresponder ao proprietário, o servidor bloqueia o pedido.

A aplicação nunca deve conter Firebase service-account credentials, tokens Upstash ou chaves privadas de fornecedores de IA. A biometria local é uma camada separada e não deve enviar modelos faciais/vocais ao backend.

## Endpoints

### Saúde
- `GET /api/health/` — estado público do serviço.

### Proprietário
- `GET /api/owner/session` — confirma sessão autenticada.

### Chat com IA
- `POST /api/chat` — recebe `{ "mensagem": "..." }` e devolve `{ "resposta": "..." }`.
- Requer Firebase ID token do UID proprietário.
- Se `OPENAI_API_KEY` não estiver configurada, responde `503` com uma mensagem explícita; não gera respostas simuladas.
- A chave OpenAI permanece exclusivamente no ambiente privado do servidor.

### Espaço de trabalho
- `POST /api/workspace` — cria `task`, `product`, `note` ou `business`.
- `GET /api/workspace?type=task&limit=30` — lista registos do proprietário.
- `PATCH /api/workspace/:id` — actualiza título, descrição, categoria ou estado.

Os dados ficam em `owners/{uid}/workspace`. A criação/actualização gera evento de auditoria.

### Aprovações
- `POST /api/approvals` — cria pedido pendente.
- `GET /api/approvals?status=pending&limit=20` — lista pedidos.
- `POST /api/approvals/:id/decision` — aprova/rejeita um pedido pendente.

A aprovação apenas regista a decisão. Não publica, não compra, não paga e não levanta dinheiro.

### Auditoria
- `GET /api/audit?limit=30` — consulta eventos do UID autenticado. A consulta está limitada ao proprietário autenticado.

### Estado de serviços
- `GET /api/storage/status` — verifica Firestore.
- `GET /api/redis/status` — verifica Upstash Redis.

### Fila e worker
- `POST /api/queue` — aceita `generate_report`, `sync_workspace` ou `refresh_analytics`.
- `GET /api/queue?limit=20` — lista tarefas ainda pendentes.
- `GET /api/queue/:id` — consulta estado, tentativas, resultado ou erro.

O worker corre num serviço separado com as mesmas variáveis de ambiente, comando `npm run worker`. Nesta fase, mantenha apenas uma instância. As tarefas ficam retidas até sete dias. `sync_workspace` ainda só verifica acesso ao Firestore; não sincroniza dados Room do telemóvel.

## Firestore

As regras em `firestore.rules` bloqueiam acesso directo do cliente. O backend usa Admin SDK. Aplicar os índices de `firestore.indexes.json` na consola Firebase.

## Segurança e limites

- Nenhuma operação financeira ou levantamento é executado.
- Nenhum anúncio, publicação ou operação comercial externa é executado automaticamente.
- Dados e registos são isolados pelo UID do proprietário.
- Não enviar palavras-passe, tokens, chaves API ou dados privados de terceiros nos campos de texto.
- Não recolher SMS, chamadas ou conversas de outras pessoas.
- O servidor não substitui a aplicação Android nem a sua base de dados Room.

## Integração Android — contrato mínimo

A integração final deve ser feita no projecto Kotlin existente. O cliente Android deve usar Firebase Authentication para obter o ID token e um cliente HTTP (OkHttp/Retrofit) para chamar a API. O endereço base do backend deve ser configurado por build variant, nunca codificado como segredo. Em pedidos com falha 401, renovar o token e repetir uma única vez; em 403, parar e apresentar erro de autorização; em 503, informar que o serviço ou configuração está indisponível.

Para sincronização offline, Room deve continuar a ser a fonte local durante indisponibilidade de rede. Implementar uma fila local com identificador estável por operação, sincronização idempotente e resolução explícita de conflitos antes de activar escrita automática em ambos os sentidos. Esta sincronização ainda não está implementada.

## CI

O workflow `.github/workflows/backend-checks.yml` executa instalação, typecheck, build e testes em cada push/PR para `main`. Confirmar o resultado em GitHub → Actions antes de considerar a compilação validada.
