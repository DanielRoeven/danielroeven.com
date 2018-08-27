import React from 'react'
import styled from 'styled-components'
import prims from '../../Primitives'
import ATVImg from './ATVImg'

const PortfolioCardLargeTemplate = styled.div`
	position: relative;

	height: 40rem;
	margin: 0 0 17rem;
	width: 80rem;

	background-color: green;
`

import TitleCard from './TitleCard'
const PortfolioImage = styled.img`
	position: absolute;
	z-index: 1;

	height: 40rem;
	width: 80rem;

	object-fit: cover;
	object-position: center center;

	border-radius: 2px;
	box-shadow: ${prims.glow.s} ${prims.colors.blue.dark.transparent_l}, ${prims.shadows.s} ${prims.colors.blue.dark.transparent_l};
`
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
			throw 'Invalid color provided'
	}
}

class PortfolioCardLarge extends React.Component {
	constructor() {
		super()
		this.state={
			hover: false
		}
	}

	render() {
		return (
			<ATVImg style={{width: '80rem', height: '40rem', margin: '0 0 17rem 0'}}
					onMouseEnter={() => this.setState({hover: true})}
					onMouseLeave={() => this.setState({hover: false})}>
				<TitleCard hover={this.state.hover} color={getColorValueFor(this.props.primaryColor)}>
					<h3>{this.props.title}</h3>
					<p>{this.props.description}</p>
				</TitleCard>
				<PortfolioImage src={this.props.image}></PortfolioImage>
				<SkillsCard hover={this.state.hover} color={getColorValueFor(this.props.secondaryColor)}>
					{makeSkillsListFor(this.props.skills)}
				</SkillsCard>
			</ATVImg>
		)
	}
}

export default PortfolioCardLarge