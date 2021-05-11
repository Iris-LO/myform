const express = require('express');
const router = express.Router();

const dataSchema = require('../schemas/dataSchema');
const userController = require('../controllers/userController');


// POST 
router.post('/signup', (dataSchema.userSignupSchema, userController.signup));

module.exports = router;