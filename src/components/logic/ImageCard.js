import styled from 'styled-components'
import prims from '../Primitives'

const ImageCard = styled.img`
	height: ${props => props.small ? '22rem' : '40rem'};
	margin: 0;
	width: ${props => props.small ? '39.5rem' : '80rem'};

	border-radius: .25rem;
	box-shadow: ${prims.glow.s} ${prims.colors.blue.dark.transparent_l}, ${prims.shadows.s} ${prims.colors.blue.dark.transparent_l};
	object-fit: cover;

	@media (max-width: 400px) {
		width: 36rem !important;
    	height: 22rem !important;
	}
`


export default ImageCard