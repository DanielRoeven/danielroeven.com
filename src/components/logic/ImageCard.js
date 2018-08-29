import styled from 'styled-components'
import prims from '../../Primitives'

const PortfolioImage = styled.img`
	height: 40rem;
	margin: 1rem;
	width: 80rem;

	border-radius: .25rem;
	box-shadow: ${prims.glow.s} ${prims.colors.blue.dark.transparent_l}, ${prims.shadows.s} ${prims.colors.blue.dark.transparent_l};
	object-fit: cover;
`

export default PortfolioImage