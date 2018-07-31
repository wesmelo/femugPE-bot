const { error_default } = require('../message/default')
const { searchEvents, leanResponseEvents } = require('../services/github')

module.exports = bot => ({
    regexp: /^\/events/,
    async callback(msg, _) {
        try {
            const listEvents = await searchEvents(leanResponseEvents)
            listEvents.map(value => bot.sendMessage(msg.chat.id, `${value.title}\n ${value.link}\n\n`, {disable_web_page_preview: true}))
        } catch (err) {
            bot.sendMessage(msg.chat.id, error_default)
        }
    }
})
