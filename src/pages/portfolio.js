import React from 'react'
import styled from 'styled-components'
import PageLayout from '../components/logic/PageLayout'
import PageWrapper from '../components/style/PageWrapper'
import H2 from '../components/style/H2'
import ContentCardSmall from '../components/logic/ContentCardSmall.js'
import RcswImage from '../img/rcsw/mobile.jpg'
import TangibleImage from '../img/tangible-office-planner/video-still.jpg'
import SmarthomeImage from '../img/smarthome/smarthome-1-3x.png'
import ARShowDesignImage from '../img/ar-show-design-app/ipad.png'

const ContentCardsWrapper = styled.div`
display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 0 2rem 0;

  &:last-child {
    margin: 0 0 9rem 0;
  };
`

export default () => (
  <PageLayout>
    <PageWrapper>
      <H2>App / Web</H2>
      <ContentCardsWrapper>
        <ContentCardSmall title="Portal for RCSW"
                          description="Creating a web portal that's clear and beautiful for Radboud Center for Social Sciences."
                          image={RcswImage}
                          primaryColor="light-blue"
                          estimatedHeight="15rem"
                          href="portfolio/portal-for-rcsw"/>
        <ContentCardSmall title="Smart Home Redesign"
                          description="Reimagining the smart home: stimulating the user to reflect through beautiful interactions."
                          image={SmarthomeImage}
                          primaryColor="blue"
                          estimatedHeight="15rem"
                          href="portfolio/smart-home-redesign"/>
        <ContentCardSmall title="AR Show Design GUI"
                          description="Designing the user interface for a complex authoring tool in a limited timeframe."
                          image={ARShowDesignImage}
                          primaryColor="orange"
                          estimatedHeight="15rem"
                          href="portfolio/ar-show-design-app"/>
      </ContentCardsWrapper>
      <H2>Other</H2>
      <ContentCardsWrapper>
        <ContentCardSmall title="Tangible Office Planner"
                          description="An exploration in tangible interaction: a tabletop interface to share and view office calendars, while giving the users an embodied sense of privacy."
                          image={TangibleImage}
                          primaryColor="yellow"
                          estimatedHeight="21rem"
                          href="portfolio/tangible-office-planner"/>
      </ContentCardsWrapper>
    </PageWrapper>
  </PageLayout>
)
