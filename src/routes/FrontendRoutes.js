const express = require('express');
const router = express.Router();

//Controllers

const frontendValidation = require('./../utils/validation/frontend.validation');

const frontendRepo = require('./../repository/frontend.repository')

//Routes
router.get('/', frontendValidation.validateSignin, frontendRepo.index);
router.get('/login', frontendRepo.login);
router.post('/login', frontendRepo.tryLogin);


module.exports = router;

