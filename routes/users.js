const express = require('express');
const router = express.Router();
const { getAllUser, addUser } = require('../controllers/userController');

router.get('/', getAllUser);

router.post('/add', addUser);

module.exports = router;
