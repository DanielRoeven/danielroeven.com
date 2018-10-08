import styled from 'styled-components'
import prims from '../Primitives'

const TagSmall = styled.span`
	padding: 1.7rem 0 0 0;
	margin: 0 0 -.7rem 0;
	width: 11.5rem;
	
	color: ${prims.colors.blue.dark.opaque};

	font-size: ${prims.fontsize.s_uppercase};
	font-weight: normal;
	letter-spacing: 0.025rem;
	line-height: 2rem;
	text-transform: uppercase;
	text-align: right;
`

export default TagSmall