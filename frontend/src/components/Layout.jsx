import React from 'react'
import { Header } from '../components'

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
