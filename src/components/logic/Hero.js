import React from 'react'
import styled from 'styled-components'

import H2 from '../style/H2'
import Em from '../style/Em'

const HeroWrapper = styled.div`
	margin: 6rem 0 13rem;
`

export default (props) => (
  <HeroWrapper>
  	<H2>{props.first} <Em>{props.em}</Em> {props.last}</H2>
  </HeroWrapper>
)
