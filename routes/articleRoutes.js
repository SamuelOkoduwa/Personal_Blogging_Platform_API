const express = require('express');
const {getArticles, getArticleById, newArticle} = require('../controllers/articleControllers');

const router = express.Router();

// Get all articles with optional filters
router.get('/', getArticles);
router.get('/:id', getArticleById);
router.post('/create', newArticle);

module.exports = router

