import React from 'react'
import styled from 'styled-components'
import prims from '../../Primitives'

const ContentCardSmall = styled.div`
	display: flex;
	justify-content: center;

	height: 25rem;
	margin: 0 0 5rem;
	width: 39.5rem;

	background-image: url(${props => props.image});
	background-position: center center;
	background-size: cover;

	border-radius: 2px;
	box-shadow: ${prims.glow.s} ${prims.colors.blue.dark.transparent_l}, ${prims.shadows.s} ${prims.colors.blue.dark.transparent_l};
`

const TitleCard = styled.div`
	align-self: flex-end;

	padding: 1rem;
	margin: 0 0 -1rem 0;
	width: 37.5rem;

	background-color: ${props => props.color}

	backdrop-filter: blur(.5rem);
	border-radius: 2px;
	box-shadow: ${prims.glow.m} ${prims.colors.blue.dark.transparent_l}, ${prims.shadows.m} ${prims.colors.blue.dark.transparent_l};

	h3 {
		margin: .5rem 0 0;

		color: ${prims.colors.blue.white.opaque};

		font-size: ${prims.fontsize.l};
		line-height: 3rem;
		text-align: center;
		text-shadow: ${prims.shadows.text} ${prims.colors.blue.black.transparent_l};
	}

	p {
		margin: .4rem 0 .1rem;

		color: ${prims.colors.blue.white.opaque};

		font-size: ${prims.fontsize.m};
		line-height: 3rem;
		text-shadow: ${prims.shadows.text} ${prims.colors.blue.black.transparent_l};
	}
`

// const makeSkillsListFor = function(skills){
// 	const skillItems = skills.map((skill) =>
// 		<li key={skill}>{skill}</li>
// 	)

// 	return (
// 		<ol>{skillItems}</ol>
// 	)
// }

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
  <ContentCardSmall image={props.image}>
  	<TitleCard color={getColorValueFor(props.primaryColor)}>
  		<h3>{props.title}</h3>
  		{/*<p>{props.description}</p>*/}
  	</TitleCard>
  </ContentCardSmall>
)
