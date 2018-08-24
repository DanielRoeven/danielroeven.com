import React from 'react'
import styled from 'styled-components'

import PageWrapper from '../components/PageWrapper'
import H2 from '../components/H2'
import Column from '../components/Column'
import BioText from '../components/BioText'
import EducationItem from '../components/EducationItem'
import WorkItem from '../components/WorkItem'
import Footer from '../components/Footer'

import Headshot from '../components/img/headshot.jpg'

const Bio = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`

const Avatar = styled.img`
  width: 14rem;
  height: 14rem;
  border: 1rem solid hsla(210, 25%, 98%, 1);
  align-self: center;
  border-radius: 7rem;
  z-index: 1;
`

const ResumeBackground = styled.div`
  margin-top: -7rem;
  padding-top: 7rem;
  height: 82rem;
  width: 100vw;
  align-self: center;
  background: radial-gradient(circle at top, hsla(191, 83%, 91%, .5), hsla(190, 83%, 82%, .5));
  display: flex;
  justify-content: center;
`

const Resume = styled.div`
  width: 80rem;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  align-items: flex-start;
`

const H3 = styled.h3`
  padding: 2.55rem 0 1.55rem;
  line-height: 3rem;
  font-weight: bold;
  font-size: 2.5rem;
  color: hsla(209, 61%, 26%, 1);
  width: 100%;
`

const EducationCard = styled.div`
  background: rgba(250,251,252, 0.8);
  box-shadow: 0 0 8px 0 rgba(26,67,106,0.25), 0 32px 32px -32px rgba(26,67,106,0.25);
  width: 40.5rem;
  margin: 0 1rem 0 -1rem;
  padding: 1rem;
  border-radius: 2px;
`

const WorkCard = styled.div`
  background: rgba(250,251,252, 0.8);
  box-shadow: 0 0 8px 0 rgba(26,67,106,0.25), 0 32px 32px -32px rgba(26,67,106,0.25);
  width: 40.5rem;
  margin-right: -1rem;
  padding: 1rem;
  border-radius: 2px;
`

const H4 = styled.h4`
  font-size: 1.65625rem;
  font-weight: bold;
  color: hsla(209, 61%, 26%, 1);
  padding: 0.25rem 0 .65rem 0;
  line-height: 2rem;
`

export default () => (
  <PageWrapper>
  	<H2>About</H2>
    <Bio>
      <Column>
        <BioText>I am currently pursuing Master's  degree in Interaction Design at Chalmers University of Technology in Gothenburg, Sweden.</BioText>
        <BioText>Before this, I received a Bachelor's degree in Computing Science with a minor in Industrial Design in The Netherlands. This is also where I have worked as interaction designer, front-end developer, and teaching assistant.</BioText>
      </Column>
      <Column>
        <BioText>
          I'm passionate about <emph>shaping technology as a beautiful and empowering</emph> tool for people to realise their own ambitions.
        </BioText>
        <BioText>
          I enjoy all parts of the design process, and in particular I like creating interactive prototypes to validate ideas or guide product development. Above all, I strive to keep learning and giving back through sharing and teaching.
        </BioText>
      </Column>
    </Bio>
    <Avatar src={Headshot}/>
    <ResumeBackground>
      <Resume>
        <H3>Résumé</H3>
        <EducationCard>
          <H4>Education</H4>
          <EducationItem
            program="Interaction Design, MSc"
            time="2017-Present"
            uni="Chalmers University of Technology"
            place="Gothenburg, Sweden"/>
          <EducationItem
            program="Computing Science, BSc"
            time="2013-2017"
            uni="Radboud University"
            place="Nijmegen, the Netherlands"/>
          <EducationItem
            program="Industrial Design, BSc Minor"
            time="2016"
            uni="Eindhoven University of Technology"
            place="Eindhoven, the Netherlands"/>
        </EducationCard>
        <WorkCard>
          <H4>Work Experience</H4>
          <WorkItem
            position="UX Design Trainee at Fonk Amsterdam"
            time="Jun 2018 - Aug 2018"
            description="Full-time summer traineeship at a digital product agency in Amsterdam. I conducted user research, and designed and prototyped interfaces. I helped a start-up define their MVP, independently completed and presented a project for an existing client, and designed microinteractions for an upcoming AR app. I also gave a Framer workshop to the UX design team."/>
          <WorkItem
            position="Interaction Designer at Radboud Centre for Social Sciences"
            time="Feb 2017 — Jun 2017"
            description="In this four month project I designed and developed a web portal. I performed user research, interaction and visual design, ran usability tests, and developed the front-end in React, together with two other developers."/>
          <WorkItem
            position="Freelance Interaction Designer and Front-End Developer"
            time="Oct 2016—Jan 2017"
            description="Designed and developed a web app in Javascript on freelance basis."/>
          <WorkItem
            position="Teaching Assistant in Usability Courses"
            time="2015—2017"
            description="I taught usability in a bachelors course at the Radboud University. Due to impressive performance in the first year, I was given responsibility for all lectures, workshops, assignments, and grading and feedback in subsequent years. Received a certificate in teaching methods after a training programme in teaching."/>
          </WorkCard>
      </Resume>
    </ResumeBackground>
  </PageWrapper>
)
