const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true,
	},
	tags: {
		type: [String],
		required: true
	},
	publishedDate: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Article', articleSchema)