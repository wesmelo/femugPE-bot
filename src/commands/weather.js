const { error_default } = require('../message/default')
const {
  searchWeather,
  returnSearch,
  calculateTemperature
} = require('../services/yahoo')

module.exports = bot => ({
  regexp: /^\/weather/,
  async callback(msg, _) {
    try {
      const response = await searchWeather(returnSearch, calculateTemperature)
      bot.sendMessage(msg.chat.id, response)
    } catch(err) {
      bot.sendMessage(msg.chat.id, error_default)
    }
  }
})
