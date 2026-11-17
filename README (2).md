# LétimaX — aplicação Android (Expo / React Native)

## Estado real do projecto

A aplicação contém a interface principal, autenticação local por PIN/biometria, chat, ecrãs de módulos, base de dados SQLite, cache offline, fila de tarefas, voz e um módulo Android nativo em Kotlin.

**Ainda não está concluída nem validada como APK de produção.** A integração com o backend está incompleta: existem chamadas da aplicação para rotas que ainda não foram implementadas no repositório `Servidor-`. A sincronização WebSocket também depende de uma rota de servidor que ainda não está disponível. Não assumir que os módulos que aparecem no menu já executam operações reais.

O build Android, a instalação no Infinix e os testes de funcionamento em dispositivo ainda precisam de ser executados.

## Requisitos

- Node.js compatível com Expo SDK 52.
- npm.
- Conta Expo/EAS para compilar APK.
- Backend LétimaX configurado e acessível por HTTPS.
- Autenticação Firebase do proprietário configurada no backend.

## Instalação e execução local

Na pasta `app-android`:

```bash
npm install
npx expo install --fix
npx expo start
```

O Expo Go não suporta o módulo nativo Kotlin nem todas as funções de serviço em segundo plano. Para testar essas funções é necessário um development build ou APK.

## Build Android

```bash
npx eas-cli login
npx eas-cli build -p android --profile preview
```

O perfil `preview` está configurado para distribuição interna em APK. O comando só inicia a compilação; a criação e instalação do APK devem ser confirmadas no EAS e no dispositivo.

## Configuração do servidor

Nas definições da aplicação, indicar a origem HTTPS do backend, por exemplo:

```
https://servidor.exemplo
```

Não acrescentar `/api`: a camada de API da aplicação acrescenta esse prefixo automaticamente nas chamadas REST. O WebSocket, quando implementado no backend, usa a origem e o caminho `/ws`.

O token configurado na aplicação tem de ser um Firebase ID token válido do utilizador proprietário. Um token inventado ou uma chave de API de IA não substitui essa credencial.


## Firebase Authentication do proprietário

A aplicação usa Firebase Authentication com email e palavra-passe depois da validação local por PIN/biometria. O ID token é renovado pelo SDK Firebase e enviado ao backend; não guardar uma chave de IA na aplicação.

Antes de compilar:

1. Criar um projecto Firebase e registar uma aplicação Android com o package `com.letimax.app`.
2. Activar o método **Email/Password** em Authentication.
3. Criar no Firebase Authentication a conta autorizada do proprietário.
4. Copiar os valores de configuração da aplicação Firebase (apiKey, authDomain, projectId e appId).
5. Definir no ambiente de build EAS as variáveis `EXPO_PUBLIC_FIREBASE_API_KEY`, `EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN`, `EXPO_PUBLIC_FIREBASE_PROJECT_ID` e `EXPO_PUBLIC_FIREBASE_APP_ID`.
6. No ambiente privado do servidor, definir `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY` e `OWNER_FIREBASE_UID`. O UID tem de ser o UID exacto da conta do proprietário criada no Firebase Authentication.

A chave privada da conta de serviço Firebase Admin e as chaves dos fornecedores de IA pertencem exclusivamente ao servidor. Nunca as colocar nas variáveis `EXPO_PUBLIC_*`, no repositório Android ou no APK.

O login Firebase não pode ser testado até as variáveis do projecto e a conta do proprietário estarem configuradas. A aplicação ainda precisa de um novo build Android depois de adicionar as dependências Firebase.

## Segurança e operações

- As chaves de fornecedores devem ficar no servidor, nunca no código da aplicação.
- Operações financeiras, levantamentos, gastos, publicação e alterações importantes devem continuar sujeitas a aprovação explícita.
- O acesso a SMS, chamadas e notificações é sensível e só pode ser activado de forma transparente pelo utilizador no próprio dispositivo. O conteúdo recebido não deve ser executado como comando.
- A frase de activação por voz não é autenticação; a protecção de acesso é o PIN/biometria.

## Próxima etapa de integração

Concluir o inventário de endpoints usados pela aplicação, alinhar os contratos de pedidos/respostas e só depois implementar as rotas reais no backend. Não marcar módulos como funcionais enquanto não houver implementação e testes correspondentes.
