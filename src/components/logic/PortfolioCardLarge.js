import React from 'react'
import styled from 'styled-components'
import prims from '../../Primitives'

const PortfolioCardLargeTemplate = styled.div`
	display: flex;
	justify-content: space-between;

	height: 40rem;
	margin: 0 0 17rem;
	width: 80rem;

	background-image: url(${props => props.image});
	background-position: center center;
	background-size: cover;

	border-radius: 2px;
	box-shadow: ${prims.glow.s} ${prims.colors.blue.dark.transparent_l}, ${prims.shadows.s} ${prims.colors.blue.dark.transparent_l};
`

import TitleCard from './TitleCard'
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
			return 'hsla(190, 84%, 64%, .8);'
			break
		case 'blue':
			return 'hsla(209, 65%, 52%, 0.9);'
			break
		case 'dark-blue':
			return 'hsla(209, 61%, 26%, .8);'
			break
		case 'yellow':
			return 'hsla(47, 98%, 50%, 0.9);'
			break
		case 'brown':
			return 'hsla(29, 63%, 30%, 0.9);'
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
			<PortfolioCardLargeTemplate image={this.props.image}
										onMouseEnter={() => this.setState({hover: true})}
										onMouseLeave={() => this.setState({hover: false})}>
				<TitleCard hover={this.state.hover}color={getColorValueFor(this.props.primaryColor)}>
					<h3>{this.props.title}</h3>
					<p>{this.props.description}</p>
				</TitleCard>
				<SkillsCard hover={this.state.hover} color={getColorValueFor(this.props.secondaryColor)}>
					{makeSkillsListFor(this.props.skills)}
				</SkillsCard>
			</PortfolioCardLargeTemplate>
		)
	}
}

export default PortfolioCardLarge