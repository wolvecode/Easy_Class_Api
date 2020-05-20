const Joi = require('joi')
const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },

  {
    timestamps: true,
  }
)

const Exercise = mongoose.model('Exercise', exerciseSchema)

function val(exercise) {
  const schema = {
    username: Joi.string().required(),
    description: Joi.string().required(),
    duration: Joi.required(),
    date: Joi.date(),
  }

  return Joi.validate(exercise, schema)
}

exports.Exercise = Exercise
exports.validate = val
