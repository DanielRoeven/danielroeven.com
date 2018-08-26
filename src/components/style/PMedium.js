import styled from 'styled-components'
import prims from '../../Primitives'

const PMedium = styled.p`
	padding: 1.85rem 0 1.15rem 0;

	color: ${prims.colors.blue.dark.opaque};

	font-size: ${prims.fontsize.m};
	line-height: 3rem;

	em {
		color: ${prims.colors.blue.medium.opaque};;

		font-style: normal;
		font-weight: bold;
	};
`

export default PMedium
