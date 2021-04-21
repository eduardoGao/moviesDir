const express = require('express')
const Controller = require('./controller')

const router = express.Router()

router.get('/', listMovies)
// router.get('/:ID', getMovie)
router.get('/ranked', listMoviesRank)


function listMovies(req, res, next) {
  Controller.readMovies()
    .then(data => res.send(data))
    .catch(err => next(err))
}

function getMovie(req, res, next) {
  const { ID } = req.params

  Controller.getMovie(ID)
    .then(data => res.send(data))
    .catch(err => next(err))
}

function listMoviesRank(req, res, next) {
  Controller.readMoviesRanked()
    .then(data => res.send(data))
    .catch(err => next(err))
}

module.exports = router