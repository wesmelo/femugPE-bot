const glob = require('glob')

const handler = (bot, callback) => (msg, match) => {
  // Pre command
  // TODO: Prevent flood 
  callback(msg, match)
  // Pos command
}

const registerCommands = bot => {
  const commandFiles = glob.sync(__dirname + '/../commands/*.js')

  commandFiles.forEach(file => {
    const { regexp, callback } = require(file)(bot)
    bot.onText(regexp, handler(bot, callback))
  })
}

module.exports = registerCommands
