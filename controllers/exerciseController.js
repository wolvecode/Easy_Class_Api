const { Exercise, validate } = require('../models/exercise.model')

exports.getAllExercise = (req, res) => {
  Exercise.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error' + err))
}

exports.getExerciseById = (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json('Error' + err))
}

exports.createExercise = (req, res) => {
  const { error } = validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  let newExercise = new Exercise({
    username: req.body.username,
    description: req.body.description,
    duration: Number(req.body.duration),
  })

  newExercise
    .save()
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json('Error' + err))
}

exports.updateExercise = (req, res) => {
  const { error } = validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  Exercise.findByIdAndUpdate(
    req.params.id,
    {
      username: req.body.username,
      description: req.body.description,
      duration: req.body.duration,
    },
    { new: true }
  )
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json('Error' + err))
}

exports.deleteExercise = async (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json('Error' + err))
}
