require('dotenv').load()

const { TELEGRAM_BOT_TOKEN } = process.env
if (!TELEGRAM_BOT_TOKEN) {
  console.error('Seems like you forgot to pass Telegram Bot Token. I can not proceed...')
  process.exit(1)
}

process.env.NTBA_FIX_319 = 1
const TelegramBot = require('node-telegram-bot-api')

const { new_member } = require('./src/message/default'),
  registerCommands = require('./src/helpers/registerCommands')
  antiBot = require('./src/services/antiBot')

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true })
registerCommands(bot)
antiBot(bot, new_member)

console.log('bot server running...')
