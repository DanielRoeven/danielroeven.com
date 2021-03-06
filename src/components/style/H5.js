import styled from 'styled-components'
import prims from '../Primitives'

const H5 = styled.h5`
	padding: 1.55rem 0 0 0;
	margin: 0 1rem -.6rem 0;
	width: 26rem;
	
	color: ${prims.colors.blue.dark.opaque};
	
	font-size: ${prims.fontsize.s};
	font-family: 'RucksackBold';
	line-height: 2rem;

	@media (max-width: 1200px) {
		font-size: ${prims.fontsize.m};
		line-height: 3rem;
		width: 55%;
	}
`

export default H5