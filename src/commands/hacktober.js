const { hacktober } = require('../message/default')

module.exports = bot => ({
  regexp: /^\/hacktober/,
  callback(msg, _) {
    hacktober.map(message => bot.sendMessage(msg.chat.id, message, { disable_web_page_preview: true }))
  }
})