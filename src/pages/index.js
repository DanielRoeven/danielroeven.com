import React from 'react'
import styled from 'styled-components'

import PageWrapper from '../components/style/PageWrapper'

const HeroWrapper = styled.div`
  margin: 6rem 0 13rem;
`
import H2 from '../components/style/H2'

import PortfolioCardLarge from '../components/logic/PortfolioCardLarge.js'
import RcswImage from './img/rcsw-mobile-3x.jpg'
import TangibleImage from './img/src-screengrab-3x.jpg'
import SmarthomeImage from './img/smarthome-1-3x.png'

const CTAWrapper = styled.div`
  margin-bottom: 13rem;
`
import LinkSentence from '../components/logic/LinkSentence'

export default () => (
  <PageWrapper>
    <HeroWrapper>
      <H2 hero>Hi there! I’m Daniel, an <em>interaction designer</em> passionate about making technology beautiful and empowering.</H2>
    </HeroWrapper>
    <PortfolioCardLarge title="Portal for RCSW"
                        description="Creating a web portal that's clear and beautiful for Radboud Center for Social Sciences."
                        image={RcswImage}
                        skills={['Interaction Design', 'Visual Design', 'Front-End Development']}
                        primaryColor="light-blue"
                        secondaryColor="dark-blue"/>
    <PortfolioCardLarge title="Tangible Office Planner"
                        description="An exploration in tangible interaction: a tabletop interface to share and view office calendars, while giving the users embodied sense of privacy."
                        image={TangibleImage}
                        skills={['Interaction Design', 'Prototyping']}
                        primaryColor="yellow"
                        secondaryColor="brown"/>
    <PortfolioCardLarge title="Smart Home Redesign"
                            description="Reimagining the smart home: stimulating the user to reflect through beautiful interactions."
                            image={SmarthomeImage}
                            skills={['UX Design', 'Interaction Design', 'Prototyping']}
                            primaryColor="blue"
                            secondaryColor="blue"/>
    <CTAWrapper>
      <LinkSentence type="internal"
                    text="See my full"
                    link="portfolio"
                    to="portfolio"/>
      <LinkSentence type="internal"
                    text="Check my"
                    link="bio"
                    to="about"/>
      <LinkSentence type="internal"
                    text="Or say"
                    link="hi!"
                    to="contact"/>
    </CTAWrapper>
  </PageWrapper>
)
