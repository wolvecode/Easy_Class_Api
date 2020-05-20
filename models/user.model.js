const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

function val(user) {
  const schema = {
    email: Joi.string().required(),
  };
  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = val;
