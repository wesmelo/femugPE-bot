const { welcome } = require('../message/default')

module.exports = bot => ({
  regexp: /^\/start/,
  callback(msg, _) {
    welcome.map(message => bot.sendMessage(msg.chat.id, message))
  }
})