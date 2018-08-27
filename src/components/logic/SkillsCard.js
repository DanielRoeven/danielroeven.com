import React from 'react'
import styled from 'styled-components'
import prims from '../../Primitives'

const SkillsCard = styled.div`
	position: absolute;
	bottom: -3rem;
	right: -1rem;
	z-index: 0;

	height: 9rem;

	background-color: ${props => props.color};

	border-radius: 2px;
	box-shadow: ${prims.glow.xs} ${prims.colors.blue.dark.transparent_l}, ${prims.shadows.xs} ${prims.colors.blue.dark.transparent_l};

	transform: translateY(${props => props.hover ? '0' : '-2rem'});

    transition-property: transform;
    transition-duration: .5s;
    transition-timing-function: ease;

	ol {
		display: flex;

		padding: 6.6rem 1rem .75rem;

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