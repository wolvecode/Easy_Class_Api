// const express = require('express');
// const router = express.Router();

const { User, validate } = require('../models/user.model');
exports.getAllUser = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error' + err));
};

exports.addUser = (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const email = req.body.email;
  const newUser = new User({ email });

  newUser
    .save()
    .then(() => res.json('User added'))
    .catch((err) => res.status(400).json('Error' + err));
};
