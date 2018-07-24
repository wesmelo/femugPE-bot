require('dotenv').load()

const { TELEGRAM_BOT_TOKEN } = process.env
if (!TELEGRAM_BOT_TOKEN) {
  console.error('Seems like you forgot to pass Telegram Bot Token. I can not proceed...')
  process.exit(1)
}

process.env.NTBA_FIX_319 = 1
const TelegramBot = require('node-telegram-bot-api')

const { new_member } = require('./src/message/default')
const registerCommands = require('./src/helpers/registerCommands')

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true })
registerCommands(bot)

bot.on('new_chat_members', msg => bot.sendMessage(msg.chat.id, new_member(msg)))

console.log('bot server running...')
