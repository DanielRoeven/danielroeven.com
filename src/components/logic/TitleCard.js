import React from 'react'
import styled from 'styled-components'
import prims from '../../Primitives'

const TitleCard = styled.div`
	align-self: flex-start;

	padding: 1rem;
	margin: -1rem 0  0 -1rem;
	width: 28rem;

	background-color: ${props => props.color}

	backdrop-filter: blur(.5rem);
	border-radius: 2px;
	box-shadow: ${prims.glow.m} ${prims.colors.blue.dark.transparent_l}, ${prims.shadows.m} ${prims.colors.blue.dark.transparent_l};

	h3 {
		margin: .5rem 0 0;

		color: ${prims.colors.blue.white.opaque};

		font-size: ${prims.fontsize.l};
		line-height: 3rem;
		text-shadow: ${prims.shadows.text} ${prims.colors.blue.black.transparent_l};
	}

	p {
		margin: .4rem 0 .1rem;

		color: ${prims.colors.blue.white.opaque};
		opacity: ${props => props.hover ? '1' : '0'};

		font-size: ${prims.fontsize.m};
		line-height: 3rem;
		text-shadow: ${prims.shadows.text} ${prims.colors.blue.black.transparent_l};
	    
	    transition-property: opacity;
	    transition-duration: .5s;
	    transition-timing-function: ease;
	}
`

export default TitleCard