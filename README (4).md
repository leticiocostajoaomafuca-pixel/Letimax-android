# LétimaX — APP (Fase 1)

1. Instalar dependências: `npm install` e depois `npx expo install --fix`
2. Arrancar: `npx expo start` e abrir no Expo Go (ou usar snack.expo.dev / GitHub Codespaces se não tiver PC)
3. Primeiro acesso: criar PIN -> URL (https) e token do servidor -> chave do Claude (vai para o servidor)

Fase 1: tema claro/escuro, PIN + biometria do telemóvel com bloqueio progressivo, chat, dashboard,
menu lateral com todos os módulos ligados aos endpoints, configurações com chaves (enviadas ao servidor).
Fase 2: ecrãs dedicados (Motor de Receita com Aprovar/Rejeitar, Metas, Produtos...), SQLite offline completo,
cofre de passwords, contactos, documentos.
Fase 3 (precisa de build nativo, não funciona no Expo Go): serviço em segundo plano, chamadas/SMS,
comandos de voz de hardware, reconhecimento de voz.
