import styled from 'styled-components'
import prims from '../../Primitives'

const H2 = styled.h2`
	padding: .7rem 0 .3rem;

	color: ${prims.colors.blue.dark.opaque};

	font-size: ${prims.fontsize.xl};
	font-weight: ${props => props.hero ? 'normal;' : 'bold;'};
	line-height: 6rem;
	
	em {
		color: ${prims.colors.blue.medium.opaque};

		font-style: normal;
		font-weight: bold;
	};
`

export default H2