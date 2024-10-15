const express = require('express');
const connectDB = require('./DB/database')

const dotenv = require('dotenv')
dotenv.config()

connectDB()

const app = express()

// For the server
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
	console.log(`Server connected on http://localhost:${PORT}`)
})