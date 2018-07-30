require('dotenv').load()
process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api')
const { TELEGRAM_BOT_TOKEN } = process.env;
const { welcome, best_regards, joke, new_member, error_default  } = require('./src/message/default')
const { getRandom } = require('./src/helpers/random')
const { leanResponse: leanResponseGithub, tratmentSearch, searchJobs  } = require('./src/services/github')
const { leanResponse: leanResponseNoticies, searchNoticies } = require('./src/services/frontendfront')
const { searchWeather, returnSearch, calculateTemperature } = require('./src/services/yahoo')

if (!TELEGRAM_BOT_TOKEN) {
  console.error('Seems like you forgot to pass Telegram Bot Token. I can not proceed...');
  process.exit(1);
}

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true })

bot.onText(/\/start/, (msg) => welcome.map(value => bot.sendMessage(msg.chat.id, value)));

bot.onText(/\/eae/, (msg) => bot.sendMessage(msg.chat.id, getRandom(best_regards(msg))));

bot.onText(/\/joke/, (msg) => bot.sendMessage(msg.chat.id, getRandom(joke)))


bot.onText(/\/new/, async (msg) => {
  try {
    const listJobs = await searchNoticies(leanResponseNoticies)
    listJobs.map(value => bot.sendMessage(msg.chat.id, `${value.title}\n ${value.link}\n\n`,{disable_web_page_preview: true}))
  } catch (err) {
    bot.sendMessage(msg.chat.id, error_default)
  }
})

bot.onText(/\/jobs/, async (msg) => {
  try {
    const listJobs = await searchJobs(tratmentSearch, leanResponseGithub)
    listJobs.map(value => bot.sendMessage(msg.chat.id, `${value.title}\n ${value.link}\n\n`))
  } catch (err) {
    bot.sendMessage(msg.chat.id, error_default)
  }
})

bot.onText(/\/weather/, async (msg) => {
  try {
    const response = await searchWeather(returnSearch, calculateTemperature)
    bot.sendMessage(msg.chat.id, response)
  } catch (err) {
    bot.sendMessage(msg.chat.id, error_default)
  }
})

bot.on('new_chat_members', (msg) => bot.sendMessage(msg.chat.id, new_member));

console.log('bot server running...');
