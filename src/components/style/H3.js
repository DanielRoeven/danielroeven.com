import styled from 'styled-components'
import prims from '../Primitives'

const H3 = styled.h3`
	padding: 3rem 0 1.45rem;
	width: 100%;

	color: ${prims.colors.blue.dark.opaque};
	
	font-size: ${prims.fontsize.l};
	font-family: 'RucksackBold';
	line-height: 3rem;

	a {
		padding: 2.55rem .25rem 1.45rem;

		color: ${prims.colors.blue.gray};

		background-image:	linear-gradient(transparent 4.85rem, ${prims.colors.orange.medium.opaque} 4.85rem, ${prims.colors.orange.medium.opaque} 5.35rem, transparent 5.35rem),
							linear-gradient(transparent 4.85rem, ${prims.colors.blue.light} 4.85rem, ${prims.colors.blue.light} 5.35rem, transparent 5.35rem);
	    background-position: left center, left center;
	    background-repeat: no-repeat, no-repeat;
	    background-size: 0% 100%, 100% 100%;

		text-decoration: none;

		transition-property: background-size;
	    transition-duration: .5s;
	    transition-timing-function: ease;

	    &:hover {
	      background-size: 100% 100%, 100% 100%;
    	};
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