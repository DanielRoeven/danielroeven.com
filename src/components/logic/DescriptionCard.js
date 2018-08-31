import React from 'react'
import styled from 'styled-components'
import prims from '../../Primitives'

const TitleCard = styled.div`
	bottom: -2rem;
	left: 1rem;
	max-height: ${props => props.isOnHover ? props.estimatedHeight : '6rem'};
	overflow: hidden;
	padding: 1rem;
	position: absolute;
	width: 37.5rem;

	background-color: ${props => props.color};
	box-shadow: ${prims.glow.m} ${prims.colors.blue.dark.transparent_l}, ${prims.shadows.m} ${prims.colors.blue.dark.transparent_l};
	border-radius: .25rem;

	transition: max-height 0.2s ease-out;

	h3 {
		margin: .5rem 0 0;

		color: ${prims.colors.blue.white.opaque};

		font-size: ${prims.fontsize.l};
		line-height: 3rem;
		text-shadow: ${prims.shadows.text_s} ${prims.colors.blue.black.transparent_m};
	}

	p {
		margin: .4rem 0 .1rem;

		color: ${prims.colors.blue.white.opaque};
		opacity: ${props => props.isOnHover ? 1 : 0};

		font-size: ${prims.fontsize.m};
		line-height: 3rem;
		text-shadow: ${prims.shadows.text_m} ${prims.colors.blue.black.transparent_m};

		transition: opacity 0.2s ease-in-out;
	}

	a {
		display: block;

		color: ${prims.colors.blue.white.opaque};

		font-size: ${prims.fontsize.m_uppercase};
		font-weight: bold;
		line-height: 3rem;
		text-align: center;
		text-shadow: ${prims.shadows.text_m} ${prims.colors.blue.black.transparent_m};
		text-transform: uppercase;
	}
`

export default TitleCard