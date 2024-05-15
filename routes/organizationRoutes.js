const express = require('express');
const { createOrganization, getOrganizations } = require('../controllers/organizationController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', auth, createOrganization);
router.get('/', auth, getOrganizations);

module.exports = router;
