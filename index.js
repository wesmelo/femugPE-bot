require('dotenv').load()
process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api')
const { TELEGRAM_BOT_TOKEN } = process.env;
const { welcome, best_regards, joke, new_member  } = require('./src/message/default')
const { getRandom } = require('./src/helpers/random')

if (!TELEGRAM_BOT_TOKEN) {
  console.error('Seems like you forgot to pass Telegram Bot Token. I can not proceed...');
  process.exit(1);
}

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true })

bot.onText(/\/start/, (msg) => welcome.map(value => bot.sendMessage(msg.chat.id, value)));

bot.onText(/\/diga_ola/, (msg) => bot.sendMessage(msg.chat.id, getRandom(best_regards(msg))));

bot.onText(/\/joke/, (msg) => bot.sendMessage(msg.chat.id, getRandom(joke)));

bot.on('new_chat_members', (msg) => bot.sendMessage(msg.chat.id, new_member));

console.log('bot server running...');