import React from 'react'
import styled from 'styled-components'
import prims from '../../Primitives'

import PortfolioIcon from '../img/icons/portfolio.svg'
import BioIcon from '../img/icons/bio.svg'
import ContactIcon from '../img/icons/contact.svg'

const CTAItem = styled.p`
	display: flex;
	height: 6rem;
	justify-content: center;
	margin: 0 0 0;
	padding: .7rem 0 0;

	color: ${prims.colors.blue.dark.opaque};

	font-size: ${prims.fontsize.xl};
	line-height: 6rem;

	a {
		margin: 0 0 0 .5rem;
		padding: 0 0 0 .5rem;
		height: 5rem;

		color: ${prims.colors.blue.medium.opaque};
		background-image: linear-gradient(transparent 79%, ${prims.colors.blue.lighter} 79%, ${prims.colors.blue.lighter} 92%, transparent 92%);

		font-weight: bold;
	}

	img {
		position: relative;
		top: 1rem;

		display: inline-block;
		height: 4rem;
		padding: 0 .5rem 0;
		width: 5rem;
	}
`

const getIconForType = function(type) {
	switch(type) {
		case 'portfolio':
			return PortfolioIcon
			break
		case 'bio':
			return BioIcon
			break
		case 'contact':
			return ContactIcon
			break
		default:
			throw 'Invalid icon type for CTAItem'
	}
}

export default (props) => (
  <CTAItem>
  	{props.text} <a>{props.link}<img src={getIconForType(props.type)}/></a>
  </CTAItem>
)
