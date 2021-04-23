const config = require('../config')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const movies = require('./components/movies/network')
app.use('/api/movies', movies)

app.listen(config.port, () => console.log(`Server listening on http://localhost:${config.port}`))
