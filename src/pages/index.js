import React from 'react'
import styled from 'styled-components'

import PortfolioCardLarge from '../components/PortfolioCardLarge'

const H2 = styled.h2`
	margin: 8.75rem 0 0;
	line-height: 6rem;
	font-weight: normal;
	font-size: 3.4375rem;
	color: hsla(209, 61%, 26%, 1);

	emph {
		font-weight: bold;
		color: hsla(209, 65%, 52%, 1);
	}
`

export default () => (
  <div>
    <H2>Hi there! I’m Daniel, an <emph>interaction designer</emph> passionate about making technology beautiful and empowering.</H2>
    <PortfolioCardLarge/>
  </div>
)
