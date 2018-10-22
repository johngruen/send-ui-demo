import React from 'react'

import Layout from '../components/Layout'
import ContentHeader from "../components/ContentHeader";
import SenderArea from '../components/SenderArea';

const IndexPage = () => {
  return (
    <Layout rootClass="index">
      <ContentHeader
        title="Private, Encrypted File Sharing"
        subtitle="From the makers of Firefox"/>
        <SenderArea />
    </Layout>
  )
}

export default IndexPage