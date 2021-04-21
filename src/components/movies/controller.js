const csv = require('csv-parser')
const fs = require('fs')

function readMovies() {
  return new Promise((resolve, reject) => {

    const results = []
    fs.createReadStream('MoviesOnStreamingPlatforms.csv')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results.slice(0, 10)))
      //.on('end', () => resolve(results.map(i => i.ID)))
  })
}

function getMovie(ID) {
  //const id = String(ID)
  return new Promise((resolve, reject) => {
    const results = []
    fs.createReadStream('MoviesOnStreamingPlatforms.csv')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results.find(item => item.ID === ID)))
  })
}

function readMoviesRanked() {
  return new Promise((resolve, reject) => {

    const results = []
    fs.createReadStream('MoviesOnStreamingPlatforms.csv')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      //.on('end', () => resolve(results.slice(0, 10)))
      .on('end', () => resolve(results.sort((a, b) => {
        if(a.RottenTomatoes > b.RottenTomatoes) {
          return 1
        } else {
          return -1
        }
      }).reverse()))
  })
}

module.exports = {
  readMovies,
  getMovie,
  readMoviesRanked
}