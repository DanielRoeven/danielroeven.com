import React from 'react'
import styled from 'styled-components'
import prims from '../../Primitives'
import ATVImg from './ATVImg'

import TitleCard from './TitleCard'
import ImageCard from './ImageCard'
import SkillsCard from './SkillsCard'

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
			return 'hsla(190, 84%, 64%, .9);'
			break
		case 'blue':
			return 'hsla(209, 65%, 52%, .8);'
			break
		case 'dark-blue':
			return 'hsla(209, 61%, 26%, .8);'
			break
		case 'yellow':
			return 'hsla(47, 98%, 51%, .9);'
			break
		case 'orange':
			return 'hsla(29, 97%, 61%, .9);'
			break
		default:
			throw 'Invalid color provided for PortfolioCardLarge'
	}
}

export default (props) => (
	<ATVImg style={{width: '80rem', height: '40rem', margin: '0 0 17rem 0'}}>
		<div>
			<SkillsCard color={getColorValueFor(props.secondaryColor)}>
				{makeSkillsListFor(props.skills)}
			</SkillsCard>
		</div>
		<div>
			<ImageCard src={props.image}/>
		</div>
		<div>
			<TitleCard color={getColorValueFor(props.primaryColor)}>
				<h3>{props.title}</h3>
				<p>{props.description}</p>
			</TitleCard>
		</div>
	</ATVImg>
)