import React from 'react'
import styled from 'styled-components'
import prims from '../Primitives'

import PageWrapper from '../components/style/PageWrapper'
import H2 from '../components/style/H2'

const Bio = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`
const HalfColumn = styled.div`
  width: 39.5rem;
`
import PMedium from '../components/style/PMedium'
const Avatar = styled.img`
  align-self: center;
  height: 16rem;
  width: 16rem;
  
  border: 1rem solid ${prims.colors.blue.white.opaque};
  border-radius: 8rem;
`
import Headshot from '../components/img/headshot.jpg'

const ResumeBackground = styled.div`
  align-self: center;
  display: flex;
  height: 81rem;
  justify-content: center;
  margin: -7rem 0 0 0;
  padding: 7rem 0 0 0;
  width: 100vw;
  z-index: -1;

  background: radial-gradient(circle at top, ${prims.colors.blue.lightest}, ${prims.colors.blue.lighter});
`
const Resume = styled.div`
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-flow: row wrap;
  width: 80rem;
`
import H3 from '../components/style/H3'
import pdfIcon from '../components/img/icons/pdf.svg'
const EducationCard = styled.div`
  margin: 0 1rem 0 -1rem;
  padding: 1rem;
  width: 40.5rem;

  background: ${prims.colors.blue.white.opaque};
  
  border-radius: 2px;
  box-shadow: ${prims.glow.m} ${prims.colors.blue.dark.transparent_l}, ${prims.shadows.l} ${prims.colors.blue.dark.transparent_l};
`
import H4 from '../components/style/H4'
import HistoryItem from '../components/logic/HistoryItem'
const WorkCard = styled.div`
  margin: 0 -1rem 1rem 0;
  padding: 1rem;
  width: 40.5rem;

  background: ${prims.colors.blue.white.opaque};

  border-radius: 2px;
  box-shadow: ${prims.glow.m} ${prims.colors.blue.dark.transparent_l}, ${prims.shadows.l} ${prims.colors.blue.dark.transparent_l};
`
const SkillsCard = styled.div`
  margin: 0 -1rem 0 -1rem;
  padding: 1rem;
  width: 82rem;

  background: ${prims.colors.blue.white.opaque};
  
  border-radius: 2px;
  box-shadow: ${prims.glow.m} ${prims.colors.blue.dark.transparent_l}, ${prims.shadows.l} ${prims.colors.blue.dark.transparent_l};
`
const SkillsSuperlist = styled.ol`
  display: flex;
  justify-content: space-between;
  
  list-style-type: none;
`
import SkillsSuperlistItem from '../components/logic/SkillsSuperlistItem'

const TriviaBackground = styled.div`
  align-self: center;
  display: flex;
  height: 52rem;
  justify-content: center;
  margin: -7rem 0 0 0;
  width: 100vw;
  z-index: -2;

  background: radial-gradient(circle at bottom, ${prims.colors.blue.dark.opaque}, ${prims.colors.blue.black.opaque});
`
const TriviaTitle = styled.h5`
  height: 6rem;
  padding: 1.6rem 1rem 0;
  width: 41.5rem;

  color: ${prims.colors.blue.white.opaque};
  

  font-family: 'Rucksack Bold';
  font-size: ${prims.fontsize.l};
  line-height: 3rem;
`
// Background for trivia title
// background-image: linear-gradient(transparent 61%, ${prims.colors.blue.gray} 61%, ${prims.colors.blue.gray} 74%, transparent 74%);

const Trivia = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 25rem;
  width: 80rem;
`
const TriviaItem = styled.div`
  display: flex;
  padding-top: 1rem;
  width: 53.5rem;
`
import CaretIcon from '../components/img/icons/caret.svg'
const TriviaButton = styled.button`
  height: 4rem;
  width: 5rem;
  margin: 3rem ${props => props.previous ? '1rem;' : null} 0 ${props => props.next ? '1rem;' : null};

  background-color: transparent;
  background-size: 4rem 4rem;

  border: none;
  transform: ${props => props.next ? null : 'scaleX(-1);'};
`
// TriviaButton background
// background-image: url(${CaretIcon});
const TriviaText = styled.p`
  padding: 0.85rem 0 .65rem 0;
  width: 39.5rem;

  color: ${prims.colors.blue.white.opaque};
  
  font-size: ${prims.fontsize.m};
  line-height: 3rem;
`

import Footer from '../components/style/Footer'

