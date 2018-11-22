import styled from 'styled-components'
import prims from '../Primitives'

const H4 = styled.h4`
	padding: 0.35rem 0 .65rem 0;

	color: ${prims.colors.blue.dark.opaque};

	font-size: ${prims.fontsize.m};
	font-family: 'RucksackBold';
	line-height: 2rem;

	@media (max-width: 1200px) {
		font-size: ${prims.fontsize.l};
		line-height: 3rem
	}
`

export default H4