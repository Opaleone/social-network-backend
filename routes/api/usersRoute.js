const router = require('express').Router()
const { getUsers, getSingleUser, createUser, updateUser, deleteUser, newFriend , deleteFriend } = require('../../controllers/userController')

router
  .route('/')
  .get(getUsers)
  .post(createUser)

router
  .route('/:id')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser)

router
  .route('/:id/friends/:friendId')
  .post(newFriend)
  .delete(deleteFriend)

module.exports = router