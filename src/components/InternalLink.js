import React from 'react'
import styled from 'styled-components'

import portfolioIcon from './img/icons/portfolio.svg'

const InternalLink = styled.p`
	font-size: 3.4375rem;
	color: hsla(209, 61%, 26%, 1);
	line-height: 6rem;
	margin: 2rem 0 0;

	a {
		font-weight: bold;
	}

	img {
		width: 4rem;
		height: 4rem;
		position: relative;
		top: .6rem;
	}
`

export default () => (
  <InternalLink>
  	See my full <a>portfolio<img src={portfolioIcon}/></a>
  </InternalLink>
)
