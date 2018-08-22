const { error_default } = require('../message/default')
const { searchNoticies, leanResponse } = require('../services/frontendfront')

module.exports = bot => ({
    regexp: /^\/news/,
    async callback(msg, _) {
        try {
            const listNews = await searchNoticies(leanResponse)
            listNews.map(value => bot.sendMessage(msg.chat.id, `${value.title}\n ${value.link}\n\n`, {disable_web_page_preview: true}))
        } catch (err) {
            console.log(err)
            bot.sendMessage(msg.chat.id, error_default)
        }
    }
})
