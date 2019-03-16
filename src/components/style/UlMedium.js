import styled from 'styled-components'
import prims from '../Primitives'

const UlMedium = styled.ul`
	padding: 1.85rem 0 1.15rem 0;
	color: ${prims.colors.blue.dark.opaque};
	
	font-size: ${prims.fontsize.m};
	line-height: 3rem;

	@media (max-width: 1200px) {
		list-style: none;
	}

	a {
		display: inline-block;
		margin: 0 -.25rem;
		padding: 0 .25rem;

		color: ${prims.colors.blue.dark.opaque};
		background-image:	linear-gradient(transparent 1.95rem, ${prims.colors.orange.medium.opaque} 1.95rem, ${prims.colors.orange.medium.opaque} 2.35rem, transparent 2.35rem),
							linear-gradient(transparent 1.95rem, ${prims.colors.blue.lightest} 1.95rem, ${prims.colors.blue.lightest} 2.35rem, transparent 2.35rem);
	    background-position: left center, left center;
	    background-repeat: no-repeat, no-repeat;
	    background-size: 0% 100%, 100% 100%;

	    text-decoration: none;
		font-family: 'Rucksack';
		
	    transition-property: background-size;
	    transition-duration: .5s;
	    transition-timing-function: ease;

	    &:hover {
	      background-size: 100% 100%, 100% 100%;
    	};
	}
`

export default UlMedium
