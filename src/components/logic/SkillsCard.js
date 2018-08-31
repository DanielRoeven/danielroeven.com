import React from 'react'
import styled from 'styled-components'
import prims from '../../Primitives'

//transform: translateY(${props => props.hover ? '0' : '-2rem'});

const SkillsCard = styled.div`
	position: absolute;
	right: -1rem;
	bottom: -3rem;
	padding: 1rem;
	display: inline-block;
	height: 9rem;

	background-color: ${props => props.color};

	border-radius: 2px;
	box-shadow: ${prims.glow.xs} ${prims.colors.blue.dark.transparent_l}, ${prims.shadows.xs} ${prims.colors.blue.dark.transparent_l};

	ol {
		display: flex;

		padding: 5.6rem 0rem .75rem;

		list-style: none;
	}

	li {
		margin-right: 1rem;

		color: ${prims.colors.blue.white.opaque};

		font-size: ${prims.fontsize.m_uppercase};
		font-weight: bold;
		letter-spacing: .05rem;
		text-shadow: ${prims.shadows.text_s} ${prims.colors.blue.black.transparent_m};
		text-transform: uppercase;

		&:last-child {
			margin: 0;
		};
	}
`

export default SkillsCard