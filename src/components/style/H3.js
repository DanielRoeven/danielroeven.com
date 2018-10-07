import styled from 'styled-components'
import prims from '../../Primitives'

const H3 = styled.h3`
	padding: 3rem 0 1.45rem;
	width: 100%;

	color: ${prims.colors.blue.dark.opaque};
	
	font-size: ${prims.fontsize.l};
	font-family: 'Rucksack Bold';
	line-height: 3rem;

	a {
		padding: 2.55rem .25rem 1.45rem;
		width: 100%;

		color: ${prims.colors.blue.gray};
		
		background-image: linear-gradient(transparent 4.75rem, ${prims.colors.blue.light} 4.75rem, ${prims.colors.blue.light} 5.25rem, transparent 5.25rem);
	}

	em {
		padding: 0 1rem 0 0;

		color: ${prims.colors.blue.medium.opaque};

		font-style: normal;
	}

	img {
		position: relative;
		top: .6rem;

		display: inline-block;

		height: 3rem;
		padding: 0 0 0 .25rem;
		width: 3.25rem;		
	}
`

export default H3