const csv = require('csv-parser')
const fs = require('fs')

function readMovies() {
  return new Promise((resolve, reject) => {

    const results = []
    fs.createReadStream('MoviesOnStreamingPlatforms.csv')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results.slice(0, 20)))
      //.on('end', () => resolve(results.filter(i => i.PrimeVideo === '1')))
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




function readMoviesRanked(rank) {
  // console.log(rank)
  return new Promise((resolve, reject) => {
    if(!rank) {
      reject('Sin rank')
    }

    const results = []
    if(rank === 'RottenTomatoes') {
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
    }

    if(rank === 'IMDb') {
      fs.createReadStream('MoviesOnStreamingPlatforms.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        //.on('end', () => resolve(results.slice(0, 10)))
        .on('end', () => resolve(results.sort((a, b) => {
          if(a.IMDb > b.IMDb) {
            return 1
          } else {
            return -1
          }
        }).reverse()))
    }
  })
}



function getMovieStrem(stream) {
  return new Promise((resolve, reject) => {
    if(!stream) {
      reject('There is no stream company')
    }
    const results = []

    if(stream === 'Netflix') {
      fs.createReadStream('MoviesOnStreamingPlatforms.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => resolve(results.filter(item => item.Netflix === '1').splice(0, 10)))
    }
    if(stream === 'PrimeVideo') {
      fs.createReadStream('MoviesOnStreamingPlatforms.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => resolve(results.filter(item => item.PrimeVideo === '1').splice(0, 20)))
    }
    if(stream === 'Disney+') {
      fs.createReadStream('MoviesOnStreamingPlatforms.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => resolve(results.filter(item => item.Disney === '1').splice(0, 20)))
    }
    if(stream === 'Hulu') {
      fs.createReadStream('MoviesOnStreamingPlatforms.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => resolve(results.filter(item => item.Hulu === '1').splice(0, 20)))
    }
  })
}



module.exports = {
  readMovies,
  getMovie,
  readMoviesRanked,
  getMovieStrem
}