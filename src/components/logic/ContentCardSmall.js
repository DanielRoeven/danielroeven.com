import createClass from 'create-react-class'
import React from 'react'

import ATVImg from './ATVImg'
import ATVLayer from './ATVLayer'
import ImageCard from './ImageCard'
import DescriptionCard from './DescriptionCard'

const getColorValueFor= function(color) {
	switch(color) {
		case 'light-blue':
			return 'hsla(190, 84%, 64%, .8);'
		case 'blue':
			return 'hsla(209, 65%, 52%, 0.9);'
		case 'dark-blue':
			return 'hsla(209, 61%, 26%, .8);'
		case 'yellow':
			return 'hsla(47, 98%, 60%, .9);'
		case 'orange':
			return 'hsla(29, 97%, 61%, 0.9)'
		case 'brown':
			return 'hsla(29, 63%, 30%, 0.9);'
		default:
			throw new Error('Invalid color provided')
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
			<ATVImg className="ContentCardSmall"
					parentEnter={this.handleEnter}
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
						<span>Read Case Study</span>
					</DescriptionCard>
				</ATVLayer>
			</ATVImg>
		)
	}
})