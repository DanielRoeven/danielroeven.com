import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import prims from '../Primitives'

import PortfolioIcon from '../img/icons/portfolio.svg'
import BioIcon from '../img/icons/bio.svg'
import ContactIcon from '../img/icons/contact.svg'
import EmailIcon from'../img/icons/email.svg'
import TwitterIcon from'../img/icons/twitter.svg'
import LinkedInIcon from'../img/icons/linkedin.svg'
import GitHubIcon from'../img/icons/github.svg'
import InstagramIcon from'../img/icons/instagram.svg'

const LinkSentence = styled.p`
	display: flex;
	height: 6rem;
	justify-content: ${props => (props.type == 'external') ? 'flex-start;' : 'center;'};
	margin: 0 0 0;
	padding: .7rem 0 0;

	color: ${prims.colors.blue.dark.opaque};

	font-size: ${prims.fontsize.xl};
	line-height: 6rem;

	a {
		display: block;
		margin: 0 0 0 .5rem;
		padding: 0 0 0 .5rem;
		height: 5rem;

		color: ${prims.colors.blue.medium.opaque};
		background-image: 	linear-gradient(transparent 4rem, ${prims.colors.orange.medium.opaque} 4rem, ${prims.colors.orange.medium.opaque} 4.6rem, transparent 4.6rem),
							linear-gradient(transparent 4rem, ${prims.colors.blue.lighter} 4rem, ${prims.colors.blue.lighter} 4.6rem, transparent 4.6rem);
	    background-position: left center, left center;
	    background-repeat: no-repeat, no-repeat;
	    background-size: 0% 100%, 100% 100%;

		font-family: 'Rucksack Bold';
		text-decoration: none;

	    transition-property: background-size;
	    transition-duration: .5s;
	    transition-timing-function: ease;

	    &:hover {
	      background-size: 100% 100%, 100% 100%;
	    };
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

const getIconFor = function(link) {
	switch(link) {
		case 'portfolio':
			return PortfolioIcon
			break
		case 'bio':
			return BioIcon
			break
		case 'hi!':
			return ContactIcon
			break
		case 'email':
			return EmailIcon
			break
		case 'twitter':
			return TwitterIcon
			break
		case 'linked':
			return LinkedInIcon
			break
		case 'github':
			return GitHubIcon
			break
		case 'instagram':
			return InstagramIcon
			break
		default:
			throw 'No icon found for link in LinkSentence'
	}
}

const makeLinkFor = function(type, link, to) {
	const icon = getIconFor(link)
	if (type == 'internal') {
		return (
			<Link to={to}>{link}<img src={icon}/></Link>
		)		
	}
	else if (type == 'external') {
		return (
			<a href={to} target="_blank">{link}<img src={icon}/></a>
		)		
	}
	else {
		throw 'No link could be made for type in LinkSentence'
	}
}

export default (props) => (
  <LinkSentence type={props.type}>
  	{props.text} {makeLinkFor(props.type, props.link, props.to)}
  </LinkSentence>
)
