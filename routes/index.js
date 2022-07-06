const express = require('express')
const router = express.Router()
const portfolioController = require('../controllers.js/portfolioController')

router.get('/', portfolioController.home)

module.exports = router