const express = require('express');
const connectDB = require('./DB/database');
const articleRoutes = require('./routes/articleRoutes');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');

connectDB()		//MongoDB database

// Middleware
const app = express();
app.use(cors());
app.options('*', cors());
app.use(express.json())	//instead of bodypalser
app.use(morgan('tiny'));


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