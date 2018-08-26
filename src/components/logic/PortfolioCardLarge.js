import React from 'react'
import styled from 'styled-components'
import prims from '../../Primitives'

import rcsw from '../../pages/img/rcsw-mobile-3x.jpg'

const PortfolioCardLarge = styled.div`
	display: flex;
	justify-content: space-between;

	height: 40rem;
	margin: 0 0 17rem;
	width: 80rem;

	background-image: url(${props => props.image});
	background-position: center center;
	background-size: cover;

	border-radius: 2px;
	box-shadow: ${prims.shadows.xs} ${prims.colors.blue.dark.transparent_l}, ${prims.shadows.s} ${prims.colors.blue.dark.transparent_l};
`

const TitleCard = styled.div`
	align-self: flex-start;

	padding: 1rem;
	margin: -1rem 0  0 -1rem;
	width: 28rem;

	background-color: ${props => props.color}

	backdrop-filter: blur(.5rem);
	border-radius: 2px;
	box-shadow: ${prims.shadows.s} ${prims.colors.blue.dark.transparent_l}, ${prims.shadows.m} ${prims.colors.blue.dark.transparent_l};

	h3 {
		margin: .5rem 0 0;

		color: ${prims.colors.blue.white.opaque};

		font-size: ${prims.fontsize.l};
		line-height: 3rem;
		text-shadow: ${prims.shadows.text} ${prims.colors.blue.black};
	}

	p {
		margin: .4rem 0 .1rem;

		color: hsla(210, 25%, 98%, 1);

		font-size: ${prims.fontsize.m};
		line-height: 3rem;
		text-shadow: ${prims.shadows.text} ${prims.colors.blue.black};
	}
`

const SkillsCard = styled.div`
	align-self: flex-end;
	z-index: -1;

	height: 9rem;
	margin: 0 -1rem -3rem 0;

	background-color: ${props => props.color};

	border-radius: 2px;
	box-shadow: ${prims.shadows.xxs} ${prims.colors.blue.dark.transparent_l}, ${prims.shadows.xs} ${prims.colors.blue.dark.transparent_l};

	ol {
		display: flex;

		padding: 6.6rem 1rem 0;

		list-style: none;
	}

	li {
		margin-right: 1rem;

		color: ${prims.colors.blue.white.opaque};

		font-size: ${prims.fontsize.m_uppercase};
		font-weight: bold;
		letter-spacing: .05rem;
		text-shadow: ${prims.shadows.text} ${prims.colors.blue.black};
		text-transform: uppercase;

		&:last-child {
			margin: 0;
		};
	}
`

const makeSkillsListFor = function(skills){
	const skillItems = skills.map((skill) =>
		<li key={skill}>{skill}</li>
	)

	return (
		<ol>{skillItems}</ol>
	)
}

const getColorValueFor= function(color) {
	switch(color) {
		case 'light-blue':
			return 'hsla(190, 84%, 64%, .8);'
			break
		case 'blue':
			return 'hsla(209, 65%, 52%, 0.9);'
			break
		case 'dark-blue':
			return 'hsla(209, 61%, 26%, .8);'
			break
		case 'yellow':
			return 'hsla(47, 98%, 68%, 0.9);'
			break
		case 'brown':
			return 'hsla(29, 63%, 30%, 0.9);'
			break
		default:
			throw 'Invalid color provided'
	}
}

export default (props) => (
  <PortfolioCardLarge image={props.image}>
  	<TitleCard color={getColorValueFor(props.primaryColor)}>
  		<h3>{props.title}</h3>
  		<p>{props.description}</p>
  	</TitleCard>
  	<SkillsCard color={getColorValueFor(props.secondaryColor)}>
  		{makeSkillsListFor(props.skills)}
  	</SkillsCard>
  </PortfolioCardLarge>
)
