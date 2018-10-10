import styled from 'styled-components'
import prims from '../Primitives'

const H2 = styled.h2`
	display: inline-block;
	padding: .7rem 0 .3rem;
	color: ${prims.colors.blue.dark.opaque};

	font-size: ${prims.fontsize.xl};
	font-family: ${props => props.hero ? 'Rucksack;' : 'RucksackBold;'};
	line-height: 6rem;
	
	em {
		color: ${prims.colors.blue.medium.opaque};

		font-style: normal;
		font-family: 'RucksackBold';
	};
`

export default H2