import React from 'react'
import styled from 'styled-components'
import { push } from 'gatsby-link'
import prims from '../../Primitives'
import ATVImg from './ATVImg'

import TitleCard from './TitleCard'
import ImageCard from './ImageCard'
import SkillsCard from './SkillsCard'
import ATVLayer from './ATVLayer'

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
			return 'hsla(47, 98%, 60%, .9);'
			break
		case 'orange':
			return 'hsla(29, 97%, 61%, .9);'
			break
		default:
			throw 'Invalid color provided for PortfolioCardLarge'
	}
}

const getColorFamilyFor= function(color) {
	switch(color) {
		case 'light-blue':
			return 'blue'
			break
		case 'blue':
			return 'blue'
			break
		case 'dark-blue':
			return 'blue'
			break
		case 'yellow':
			return 'orange'
			break
		case 'orange':
			return 'orange'
			break
		case 'brown':
			return 'brown'
			break
		default:
			throw 'Invalid color provided'
	}
}


export default (props) => (
	<ATVImg style={{width: '80rem', height: '40rem', margin: '0 0 17rem 0'}} href={props.href}>
		<ATVLayer>
			<SkillsCard color={getColorValueFor(props.secondaryColor)}
						colorFamily={getColorFamilyFor(props.primaryColor)}>
				{makeSkillsListFor(props.skills)}
			</SkillsCard>
		</ATVLayer>
		<ATVLayer style={{width: '100%', height: '100%'}}>
			<ImageCard src={props.image}/>
		</ATVLayer>
		<ATVLayer style={{width: '100%', height: '100%'}}>
			<TitleCard color={getColorValueFor(props.primaryColor)}
						colorFamily={getColorFamilyFor(props.primaryColor)}>
				<h3>{props.title}</h3>
				<p>{props.description}</p>
			</TitleCard>
		</ATVLayer>
	</ATVImg>
)