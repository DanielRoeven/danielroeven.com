import styled from 'styled-components'
import prims from '../Primitives'

const PSmall = styled.p`
	padding: .55rem 0 0 0;
	margin: 0 0 -.575rem 0;
	width: 100%;

	color: ${prims.colors.blue.dark.opaque};

	font-size: ${prims.fontsize.s};
	line-height: 2rem;

	&:last-child {
		padding: .6rem 0 1rem 0;
	}

	@media (max-width: 1200px) {
		font-size: ${prims.fontsize.m};
		line-height: 3rem
	}
`

export default PSmall