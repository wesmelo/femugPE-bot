const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname + '/../../db.json')
const db = low(adapter)

db.defaults({ usersPendingConfirmation: [] }).write()

const getUsersPending = () => {
  return db.get('usersPendingConfirmation')
}

const addPendingUser = (chatId, userId, expireDate) => {
  return getUsersPending()
    .push({ chatId, userId, expireDate })
    .write()
}

const removePendingUser = userId => {
  return getUsersPending()
    .remove({ userId })
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
