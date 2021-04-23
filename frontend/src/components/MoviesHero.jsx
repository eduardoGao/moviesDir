import React, { useState } from 'react'
import styles from './styles/MoviesHero.module.css'

function MoviesHero() {
  const movies = [
    {
      id: 1,
      title: 'Terror',
      img: 'https://i.pinimg.com/originals/61/8e/fa/618efafb461c6398b6e0cf53fbe5697c.jpg'
    },
    {
      id: 2,
      title: 'Suspense',
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/el-laberinto-del-fauno-reestreno-cines-1593590175.jpg'
    },
    {
      id: 3,
      title: 'Romance',
      img: 'https://filasiete.com/wp-content/uploads/2014/03/gravity2.jpg'
    }
  ]

  const [state, setState] = useState(0)

  function moveForward() {
    if(state >= movies.length - 1) {
      setState(0)
    } else {
      setState(state + 1)
    }
  }

  function moveBack() {
    if(state <= 0) {
      setState(movies.length - 1)
    } else {
      setState(state - 1)
    }
  }


  return (
    <div className={styles.hero}>
      <div className={styles.titleCont}>
        <h1>Genre: {movies[state].title}</h1>
        <h2>No. {movies[state].id}</h2>
      </div>
      <div className={styles.gradient}></div>
      <div className={styles.imageBack}>
        <img src={movies[state].img} alt=""/>
      </div>
      <div className={styles.buttons}>
        <button onClick={moveBack} className={`${styles.button} ${styles.bLeft}`}>L</button>
        <button onClick={moveForward} className={`${styles.button} ${styles.bRight}`}>R</button>
      </div>
    </div>
  )
}

export default MoviesHero
