import React from 'react'
import Header from 'containers/Header/Header'
import Footer from 'components/UI/Footer/Footer'
import styles from  './Layout.module.scss'

const Layout = props => {
  return (
    <>
      <Header />
      <main className={ styles.main__wrapper }>
        { props.children }
      </main>
      <Footer />
    </>
  )
}

export default Layout