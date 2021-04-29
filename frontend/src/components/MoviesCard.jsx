import React from 'react'
import styles from './styles/MoviesCard.module.css'

function MoviesCard({ data }) {
  const dif = data.Directors.split(' ')
  const director = dif[dif.length - 1]
  return (
    <div className={styles.movie}>
      <h2 className={styles.title}>{data.Title}</h2>
      <h4 className={styles.director}>{director}</h4>
      <p className={styles.year}>{data.Year}</p>
      <p className={styles.stream}>
        Available on: {' '}
        {
          data.Netflix === '1' && 'Netflix'
        }
        {
          data.PrimeVideo === '1' && 'Prime Video'
        }
        {
          data.Disney === '1' && 'Disney+'
        }
        {
          data.Hulu === '1' && 'Hulu'
        }
      </p>
    </div>
  )
}

export default MoviesCard
