import React from 'react'
import styled from 'styled-components'

import smarthome from './img/smarthome-1-3x.png'

const PortfolioCardLargeSmarthome = styled.div`
	height: 40rem;
	width: 80rem;
	background-size: cover;
	background-image: url(${smarthome});
	background-position: center center;
	margin: 0 0 12rem;
	border-radius: 2px;
	position: relative;
`

const TitleCard = styled.div`
	background-color: hsla(209, 65%, 52%, 0.9);
	width: 28rem;
	position: relative;
	top: -1rem;
	left: -1rem;
	padding: 1rem;
	border-radius: 2px;
	backdrop-filter: blur(8px);

	h3 {
		font-size: 2.5rem;
		line-height: 3rem;
		margin: .5rem 0 .5rem;
		color: hsla(210, 25%, 98%, 1);
		text-shadow: 0 0 2px hsla(210, 58%, 09%, .25);
	}
`

const SkillsCard = styled.div`
	background-color: hsla(209, 65%, 52%, 0.9);
	height: 9rem;
	position: absolute;
	bottom: -1rem;
	right: -1rem;
	border-radius: 2px;

	ol {
		list-style: none;
		display: flex;
		padding: 6.6rem 1rem 0;
	}

	li {
		font-size: 1.375rem;
		font-weight: bold;
		margin-right: 1rem;
		text-transform: uppercase;
		letter-spacing: .05rem;
		color: hsla(210, 25%, 98%, 1);
		text-shadow: 0 0 2px hsla(210, 58%, 09%, .25);

		&:last-child {
			margin: 0;
		};
	}

	z-index: -1;
`

export default () => (
  <PortfolioCardLargeSmarthome>
  	<TitleCard>
  		<h3>Portal for RCSW</h3>
  	</TitleCard>
  	<SkillsCard>
  		<ol>
  			<li>Interaction Design</li>
  			<li>Visual Design</li>
  			<li>Front-End Development</li>
  		</ol>
  	</SkillsCard>
  </PortfolioCardLargeSmarthome>
)
