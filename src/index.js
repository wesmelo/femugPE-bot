process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api')
const { TELEGRAM_BOT_TOKEN } = process.env;

if (!TELEGRAM_BOT_TOKEN) {
  console.error('Seems like you forgot to pass Telegram Bot Token. I can not proceed...');
  process.exit(1);
}

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true })

console.log('bot server running...');

function getRandom(arr){
  return arr[Math.floor(Math.random()* arr.length)];
 }

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Beep beep boop\n\nOlá, eu sou o bot do grupo FEMUG-PE');
    bot.sendMessage(msg.chat.id, 'O Front-End Meet-Up Group é um projeto que nasceu da necessidade de unir os desenvolvedores para que o acesso à informação seja feito em qualquer lugar que haja interesse do aprendizado.');
    bot.sendMessage(msg.chat.id, 'Faça parte do nosso grupo!\nConvite: https://bit.ly/2uOzSxs \nMeetup: https://bit.ly/2LtCpYx \nFacebook: https://bit.ly/2zTiQEp');
});

  //lista de saudações
bot.onText(/\/diga_ola/, (msg) => {
  const saudacao = [
    `Beep boop, ${msg.from.first_name}`,
    `Faaaaaaala ${msg.from.first_name}!`,
    `Dale ${msg.from.first_name}!`,
    `Alo alo alo  ${msg.from.first_name}`,
    `Eae ${msg.from.first_name}`,
    'É quente..',
    'É rocha',
    'Tudo tranquilo ctg?',
    'Só na marosidade, ${msg.from.first_name}?'
  ];
    bot.sendMessage(msg.chat.id, getRandom(saudacao));
});

//lista de jokes
bot.onText(/\/joke/, (msg) => {
  const joke = [
    'dispense',
    'é tu nada, visse',
    'apois viu',
    'e arroi'
  ];
  bot.sendMessage(msg.chat.id, getRandom(joke));
})

bot.on('new_chat_members', (msg) => {
  bot.sendMessage(msg.chat.id, `Mais um Front-ender chegando no grupo!\n\nSeja bem-vindo(a) ${msg.from.first_name}! Tudo tranquilo? Só na marosidade?`);
})