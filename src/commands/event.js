const { error_default } = require('../message/default')
const { searchEvents, leanResponseEvents } = require('../services/github')

module.exports = bot => ({
    regexp: /^\/events/,
    async callback(msg, _) {
        try {
            const listEvents = await searchEvents(leanResponseEvents)
            
            if(listEvents && listEvents.length > 0){
              listEvents.map(value => bot.sendMessage(msg.chat.id, `${value.title}\n ${value.link}\n\n`, {disable_web_page_preview: false}))
            } else{
              bot.sendMessage(msg.chat.id, `Não há eventos para os proximos dias :/ \n\n Mas se liga no Slack do OxenTI, sempre tem coisa nova por lá \n\nhttps://oxentipe-slack-invite.herokuapp.com/`)
            }
          
        } catch (err) {
            bot.sendMessage(msg.chat.id, error_default)
        }
    }
})
