import createClass from 'create-react-class'
import React from 'react'
import styled from 'styled-components'
import prims from '../../Primitives'

import ATVImg from './ATVImg'
import ATVLayer from './ATVLayer'
import ImageCard from './ImageCard'
import DescriptionCard from './DescriptionCard'

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
			return 'hsla(47, 98%, 60%, .9);'
			break
		case 'orange':
			return 'hsla(29, 97%, 61%, 0.9)'
			break
		case 'brown':
			return 'hsla(29, 63%, 30%, 0.9);'
			break
		default:
			throw 'Invalid color provided'
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


export default createClass({
	getInitialState () {
    	return {
			isOnHover: false,
    	}
    },

    handleEnter () {
    	this.setState({isOnHover: true})
  	},

  	handleLeave () {
    	this.setState({isOnHover: false})
  	},

	render() {
		return (
			<ATVImg parentEnter={this.handleEnter}
					parentLeave={this.handleLeave}
					style={{width: '39.5rem', height: '22rem', margin: '0 0 5rem'}}
					small
					href={this.props.href}>
				<ATVLayer>
					<ImageCard small src={this.props.image}/>
				</ATVLayer>
				<ATVLayer>
					<DescriptionCard color={getColorValueFor(this.props.primaryColor)}
									colorFamily={getColorFamilyFor(this.props.primaryColor)}
									isOnHover={this.state.isOnHover}
									estimatedHeight={this.props.estimatedHeight}>
						<h3>{this.props.title}</h3>
						<p>{this.props.description}</p>
						<a>Read Case Study</a>
					</DescriptionCard>
				</ATVLayer>
			</ATVImg>
		)
	}
})