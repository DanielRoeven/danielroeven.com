import React from 'react'
import styled from 'styled-components'

import portfolioIcon from './img/icons/portfolio.svg'
import bioIcon from './img/icons/bio.svg'
import contactIcon from './img/icons/contact.svg'

const InternalLink = styled.p`
	font-size: 3.4375rem;
	color: hsla(209, 61%, 26%, 1);
	line-height: 6rem;
	margin: 0 0 0;
	height: 6rem;
	padding: .7rem 0 0;
	//background-color: hsla(120, 50%, 50%, 0.25);
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

const linkForType = function(type){
	switch(type) {
		case 'portfolio':
			return(<a>portfolio<img src={portfolioIcon}/></a>)
			break;
		case 'bio':
			return(<a>bio<img src={bioIcon}/></a>)
			break;
		case 'contact':
			return(<a>hi!<img src={contactIcon}/></a>)
			break;
		default:
			break;
	}
}

const textForType = function(type){
	switch(type) {
		case 'portfolio':
			return('See my full')
			break;
		case 'bio':
			return('Check my')
			break;
		case 'contact':
			return('Or say')
			break;
		default:
			break;
	}
}

export default (props) => (
  <InternalLink>
  	{textForType(props.type)}{linkForType(props.type)}
  </InternalLink>
)
