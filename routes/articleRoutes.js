const express = require('express');
const {getArticles} = require('../controllers/articleControllers');

const router = express.Router();

// Get all articles with optional filters
router.get('/', getArticles);

module.exports = router

