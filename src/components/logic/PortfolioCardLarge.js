import React from 'react'
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
		case 'blue':
			return 'hsla(209, 65%, 52%, .8);'
		case 'dark-blue':
			return 'hsla(209, 61%, 26%, .8);'
		case 'yellow':
			return 'hsla(47, 98%, 60%, .9);'
		case 'orange':
			return 'hsla(29, 97%, 61%, .9);'
		default:
			throw new Error('Invalid color provided for PortfolioCardLarge')
	}
}

const getColorFamilyFor= function(color) {
	switch(color) {
		case 'light-blue':
			return 'blue'
		case 'blue':
			return 'blue'
		case 'dark-blue':
			return 'blue'
		case 'yellow':
			return 'orange'
		case 'orange':
			return 'orange'
		case 'brown':
			return 'brown'
		default:
			throw new Error('Invalid color provided')
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