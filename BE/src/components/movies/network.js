const express = require('express')
const Controller = require('./controller')
const response = require('../../../middlewares/responses')

const router = express.Router()

router.get('/', listMovies)
router.get('/ranked', listMoviesRank)
router.get('/:ID', getMovie)


function listMovies(req, res, next) {
  Controller.readMovies()
    .then(data => response.success(req, res, data))
    .catch(err => next(err))
}

function getMovie(req, res, next) {
  const { ID } = req.params

  Controller.getMovie(ID)
    .then(data => response.success(req, res, data))
    .catch(err => next(err))
}

function listMoviesRank(req, res, next) {
  const rank = req.query.rank

  Controller.readMoviesRanked(rank)
    .then(data => response.success(req, res, data))
    .catch(err => next(err))
}

module.exports = router