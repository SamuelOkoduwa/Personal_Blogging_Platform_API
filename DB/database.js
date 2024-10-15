const mongoose = require('mongoose');
const dotenv = require('dotenv');

const config = async ()=> {
	await mongoose.connect(process.env.mongodbURL)
	.then(()=>{
		console.log('Database connnected ...')
	}).catch((err)=>{
		console.log(err.message)
	})
}

module.exports = config