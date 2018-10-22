import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => {
  const meta = {
    title: "404",
    description: "404"
  };
  return (
    <Layout {...{ meta }} rootClass="404">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout >
  )
}


export default NotFoundPage
