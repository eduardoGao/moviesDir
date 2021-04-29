import React, { useState } from 'react'
import styles from './styles/MoviesHero.module.css'
import useFetch from '../hooks/useFetch'
import { useSpring, animated } from 'react-spring'

function MoviesHero() {
  const data = useFetch('http://localhost:3001/api/movies/all')

  const movies = [
    'https://sabanerox.files.wordpress.com/2010/08/inception-building-curve.jpg',
    'https://cnet3.cbsistatic.com/img/0e0gQzNlS7EG9r0oggFOhMuS0AA=/2017/10/12/034ad7ec-1d70-4172-bb17-8ce40d27c1ab/the-matrix.jpg',
    'https://dam.smashmexico.com.mx/wp-content/uploads/2018/04/26170533/Avengers-Infinity-War-Test.jpg',
    'https://images.squarespace-cdn.com/content/v1/5c62c09c4d546e27dc1016c7/1556603779117-T0Y0SY385DHV8U5OCQ5B/ke17ZwdGBToddI8pDm48kNFVcFOwdnapeq71qeQUgs97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mxU0godxi02JM9uVemPLqwHcXcznSXM8wdOrIu8sZFZGrLMWnrcoMrYArZy3doh_A/BTTF1_title.jpg?format=2500w',
    'https://prod-images.tcm.com/Master-Profile-Images/thegoodthebadandtheugly1968.18724.jpg',
    'https://www.alertageekchile.cl/wp-content/uploads/2018/12/1-NXJqARGP7W96TBdrvnXoZw.jpeg',
    'https://i.pinimg.com/originals/29/a8/8a/29a88abefc5e1eddeadce04265177e45.jpg',
    'https://www.claqueta.es/wp-content/uploads/2019/06/django-unchained.jpg',
    'https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2019/04/mv5botkxmzqymty3nl5bml5banbnxkftztcwmtu4mzczmw._v1_sx1471_cr001471999_al_.jpg?offset-x=0&offset-y=0',
    'https://pousta.com/wp-content/uploads/2009/02/Inglorious-Basterds.jpg'
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

  const props = useSpring({
    to: {
      opacity: 1
    },
    from: {
      opacity: 0
    },
    loop: true
  })
  return (
    <div className={styles.hero}>
      <animated.div style={props} className={styles.titleCont}>
          <h1>{data?.data[state].Title}</h1>
          <p>{data?.data[state].Directors}</p>
      </animated.div>
      <div className={styles.gradient}></div>
      <div className={styles.imageBack}>
        <img src={movies[state]} alt=""/>
      </div>
      <div className={styles.buttons}>
        <button onClick={moveBack} className={`${styles.button} ${styles.bLeft}`}>L</button>
        <button onClick={moveForward} className={`${styles.button} ${styles.bRight}`}>R</button>
      </div>
    </div>
  )
}

export default MoviesHero
