const Article = require('../models/Article');

// Getting all articles with optional filters
const getArticles = async (req, res)=>{
	try{
		const {tags, publishedDate} = req.query;
		const filter = {};

		if (tags) filter.tags = {$in: tags.split(',')};
		if (publishedDate) filter.publishedDate = {$gte: new Date(publishedDate)};

		const articles = await Article.find(filter);
		res.status(200).json(articles);
	}catch(err){
		res.status(500).json({error: 'Server Error'});
	}
};

// A single article by ID
const getArticleById = async (req, res)=> {
	try {
		const article = await Article.findById(req.params.id);
		if (!article)
			return res.status(404).json({message: 'Article not found'});
		res.status(200).json(article);
	} catch (err){
		res.status(500).json({err: 'Server error'});
	}
}

// Create a new article
const newArticle = async (req, res)=>{
	try {
		const {title, content, tags, publishedDate} = req.body;
		const article = new Article({
			title, content, publishedDate, tags
		});

		await article.save();
		res.status(201).json(article);
	} catch (err){
		res.status(500).json({message: 'Server error'});
	}
};

module.exports = {getArticles, getArticleById, newArticle}