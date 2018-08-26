import React from 'react'
import styled from 'styled-components'

import PageWrapper from '../components/style/PageWrapper'
import H2 from '../components/style/H2'
import ContentCardSmall from '../components/logic/ContentCardSmall.js'
const ContentCardsWrapper = styled.div`
display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 0 2rem 0;

  &:last-child {
    margin: 0 0 9rem 0;
  };
`
import RcswImage from './img/rcsw-mobile-3x.jpg'
import TangibleImage from './img/src-screengrab-3x.jpg'
import SmarthomeImage from './img/smarthome-1-3x.png'

export default () => (
  <PageWrapper>
    <H2>App / Web</H2>
    <ContentCardsWrapper>
      <ContentCardSmall title="Portal for RCSW"
                        description="Creating a web portal that's clear and beautiful for Radboud Center for Social Sciences."
                        image={RcswImage}
                        skills={['Interaction Design', 'Visual Design', 'Front-End Development']}
                        primaryColor="light-blue"
                        secondaryColor="dark-blue"/>
      <ContentCardSmall title="Tangible Office Planner"
                        description="An exploration in tangible interaction: a tabletop interface to share and view office calendars, while giving the users embodied sense of privacy."
                        image={TangibleImage}
                        skills={['Interaction Design', 'Prototyping']}
                        primaryColor="yellow"
                        secondaryColor="brown"/>
      <ContentCardSmall title="Smart Home Redesign"
                        description="Reimagining the smart home: stimulating the user to reflect through beautiful interactions."
                        image={SmarthomeImage}
                        skills={['UX Design', 'Interaction Design', 'Prototyping']}
                        primaryColor="blue"
                        secondaryColor="blue"/>
    </ContentCardsWrapper>
    <H2>Other</H2>
    <ContentCardsWrapper>
      <ContentCardSmall title="Portal for RCSW"
                        description="Creating a web portal that's clear and beautiful for Radboud Center for Social Sciences."
                        image={RcswImage}
                        skills={['Interaction Design', 'Visual Design', 'Front-End Development']}
                        primaryColor="light-blue"
                        secondaryColor="dark-blue"/>
      <ContentCardSmall title="Tangible Office Planner"
                        description="An exploration in tangible interaction: a tabletop interface to share and view office calendars, while giving the users embodied sense of privacy."
                        image={TangibleImage}
                        skills={['Interaction Design', 'Prototyping']}
                        primaryColor="yellow"
                        secondaryColor="brown"/>
      <ContentCardSmall title="Smart Home Redesign"
                        description="Reimagining the smart home: stimulating the user to reflect through beautiful interactions."
                        image={SmarthomeImage}
                        skills={['UX Design', 'Interaction Design', 'Prototyping']}
                        primaryColor="blue"
                        secondaryColor="blue"/>
    </ContentCardsWrapper>
  </PageWrapper>
)