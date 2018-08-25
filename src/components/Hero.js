import React from 'react'
import styled from 'styled-components'

const Hero = styled.div`
	margin: 6rem 0 13rem;

	h2 {
		padding: .7rem 0 .3rem;
		line-height: 6rem;
		font-weight: normal;
		font-size: 3.4375rem;
		color: hsla(209, 61%, 26%, 1);
	}

	emph {
		font-weight: bold;
		color: hsla(209, 65%, 52%, 1);
	}
`

export default () => (
  <Hero>
  	<h2>Hi there! I’m Daniel, an <emph>interaction designer</emph> passionate about making technology beautiful and empowering.</h2>
  </Hero>
)
