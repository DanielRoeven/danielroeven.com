import React from 'react'
import styled from 'styled-components'
import PageLayout from '../components/logic/PageLayout'
import PageWrapper from '../components/style/PageWrapper'
import H2 from '../components/style/H2'
import PortfolioCardLarge from '../components/logic/PortfolioCardLarge.js'
import LinkSentence from '../components/logic/LinkSentence'
import RcswImage from '../markdown/img/rcsw/mobile.jpg'
import MuffinOrChihuahuaImage from '../markdown/img/muffin-or-chihuahua/muffin-or-chihuahua-1.jpg'
import TangibleImage from '../markdown/img/tangible-office-planner/video-still.jpg'
import CyberSketchImage from '../markdown/img/cybersketch/headsets.jpg'

const HeroWrapper = styled.div`
  margin: 6rem 0 13rem;

  @media (max-width: 400px) {
    margin: 0rem 0 10rem;
  }
`
const CTAWrapper = styled.div`
  margin-bottom: 13rem;
`

export default () => (
  <PageLayout>
      <PageWrapper>
        <HeroWrapper>
          <H2 hero>Hi there! I’m Daniel, an <em>interaction designer</em> passionate about making technology beautiful and empowering.</H2>
        </HeroWrapper>
        <PortfolioCardLarge title="Portal for RCSW"
                            description="Creating a web portal that's clear and beautiful for Radboud Center for Social Sciences."
                            image={RcswImage}
                            skills={['Interaction Design', 'Visual Design', 'Front-End Development']}
                            primaryColor="light-blue"
                            secondaryColor="dark-blue"
                            href="portfolio/portal-for-rcsw"/>
        <PortfolioCardLarge title="Muffin or Chihuahua?"
                            description="Muffin or Chihuahua? is an interactive museum experience, introducing machine learning to 12 to 16 year-olds."
                            image={MuffinOrChihuahuaImage}
                            skills={['Project Management', 'Prototyping']}
                            primaryColor="blue"
                            secondaryColor="light-blue"
                            href="portfolio/muffin-or-chihuahua"/>
        <PortfolioCardLarge title="Tangible Office Planner"
                            description="An exploration in tangible interaction: a tabletop interface to share and view office calendars, while giving the users an embodied sense of privacy."
                            image={TangibleImage}
                            skills={['Interaction Design', 'Prototyping']}
                            primaryColor="orange"
                            secondaryColor="yellow"
                            href="portfolio/tangible-office-planner"/>
        <PortfolioCardLarge title="CyberSketch"
                            description="Creating a 3D sketching tool in VR to test the interaction design possibilities of multitouch tablets as input for VR."
                            image={CyberSketchImage}
                            skills={['VR Design', 'Research and Development', 'UX Evaluation']}
                            primaryColor="blue"
                            secondaryColor="dark-blue"
                            href="portfolio/cybersketch"/>
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
  </PageLayout>
)
