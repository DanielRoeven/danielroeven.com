import React from 'react'
import styled from 'styled-components'
import prims from '../../Primitives'

const SkillsCard = styled.div`
	display: flex;
	align-items: flex-end;;
	
	z-index: -1;

	height: ${props => props.hover ? '9rem' : '7rem'};
	margin: 34rem -1rem -3rem 0;

	background-color: ${props => props.color};

	border-radius: 2px;
	box-shadow: ${prims.glow.xs} ${prims.colors.blue.dark.transparent_l}, ${prims.shadows.xs} ${prims.colors.blue.dark.transparent_l};

    transition-property: height;
    transition-duration: .5s;
    transition-timing-function: ease;

	ol {
		display: flex;

		padding: 0 1rem .75rem;

		list-style: none;
	}

	li {
		margin-right: 1rem;

		color: ${prims.colors.blue.white.opaque};

		font-size: ${prims.fontsize.m_uppercase};
		font-weight: bold;
		letter-spacing: .05rem;
		text-shadow: ${prims.shadows.text} ${prims.colors.blue.black.transparent_l};
		text-transform: uppercase;

		&:last-child {
			margin: 0;
		};
	}
`

export default SkillsCard