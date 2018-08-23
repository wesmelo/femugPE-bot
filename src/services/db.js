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
    .push({ chatId, user: {id: user.id, first_name: user.first_name}, expireDate })
    .write()
  
  console.log({ chatId, user: {id: user.id, first_name: user.first_name}, expireDate })
}


const removePendingUser = user => {
  return getUsersPending()
    .remove({ user: {id: user.id} })
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
