import styled from 'styled-components'
import prims from '../Primitives'

const Quote = styled.blockquote`
	display: inline-block;
	//padding: .7rem 0 .3rem;
	width: 80rem;
	margin: -.3rem -13.5rem .3rem;
	color: ${prims.colors.blue.medium.opaque};

	font-size: ${prims.fontsize.xl};
	font-weight: normal;
	line-height: 6rem;

	text-align: center;
	
	em {
		color: ${prims.colors.blue.medium.opaque};

		font-style: normal;
		font-family: 'RucksackBold';
	};
`

export default Quote