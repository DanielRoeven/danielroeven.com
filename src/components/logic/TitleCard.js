import React from 'react'
import styled from 'styled-components'
import prims from '../../Primitives'

const TitleCard = styled.div`
	position: absolute;
	left: 0rem;
	top: ${props => props.small ? 'auto' : '0rem'};
	bottom: ${props => props.small ? '0' : 'auto'};
	margin: ${props => props.small ? '0 1rem 0' : 'auto'};
	width: ${props => props.small ? '37.5rem' : '28rem'};
	padding: 1rem;

	background-color: ${props => props.color};

	border-radius: 2px;
	box-shadow: ${prims.glow.m} ${prims.colors.blue.dark.transparent_l}, ${prims.shadows.m} ${prims.colors.blue.dark.transparent_l};
	transform: ${props => props.small ? 'translate(0, 2rem)' : 'translate(-1rem, -1rem)'};

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

		font-size: ${prims.fontsize.m};
		line-height: 3rem;
		text-shadow: ${prims.shadows.text} ${prims.colors.blue.black.transparent_l};
	}

	a {
		display: block;

		color: ${prims.colors.blue.white.opaque};

		font-size: ${prims.fontsize.m_uppercase};
		font-weight: bold;
		line-height: 3rem;
		text-align: center;
		text-shadow: ${prims.shadows.text} ${prims.colors.blue.black.transparent_l};
		text-transform: uppercase;
	}
`

export default TitleCard