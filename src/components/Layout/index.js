import React from 'react'
import Helmet from 'react-helmet'
import Header from '../Header';
import Footer from '../Footer';

import './index.scss'
import favicon from './../../images/firefox-logo.png'

const Layout = ({ title, rootClass, children }) => {
  return (
  <>
      <Helmet
        title={title}
        meta={[{ name: 'description', content: "description"}]}
      >
        <link rel="shortcut icon" href={favicon}/>
        <html lang="en" />
      </Helmet>
      <div className={`layout layout--${rootClass} ${rootClass}`}>
        <Header />
        <main class="layout__main">
          {children}
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
