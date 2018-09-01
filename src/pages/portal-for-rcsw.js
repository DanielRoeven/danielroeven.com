import React from 'react'
import styled from 'styled-components'

import PageWrapper from '../components/style/PageWrapper'

import H2 from '../components/style/H2'
import RcswImage1 from './img/rcsw-mobile-3x.jpg'
import RcswImage2 from './img/rcsw-browser-3x.png'
import H3 from '../components/style/H3'
import H4 from '../components/style/H4'
import PMedium from '../components/style/PMedium'
import OlMedium from '../components/style/OlMedium'
import RCSWLogo from './img/rcsw-logo-3x.png'
const ProjectWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: flex-start;
  align-items: flex-start;
  width: 53rem;
  margin: 0 13.5rem 6rem;
`
const ProjectImage = styled.img`
  height: 45rem;
  margin: 3rem -13.5rem;
  width: 80rem;
  object-fit: cover;
`
const OrgImage = styled.img`
  margin: 2rem 0 0.8rem 0;
  width: 26rem;
  height: 6rem;
  object-fit: contain;
  object-position: left;
`
const WholeColumn = styled.div`
  width: 100%;
`
const HalfColumn = styled.div`
  width: 26rem;
`
const LogoLink = styled.a`
  filter: grayscale(1);
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: grayscale(0);
  }
`
const ProjectVideo = styled.iframe`
  height: 48rem;
  width: 80rem;
  margin: 3rem -13.5rem;
  overflow: hidden;
`

export default () => (
  <PageWrapper>
    <ProjectWrapper>
      <WholeColumn>
        <H2>Portal for RCSW</H2>
        <H3 article><em>01</em>About</H3>
        <PMedium>
          I designed and developed an online portal for the Radboud Centre for Social Sciences. The portal unifies information from varying services and provides clear overview and access.
        </PMedium>
      </WholeColumn>
      <ProjectImage src={RcswImage2}/>
      <HalfColumn>
        <H3 article><em>02</em>Skills</H3>
        <OlMedium>
          <li>Interaction Design</li>
          <li>User Interface (UI)</li>
          <li>User Experience (UX)</li>
          <li>Visual Design</li>
          <li>Front-end Development (React)</li>
        </OlMedium>
      </HalfColumn>
      <HalfColumn>
        <H3 article><em>03</em> Organisation</H3>
        <LogoLink href="https://rcsw.nl" target="_blank">
          <OrgImage src={RCSWLogo}/>
        </LogoLink>
        <H3 article><em>04</em> Timeframe</H3>
        <PMedium>Four months parttime.</PMedium>
      </HalfColumn>
      <WholeColumn>
        <H3 article><em>05</em> Role</H3>
        <PMedium>
          I designed the interface and user experience and developed the front-end in React. I worked as the interaction designer alongside two developers in a team of three.
        </PMedium>
      </WholeColumn>
      <ProjectImage src={RcswImage1}/>
      <WholeColumn>
        <H3 article><em>06</em>Process</H3>
        <PMedium>
          Existing user research indicated that users felt overwhelmed by the amount of services and information in the previous system. Yet simultaneously, users wanted to know what’s happening in other parts of the organisation at a glance. This was further validated by us through interviews and questionnaires.
        </PMedium>
        <PMedium>
          We addressed this by creating a portal which unifies the information flows of varying sources and hierarchies. In this portal users can select which information to view by relevancy: personal, team-wide, or organisation wide. Explicitly marking the information flows by color and group, and toggling them on or off gives users the best of both worlds: quick access to specific information, and an overview of the whole when desired. Finally, the portal also serves as a springboard to specific services, through single sign-on.
        </PMedium>
        <PMedium>
          The interface was validated through “thinking out loud” evaluations. This showed that users of the new interface easily understood and manipulated the information flows.
        </PMedium>
      </WholeColumn>
      <ProjectVideo src="https://player.vimeo.com/video/256219151?autoplay=1&loop=1&color=ABEAF7&title=0&byline=0&portrait=0" frameBorder="0"/>
    </ProjectWrapper>
  </PageWrapper>
)
