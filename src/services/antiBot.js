const {
  addPendingUser,
  removePendingUser,
  getExpiredUsers
} = require('../services/db')

// 1 minute == 60 * 1000
const CHECK_BAN_TIMEOUT = 60 * 1000

// 12 hours == 12 * 60 * 60 * 1000
const TIME_FOR_CONFIRMATION = 2 * 60 * 60 * 1000


const onNewChatMembers = (bot, welcomeMessageFactory) => msg => {
  const chatId = msg.chat.id
  const user = msg.from
  const reply_markup = JSON.stringify({
    inline_keyboard: [
      [
        {
          text: 'Click AQUI se tu náo é um bot ( ° ͜ʖ ͡°)',
          callback_data: JSON.stringify({ new_chat_members: true })
        }
      ]
    ]
  })

  bot.sendMessage(chatId, welcomeMessageFactory(msg), {
    reply_markup,
    reply_to_message_id: msg.message_id
  })

  const expireDate = (msg.date * 1000) + TIME_FOR_CONFIRMATION
  addPendingUser(chatId, user, expireDate)
}

const onCallbackQuery = bot => cq => {
  const data = JSON.parse(cq.data)
  if (!data.new_chat_members) {
    return
  }

  const removedUsers = removePendingUser(cq.from)
  if (!removedUsers.length) {
    return bot.answerCallbackQuery(cq.id, {
      text: ' ᶘ ᵒᴥᵒ ᶅ Tlgd que tu não é um bot ashuahsuahs',
      showAlert: true
    })
  }

  bot.answerCallbackQuery(cq.id, {
    text: 'Valeu por não ser um bot! ( ͡~ ͜ʖ ͡°)',
    showAlert: true
  })
}

const kickUnconfirmedUsers = bot => () => {
  const now = Date.now()
  const expiredUsers = getExpiredUsers(now)

  expiredUsers.map(expired => {
    Promise.resolve()
      .then(_ => bot.getChatMember(expired.chatId, expired.user.id))
      .then(_ => bot.kickChatMember(expired.chatId, expired.user.id))
      .then(_ => {
        bot.sendMessage(expired.chatId, `Usuário ${expired.user.first_name} removido por não confirmar que não é um bot ಠ_ಠ`)
        removePendingUser(expired.user)
      })
      .catch(err => {
        if (err.response.body.description.search('USER_NOT_PARTICIPANT') > 0) {
          return removePendingUser(expired.user)
        }
        console.error(err)
      })
  })
}

const antiBot = (bot, welcomeMessageFactory) => {
  bot.on('new_chat_members', onNewChatMembers(bot, welcomeMessageFactory))
  bot.on('callback_query', onCallbackQuery(bot))
  setInterval(kickUnconfirmedUsers(bot), CHECK_BAN_TIMEOUT)
}

module.exports = antiBot
