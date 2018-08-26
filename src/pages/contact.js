import React from 'react'
import styled from 'styled-components'

import PageWrapper from '../components/style/PageWrapper'

import H2 from '../components/style/H2'

const CTAWrapper = styled.div`
  margin: 2rem 0 7rem 0;
`
import LinkSentence from '../components/logic/LinkSentence'

export default () => (
  <PageWrapper>
    <H2>Get in touch</H2>
    <CTAWrapper>
      <LinkSentence type="external"
                    text="Send me an"
                    link="email"
                    to="/"/>
      <LinkSentence type="external"
                    text="Reach out on"
                    link="twitter"
                    to="/"/>
      <LinkSentence type="external"
                    text="Find me on"
                    link="linked"
                    to="/"/>
      <LinkSentence type="external"
                    text="See what I'm building on"
                    link="github"
                    to="/"/>
      <LinkSentence type="external"
                    text="Check me out on"
                    link="instagram"
                    to="/"/>
    </CTAWrapper>
  </PageWrapper>
)