export default () => (
  <PageWrapper>
  	<H2>About</H2>
    <Bio>
      <HalfColumn>
        <PMedium>I am currently pursuing Master's  degree in Interaction Design at Chalmers University of Technology in Gothenburg, Sweden.</PMedium>
        <PMedium>Before this, I received a Bachelor's degree in Computing Science with a minor in Industrial Design in The Netherlands. This is also where I have worked as interaction designer, front-end developer, and teaching assistant.</PMedium>
      </HalfColumn>
      <HalfColumn>
        <PMedium>I'm passionate about <em>shaping technology as a beautiful and empowering</em> tool for people to realise their own ambitions.</PMedium>
        <PMedium>I enjoy all parts of the design process, and in particular I like creating interactive prototypes to validate ideas or guide product development. Above all, I strive to keep learning and giving back through sharing and teaching.</PMedium>
      </HalfColumn>
    </Bio>
    <Avatar src={Headshot}/>
    <ResumeBackground>
      <Resume>
        <H3>Résumé <a>as PDF<img src={pdfIcon}/></a></H3>
        <EducationCard>
          <H4>Education</H4>
          <HistoryItem
            title="Interaction Design, MSc"
            time="2017-Present"
            description1="Chalmers University of Technology"
            description2="Gothenburg, Sweden"/>
          <HistoryItem
            title="Computing Science, BSc"
            time="2013-2017"
            description1="Radboud University"
            description2="Nijmegen, the Netherlands"/>
          <HistoryItem
            title="Industrial Design, BSc Minor"
            time="2016"
            description1="Eindhoven University of Technology"
            description2="Eindhoven, the Netherlands"/>
        </EducationCard>
        <WorkCard>
          <H4>Work Experience</H4>
          <HistoryItem
            title="UX Design Trainee at Fonk Amsterdam"
            time="Jun 2018 - Aug 2018"
            description1="Full-time summer traineeship at a digital product agency in Amsterdam. I conducted user research, and designed and prototyped interfaces. I helped a start-up define their MVP, independently completed and presented a project for an existing client, and designed microinteractions for an upcoming AR app. I also gave a Framer workshop to the UX design team."/>
          <HistoryItem
            title="Interaction Designer at Radboud Centre for Social Sciences"
            time="Feb 2017 — Jun 2017"
            description1="In this four month project I designed and developed a web portal. I performed user research, interaction and visual design, ran usability tests, and developed the front-end in React, together with two other developers."/>
          <HistoryItem
            title="Freelance Interaction Designer and Front-End Developer"
            time="Oct 2016—Jan 2017"
            description1="Designed and developed a web app in Javascript on freelance basis."/>
          <HistoryItem
            title="Teaching Assistant in Usability Courses"
            time="2015—2017"
            description1="I taught usability in a bachelors course at the Radboud University. Due to impressive performance in the first year, I was given responsibility for all lectures, workshops, assignments, and grading and feedback in subsequent years. Received a certificate in teaching methods after a training programme in teaching."/>
          </WorkCard>
          <SkillsCard>
            <H4>Skills</H4>
            <SkillsSuperlist>
              <SkillsSuperlistItem category="Design" skills={["Interaction", "User Interface (UI)", "User Experience (UX)", "Product", "AR / VR"]}/>
              <SkillsSuperlistItem category="Development" skills={["HTML", "CSS", "Javascript", "React", "Swift", "iOS"]}/>
              <SkillsSuperlistItem category="Tools" skills={["Sketch", "Framer", "Photoshop", "InDesign", "After Effects", "Cinema4D", "Unreal Engine", "XCode"]}/>
              <SkillsSuperlistItem category="Methods" skills={["User-Centered Design", "Observations, Interviews, and Questionnaires", "Data Analysis", "Ideation Workshops", "Sketching", "Prototyping", "Usability and UX Evaluation"]}/>
            </SkillsSuperlist>
          </SkillsCard>
      </Resume>
    </ResumeBackground>
    <TriviaBackground>
      <Trivia>
        <TriviaTitle>Fun Fact</TriviaTitle>
        <TriviaItem>
          <TriviaButton previous/>
          <TriviaText>My favorite typefaces are Kepler by Robert Slimbach of Adobe and Rucksack by Jeffrey Schreiber of RegularBoldItalic.</TriviaText>
          <TriviaButton next/>
        </TriviaItem>
      </Trivia>
    </TriviaBackground>
  </PageWrapper>
)
