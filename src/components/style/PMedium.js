import styled from 'styled-components'
import prims from '../Primitives'

const PMedium = styled.p`
	padding: 1.85rem 0 1.15rem 0;

	color: ${prims.colors.blue.dark.opaque};

	font-size: ${prims.fontsize.m};
	line-height: 3rem;

	a {
		display: inline-block;
		margin: 0 -.25rem;
		padding: 0 .25rem;

		color: ${prims.colors.blue.medium.opaque};
		background-image:	linear-gradient(transparent 1.95rem, ${prims.colors.orange.medium.opaque} 1.95rem, ${prims.colors.orange.medium.opaque} 2.35rem, transparent 2.35rem),
							linear-gradient(transparent 1.95rem, ${prims.colors.blue.lighter} 1.95rem, ${prims.colors.blue.lighter} 2.35rem, transparent 2.35rem);
	    background-position: left center, left center;
	    background-repeat: no-repeat, no-repeat;
	    background-size: 0% 100%, 100% 100%;

	    text-decoration: none;
		font-family: 'Rucksack Bold';
		
	    transition-property: background-size;
	    transition-duration: .5s;
	    transition-timing-function: ease;

	    &:hover {
	      background-size: 100% 100%, 100% 100%;
    	};
	}

	em {
		color: ${prims.colors.blue.medium.opaque};;

		font-style: normal;
		font-family: 'Rucksack Bold';
	};

	ol {
		list-style: none;
	}

	.gatsby-resp-image-wrapper {
		margin: 0 -13.5rem !important;
		width: 80rem;
		padding-bottom: .75rem;
	}
`

export default PMedium
