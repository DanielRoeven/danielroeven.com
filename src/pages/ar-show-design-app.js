import React from 'react'
import styled from 'styled-components'

import PageWrapper from '../components/style/PageWrapper'

import H2 from '../components/style/H2'
import ARiPad from '../img/ar-show-design-app/ipad.png'
import ARResearch from '../img/ar-show-design-app/research.png'
import ARCardboard from '../img/ar-show-design-app/cardboard-ipad.jpg'
import ARSketch from '../img/ar-show-design-app/sketch.jpg'
import H3 from '../components/style/H3'
import H4 from '../components/style/H4'
import PMedium from '../components/style/PMedium'
import UlMedium from '../components/style/UlMedium'
import Quote from '../components/style/Quote'
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
        <H2>AR Show Design App</H2>
        <H3 article><em>01</em>About</H3>
        <PMedium>
          In this case study, I describe the design process of my final project for a course on UI design at the masters programme Interaction Design at Chalmers University of Technology. In this individual project, we were tasked to design the graphical interface for a complex authoring tool, in a limited timeframe (three weeks from brief to deliverable).
        </PMedium>
      </WholeColumn>
      <ProjectImage src={ARiPad}/>
      <WholeColumn>
        <H3 article><em>02</em>Process Overview</H3>
        <PMedium>
          I set up a suitable design process, conducted user and competitive product research, identified user goals, developed the product model, and sketched and prototyped the interface from low to high fidelity.
        </PMedium>
        <H3 article><em>03</em>Learning Outcomes</H3>
        <UlMedium>
          <li>
            Translating user goals into a GUI, such that the interface empowers the user to achieve their goals.
          </li>
          <li>
            Setting up a correct design process. Good planning ensures that no part of the process gets underserved.
          </li>
          <li>
            A correct design process tells you know when, where, and how much time you have to be creative. This is important for creative professionals, as you need to deliver on the deadline.
          </li>
          <li>
            How to leverage existing UI design patterns, conventions and paradigms.
          </li>
          <li>
            How to design a complex UI under time pressure.
          </li>
        </UlMedium>
        <H3 article><em>04</em>Project Brief</H3>
        <PMedium>
          The brief was to design a tool to create augmented reality shows for concerts. Such a tool would be used by show/lighting designers and technicians. The tool would be used for design (before the show) and performance (during the show). The AR show would then be viewed by concert-goers on their smartphones.
        </PMedium>
        <H3 article><em>05</em>Timeframe</H3>
        <PMedium>
          The timeframe was three weeks from brief to deliverable. With a 50% course workload, that meant I had a total of 60 hours available. I set out a precise schedule, including activities, design phases, and WIP deliverables. Taking the time to plan and set out a detailed design process ensured that no part gets snowed under, and is important in the creative profession, as it tells me exactly when, where, and how much time I have to be creative, and when I need to deliver to meet the deadline.
        </PMedium>
        <H3 article><em>06</em>Research</H3>
        <PMedium>
          Due to the limited timeframe, extensive user research was not possible. As a compromise between depth and breadth, I conducted one lengthy interview with a VJ (video-jockeys create visual shows for the audience), read articles on show, stage, and lighting design, and rewatched a documentary on stage design (Abstract episode 3).
        </PMedium>
        <PMedium>
          This gave me a basis from which to form user goals such as “supporting or counterpointing what the artist is doing”, “creating an experience for the audience”, “translating from vision to implementation”, and “performing a flawless show”. I also created storyboard scenario’s for the persona’s. This gave the design process an initial direction, and also allowed me to validate the final design to the usage scenario’s. After setting up these user goals, I conducted a competitive product analysis. This included comparing existing products for AR design, lighting design, timeline-based audio tools, and VJ software.
        </PMedium>
      </WholeColumn>
      <ProjectImage src={ARResearch}/>
      <WholeColumn>
        <H3 article><em>07</em>Product Model</H3>
        <PMedium>
          With the above, I could form the product model, form factor, and posture. Controls needed to be as direct as possible, and should support several simultaneous interactions. Furthermore, the tool needs to be very mobile (from design studio, to meetings, to venue). A camera and gyroscope could provide instant AR previews. These requirements led me to the tablet (iPad Pro, 12.9”) as a platform.
        </PMedium>
        <H3 article><em>08</em>Sketching</H3>
        <PMedium>
          At this point I started creating lots of sketches and testing lots of ideas, because like Linus Pauling said:
        </PMedium>
        <Quote>
          “The best way to have a good idea is to have a lot of ideas.”
        </Quote>
        <PMedium>
          I created a 1:1 scale cardboard model of the iPad, which allowed me to sketch on A4 paper which I could then put in the iPad and test immediately. It also allowed me to run quick and dirty paper prototype tests, and quickly adjust the layout and interactions.
        </PMedium>
      </WholeColumn>
      <ProjectImage src={ARCardboard}/>
      <WholeColumn>
        <H3 article><em>09</em>Wireframe to Hi-Fi Prototype</H3>
        <PMedium>
          After lots of sketches on paper, I started wireframing in Sketch.app. During wireframing, more user tests were done. These continuous feedback loops were included in every level of fidelity, and allowed for course adjustments along the way. After wireframing and basic validation, I started creating prototype that focused on look-and-feel and visual design. The cardboard iPad was used to preview the design at actual size, and I made a Framer prototype for an old, smaller iPad to test navigation and gestures.
        </PMedium>
        <H3 article><em>10</em>Validation</H3>
        <PMedium>
          Because the high-fidelity prototype was built entirely with Sketch symbols, I could easily construct the interface for every step in the inital scenario’s. This allowed me validate the requirements and scenario’s, and get an overview of the whole interaction flow. I also made an annotated overview of the interface. The hi-fidelity scenario’s can be seen <a href="#">here</a> and the annotated interface overview is available <a href="#">here</a>.
        </PMedium>
      </WholeColumn>
      <ProjectImage src={ARSketch}/>
    </ProjectWrapper>
  </PageWrapper>
)
