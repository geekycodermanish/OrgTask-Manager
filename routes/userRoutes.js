const express = require('express');
const { register, login, getUser } = require('../controllers/userController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/', auth, getUser);

module.exports = router;

