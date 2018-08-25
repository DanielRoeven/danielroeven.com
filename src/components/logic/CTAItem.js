import React from 'react'
import styled from 'styled-components'

import InternalLink from '../InternalLink'

import PortfolioIcon from '../img/icons/portfolio.svg'
import BioIcon from '../img/icons/bio.svg'
import ContactIcon from '../img/icons/contact.svg'

const CTAItem = styled.p`
	font-size: 3.4375rem;
	color: hsla(209, 61%, 26%, 1);
	line-height: 6rem;
	margin: 0 0 0;
	height: 6rem;
	padding: .7rem 0 0;
	display: flex;
	justify-content: center;

	a {
		font-weight: bold;
		margin: 0 0 0 .5rem;
		padding: 0 0 0 .5rem;
		color: hsla(209, 65%, 52%, 1);
		background-image: linear-gradient(hsla(0, 0%, 0%, 0) 79%, hsla(190, 83%, 82%, 1) 79%, hsla(190, 83%, 82%, 1) 92%, hsla(0, 0%, 0%, 0) 92%);
		height: 5rem;
	}

	img {
		width: 5rem;
		height: 4rem;
		position: relative;
		padding: 0 .5rem 0;
		top: 1rem;
		display: inline-block;
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
