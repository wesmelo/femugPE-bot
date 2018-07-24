# Curtiu o bot e quer ajudar? Bora nessa!

Primeiramente, **obrigado por ajudar**! O bot é um projeto aberto, sem fins lucrativos, apenas para praticar nossas skills e contribuir com a comunidade :facepunch:

Então, se já conhece o procedimento de desenvolvimento, é só seguir o [flow](https://guides.github.com/introduction/flow/)

* Faça um `fork` do projeto.
* Utilize uma `branch` nova. Manteremos a organização de ter cada coisa na sua devida branch.
* Ao terminar, faça um **`pull request`** para a branch `master`.

## Contribuindo

Atualmente, o bot utiliza a [_Node.js Telegram Bot API_](https://github.com/yagop/node-telegram-bot-api) para interação com o servidor de telegram.

``
npm install --save node-telegram-bot-api
``

## Testar ajustes no bot

Para que não haja intermitência no bot em _produção_ enquanto estamos atualizando, há um bot de teste, o [Josnel Test Bot](t.me/JosnelTestBot).
Token do bot de teste: ~`623318107:AAE1TZmdQn1KdyoWRc3Kq7lFNHglPRsbiWg`~

No código, substitua

``
const { TELEGRAM_BOT_TOKEN } = process.env;
``

por

``
const TELEGRAM_BOT_TOKEN = 'token acima';
``

## Host e Servidor

O bot atualmente roda no [`glitch.com`](https://glitch.com/edit/#!/wonderful-rail?path=README.md:1:0), mantendo o funcionando _on time_.

Para validar se as atualizações estão funcionando normalmente, no código possui uma linha que habita a criação da execução local

``
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true })
``

>**Polling** - É uma tecnologia não tão popular assim... mas permite rodar o chatbot, no caso, localmente sem qualquer endereço online nem tanto servidor dedicado.


Obrigado pela ajuda!

Caso tenha alguma dúvida ou ideia relativas ao projeto, crie uma issue e bora discutir!
