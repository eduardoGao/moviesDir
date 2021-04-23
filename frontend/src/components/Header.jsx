import React from 'react'
import styles from './styles/Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Stream Explorer</h1>
      <div className={styles.profile}>P</div>
    </header>
  )
}

export default Header
