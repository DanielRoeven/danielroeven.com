import React from 'react'
import styled from 'styled-components'

import PageWrapper from '../components/style/PageWrapper'

import H2 from '../components/style/H2'

const CTAWrapper = styled.div`
  margin: 2rem 0 7rem 0;
`
import CTAItem from '../components/logic/CTAItem'

export default () => (
  <PageWrapper>
    <H2>Get in touch</H2>
    <CTAWrapper>
      <CTAItem  contactlink
                text="Send me an"
                link="email"
                type="email"/>
      <CTAItem  contactlink
                text="Reach out on"
                link="twitter"
                type="twitter"/>
      <CTAItem  contactlink
                text="Find me on"
                link="linked"
                type="linkedin"/>
      <CTAItem  contactlink
                text="See what I'm building on"
                link="github"
                type="github"/>
      <CTAItem  contactlink
                text="Check me out on"
                link="instagram"
                type="instagram"/>
    </CTAWrapper>
  </PageWrapper>
)
