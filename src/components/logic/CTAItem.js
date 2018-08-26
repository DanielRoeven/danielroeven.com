import React from 'react'
import styled from 'styled-components'
import prims from '../../Primitives'

import PortfolioIcon from '../img/icons/portfolio.svg'
import BioIcon from '../img/icons/bio.svg'
import ContactIcon from '../img/icons/contact.svg'
import EmailIcon from'../img/icons/email.svg'
import TwitterIcon from'../img/icons/twitter.svg'
import LinkedInIcon from'../img/icons/linkedin.svg'
import GitHubIcon from'../img/icons/github.svg'
import InstagramIcon from'../img/icons/instagram.svg'

const CTAItem = styled.p`
	display: flex;
	height: 6rem;
	justify-content: ${props => props.contactlink ? 'flex-start;' : 'center;'};
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
		case 'email':
			return EmailIcon
			break
		case 'twitter':
			return TwitterIcon
			break
		case 'linkedin':
			return LinkedInIcon
			break
		case 'github':
			return GitHubIcon
			break
		case 'instagram':
			return InstagramIcon
			break
		default:
			throw 'Invalid icon type for CTAItem'
	}
}

export default (props) => (
  <CTAItem contactlink={props.contactlink}>
  	{props.text} <a>{props.link}<img src={getIconForType(props.type)}/></a>
  </CTAItem>
)
