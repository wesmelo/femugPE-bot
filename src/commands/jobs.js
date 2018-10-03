const { error_default } = require('../message/default')
const {
  leanResponse,
  tratmentSearch,
  searchJobs, 
  parseJobs
} = require('../services/github')


module.exports = bot => ({
  regexp: /^\/jobs/,
  async callback(msg, _) {
    try {
      const jobList = await searchJobs(tratmentSearch, leanResponse)
      const jobs = parseJobs(jobList)
      jobs.map(job => bot.sendMessage(msg.chat.id, job, { disable_web_page_preview: false }))
    } catch (err) {
      console.log(err)
      bot.sendMessage(msg.chat.id, error_default)
    }
  }
})
