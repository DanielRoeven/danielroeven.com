import React from 'react'
import styled from 'styled-components'
import PageLayout from '../components/logic/PageLayout'
import PageWrapper from '../components/style/PageWrapper'
import H2 from '../components/style/H2'
import LinkSentence from '../components/logic/LinkSentence'

const CTAWrapper = styled.div`
  margin: 2rem 0 7rem 0;
`

export default () => (
  <PageLayout>
    <PageWrapper>
      <H2>Get in touch</H2>
      <CTAWrapper>
        <LinkSentence type="external"
                      text="Send me an"
                      link="email"
                      to="mailto:daniel@roeven.com"/>
        <LinkSentence type="external"
                      text="Reach out on"
                      link="twitter"
                      to="https://twitter.com/danielroeven"/>
        <LinkSentence type="external"
                      text="Find me on"
                      link="linked"
                      to="https://www.linkedin.com/in/daniel-roeven/"/>
        <LinkSentence type="external"
                      text="See what I'm building on"
                      link="github"
                      to="https://github.com/DanielRoeven/"/>
        <LinkSentence type="external"
                      text="Check me out on"
                      link="instagram"
                      to="https://www.instagram.com/danielroeven/"/>
      </CTAWrapper>
    </PageWrapper>
  </PageLayout>
)
