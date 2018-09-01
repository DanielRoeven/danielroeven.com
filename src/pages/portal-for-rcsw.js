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
  margin: 0 13.5rem 9rem;
`
const ProjectImage = styled.img`
  height: 42rem;
  margin: 3rem -13.5rem;
  width: 80rem;
  object-fit: cover;
`
const OrgImage = styled.img`
  margin: 2.6rem 0 0;
  width: 22.5rem;
`
const WholeColumn = styled.div`
  width: 100%;
`
const HalfColumn = styled.div`
  width: 26rem;
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
        <H3 article><em>02</em> Organisation</H3>
        <OrgImage src={RCSWLogo}/>
      </HalfColumn>
      <HalfColumn>
        <H3 article><em>03</em>Skills</H3>
        <OlMedium>
          <li>Interaction Design</li>
          <li>User Interface (UI)</li>
          <li>User Experience (UX)</li>
          <li>Visual Design</li>
          <li>Front-end Development (React)</li>
        </OlMedium>
      </HalfColumn>
      <WholeColumn>
        <H3 article><em>04</em> Role</H3>
        <PMedium>
          I designed the interface and user experience and developed the front-end in React. I worked as the interaction designer alongside two developers in a team of three.
        </PMedium>
      </WholeColumn>
      <ProjectImage src={RcswImage1}/>
      <WholeColumn>
        <H3 article><em>05</em>Process</H3>
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
      <iframe src="https://player.vimeo.com/video/256219151?color=3587D4&title=0&byline=0&portrait=0" frameBorder="0"></iframe>
    </ProjectWrapper>
  </PageWrapper>
)
