import React from 'react'
import styled from 'styled-components'
import PageLayout from '../components/logic/PageLayout'
import PageWrapper from '../components/style/PageWrapper'
import H2 from '../components/style/H2'
import ContentCardSmall from '../components/logic/ContentCardSmall.js'
import RcswImage from '../markdown/img/rcsw/mobile.jpg'
import TangibleImage from '../markdown/img/tangible-office-planner/video-still.jpg'
import MuffinOrChihuahuaImage from '../markdown/img/muffin-or-chihuahua/muffin-or-chihuahua-1.jpg'
import SmarthomeImage from '../markdown/img/smarthome/smarthome-1-3x.png'
import ARShowDesignImage from '../markdown/img/ar-show-design-app/ipad.png'
import CyberSketchImage from '../markdown/img/cybersketch/headsets.jpg'

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

      </ContentCardsWrapper>
      <H2>Physical Installations</H2>
      <ContentCardsWrapper>
        <ContentCardSmall title="Muffin or Chihuahua?"
                          description="Muffin or Chihuahua? is an interactive museum experience, introducing machine learning to 12 to 16 year-olds."
                          image={MuffinOrChihuahuaImage}
                          primaryColor="blue"
                          estimatedHeight="18rem"
                          href="portfolio/muffin-or-chihuahua"/>
        <ContentCardSmall title="Tangible Office Planner"
                          description="An exploration in tangible interaction: a tabletop interface to share and view office calendars, while giving the users an embodied sense of privacy."
                          image={TangibleImage}
                          primaryColor="orange"
                          estimatedHeight="21rem"
                          href="portfolio/tangible-office-planner"/>
      </ContentCardsWrapper>
      <H2>AR / VR</H2>
      <ContentCardsWrapper>
        <ContentCardSmall title="CyberSketch"
                          description="Creating a 3D sketching tool in VR to test the interaction design possibilities of multitouch tablets as input for VR."
                          image={CyberSketchImage}
                          primaryColor="dark-blue"
                          estimatedHeight="18rem"
                          href="portfolio/cybersketch"/>
      </ContentCardsWrapper>
      <H2>User Research / Design Process</H2>
      <ContentCardsWrapper>
        <ContentCardSmall title="Show Design App"
                          description="Designing the user interface for a complex authoring tool in a limited timeframe."
                          image={ARShowDesignImage}
                          primaryColor="orange"
                          estimatedHeight="15rem"
                          href="portfolio/show-design-app"/>
      </ContentCardsWrapper>
    </PageWrapper>
  </PageLayout>
)
