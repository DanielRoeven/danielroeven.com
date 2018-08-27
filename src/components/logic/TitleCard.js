import React from 'react'
import styled from 'styled-components'
import prims from '../../Primitives'

const TitleCard = styled.div`
	position: absolute;
	left: 0rem;
	top: 0rem;
	width: 28rem;
	padding: 1rem;

	background-color: ${props => props.color};

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

		font-size: ${prims.fontsize.m};
		line-height: 3rem;
		text-shadow: ${prims.shadows.text} ${prims.colors.blue.black.transparent_l};
	}
`

export default TitleCard