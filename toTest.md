# Contribuindo

Atualmente, o bot utiliza a [_Node.js Telegram Bot API_](https://github.com/yagop/node-telegram-bot-api) para interação com o servidor de telegram.

``
npm install --save node-telegram-bot-api
``

## Testar ajustes no bot

Para que não haja intermitência no bot em _produção_ enquanto estamos atualizando, há um bot de teste, o [Josnel Test Bot](t.me/JosnelTestBot).
Token do bot de teste: ~623318107:AAE1TZmdQn1KdyoWRc3Kq7lFNHglPRsbiWg~
No código, substitua o:

``
const { TELEGRAM_BOT_TOKEN } = process.env;
``

por:

``
const TELEGRAM_BOT_TOKEN = 'token acima';
``

## Validando

Para validar se as atualizações estão funcionando normalmente, no código, possui uma linha que habita a criação da execução local

``
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true })
``

>**Polling** - É uma tecnologia não tão popular assim... mas permite rodar o chatbot, no caso, localmente sem qualquer endereço online nem tanto servidor dedicado.
