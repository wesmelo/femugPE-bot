const { error_default } = require('../message/default')
const {
  leanResponse,
  tratmentSearch,
  searchJobs
} = require('../services/github')

const parseJobs = jobList =>
  jobList.map(job => `${job.title}\n ${job.link}\n\n`)

module.exports = bot => ({
  regexp: /^\/jobs/,
  callback(msg, _) {
    const chatId = msg.chat.id

    searchJobs(tratmentSearch, leanResponse)
      .then(jobList => parseJobs(jobList))
      .then(jobs =>
        jobs.map(job =>
          bot.sendMessage(chatId, job, { disable_web_page_preview: true })
        )
      )
      .catch(err => {
        bot.sendMessage(chatId, error_default)
      })
  }
})
