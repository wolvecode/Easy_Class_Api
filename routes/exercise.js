const express = require('express')
const router = express.Router()

const {
  getAllExercise,
  createExercise,
  updateExercise,
  getExerciseById,
  deleteExercise,
} = require('../controllers/exerciseController')

router.get('/', getAllExercise)

router.get('/:id', getExerciseById)

router.post('/', createExercise)

router.put('/update/:id', updateExercise)

router.delete('/:id', deleteExercise)

module.exports = router
