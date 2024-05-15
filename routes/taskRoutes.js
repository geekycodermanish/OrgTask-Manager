const express = require('express');
const { createTask, getTasksByOrganization } = require('../controllers/taskController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', auth, createTask);
router.get('/organization/:organizationId', auth, getTasksByOrganization);

module.exports = router;
