import React from 'react'
import styled from 'styled-components'

import PageWrapper from '../components/PageWrapper'
import Hero from '../components/Hero'
import PortfolioCardLargeRCSW from '../components/PortfolioCardLargeRCSW'
import PortfolioCardLargeStatusTable from '../components/PortfolioCardLargeStatusTable'
import PortfolioCardLargeSmarthome from '../components/PortfolioCardLargeSmarthome'
import InternalLink from '../components/InternalLink'
import Footer from '../components/Footer'

export default () => (
  <PageWrapper>
  	<Hero/>
    <PortfolioCardLargeRCSW/>
    <PortfolioCardLargeStatusTable/>
    <PortfolioCardLargeSmarthome/>
    <div style={{marginBottom: '10rem'}}>
      <InternalLink type="portfolio">portfolio</InternalLink>
      <InternalLink type="bio">bio</InternalLink>
      <InternalLink type="contact">hi</InternalLink>
    </div>
    <Footer/>
  </PageWrapper>
)
