const { error_default } = require('../message/default')
const {
  searchWeather,
  returnSearch,
  calculateTemperature
} = require('../services/yahoo')

module.exports = bot => ({
  regexp: /^\/weather/,
  callback(msg, _) {
    searchWeather(returnSearch, calculateTemperature)
      .then(response => {
        bot.sendMessage(msg.chat.id, response)
      })
      .catch(err => {
        bot.sendMessage(msg.chat.id, error_default)
      })
  }
})
