const express = require('express');
const connectDB = require('./DB/database');
const articleRoutes = require('./routes/articleRoutes');
require('dotenv').config()

connectDB()		//MongoDB database

const app = express()
app.use(express.json())	//middleware instead of bodypalser

// routes
app.use('/articles', articleRoutes);
app.get('/home', (req, res)=>{
	res.send('welcome');
})


// For the server
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
	console.log(`Server connected on http://localhost:${PORT}`)
})