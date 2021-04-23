import React, { useState, useEffect } from 'react'
import styles from './styles/Movies.module.css'
//import useFetch from '../hooks/useFetch'
import { MoviesCard } from '../components'

function Movies() {
  //const movies = useFetch('http://localhost:3001/api/movies')

  const [movies, setMovies] = useState()

  async function fetchReq(url) {
    const req = await fetch(url)
    const data = await req.json()
    await setMovies(data)
  }

  useEffect(() => {
    fetchReq('http://localhost:3001/api/movies')
    // eslint-disable-next-line
  }, [])

  const handleMovies = (e) => {
    const stream = e.target.name
    console.log(stream)
    fetchReq(`http://localhost:3001/api/movies/stream/${stream}`)
  }

  return (
    <section>
      <h1 className={styles.moviesTitle}>Movies</h1>
      <div className={styles.selectButtons}>
        <button className={styles.buttons} name='All' onClick={handleMovies}>All</button>
        <button className={styles.buttons} name='Netflix' onClick={handleMovies}>Netflix</button>
        <button className={styles.buttons} name='PrimeVideo' onClick={handleMovies}>Prime Video</button>
        <button className={styles.buttons} name='Hulu' onClick={handleMovies}>Hulu</button>
        <button className={styles.buttons} name='Disney+' onClick={handleMovies}>Disney+</button>
      </div>
      <section className={styles.moviesCont}>
        {
          movies?.data.map(item => <MoviesCard data={item} key={item.ID} />)
        }
      </section>
    </section>
  )
}

export default Movies
