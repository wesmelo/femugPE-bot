const { joke } = require('../message/default')
const { getRandom } = require('../helpers/random')

module.exports = bot => ({
  regexp: /^\/joke/,
  callback(msg, _) {
    bot.sendMessage(msg.chat.id, getRandom(joke))
  }
})
