const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.post('/', TaskController.create)
router.get('/getAll', TaskController.getAll)
router.get('/id/:_id', TaskController.getById)
router.put('/id/:_id', TaskController.update)
router.put('/title/:_id', TaskController.update)
router.delete('/delete/:_id', TaskController.delete)

module.exports = router