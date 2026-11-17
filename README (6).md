# LétimaX — APP (Fase 3)

Fase 3 precisa de BUILD NATIVO (não funciona no Expo Go):
1. `npm install` e `npx expo install --fix`
2. `npx eas-cli login` e `npx eas-cli build -p android --profile preview` (gera um APK para instalar)
   Para desenvolver: `--profile development` e depois `npx expo start --dev-client`.
3. Instalar o APK no telemóvel. Na 1ª abertura: Configurações -> Serviço em segundo plano -> ligar,
   e "Permitir uso sem limite de bateria".

Comandos de voz: botão do microfone (um comando) ou o ícone da orelha (escuta contínua, exige
dizer "LétimaX, ..." e o ecrã fica ligado). O servidor deve expor wss://<servidor>/ws para os alertas.


Fase 2 já feita: Motor de Receita, Metas, Produtos, Contactos, Passwords.


1. Instalar dependências: `npm install` e depois `npx expo install --fix`
2. Arrancar: `npx expo start` e abrir no Expo Go (ou usar snack.expo.dev / GitHub Codespaces se não tiver PC)
3. Primeiro acesso: criar PIN -> URL (https) e token do servidor -> chave do Claude (vai para o servidor)

Fase 1: tema claro/escuro, PIN + biometria do telemóvel com bloqueio progressivo, chat, dashboard,
menu lateral com todos os módulos ligados aos endpoints, configurações com chaves (enviadas ao servidor).
Fase 2: ecrãs dedicados (Motor de Receita com Aprovar/Rejeitar, Metas, Produtos...), SQLite offline completo,
cofre de passwords, contactos, documentos.
Fase 3 (precisa de build nativo, não funciona no Expo Go): serviço em segundo plano, chamadas/SMS,
comandos de voz de hardware, reconhecimento de voz.
