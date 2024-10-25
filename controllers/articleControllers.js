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

module.exports = {getArticles}