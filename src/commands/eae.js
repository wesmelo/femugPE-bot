const { best_regards } = require('../message/default')
const { getRandom } = require('../helpers/random')

module.exports = bot => ({
  regexp: /^\/eae/,
  callback(msg, _) {
    bot.sendMessage(msg.chat.id, getRandom(best_regards(msg)))
  }
})
