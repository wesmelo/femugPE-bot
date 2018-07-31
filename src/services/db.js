const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname + '/../../db.json')
const db = low(adapter)

db.defaults({ usersPendingConfirmation: [] }).write()

const getUsersPending = () => {
  return db.get('usersPendingConfirmation')
}

const addPendingUser = (chatId, user, expireDate) => {
  return getUsersPending()
    .push({ chatId, user, expireDate })
    .write()
}

const removePendingUser = user => {
  return getUsersPending()
    .remove({ user })
    .write()
}

const getExpiredUsers = expireDate => {
  return getUsersPending()
    .filter(u => {
      return u.expireDate < expireDate
    })
    .value()
}

module.exports = {
  addPendingUser,
  removePendingUser,
  getExpiredUsers
}
