import styled from 'styled-components'
import prims from '../Primitives'

const TitleCard = styled.div`
	left: -1rem;
	padding: 1rem;
	position: absolute;
	top: -1rem;
	width: 28rem;

	background-color: ${props => props.color};
	box-shadow: ${prims.glow.m} ${prims.colors.blue.dark.transparent_l}, ${prims.shadows.m} ${prims.colors.blue.dark.transparent_l};
	border-radius: .25rem;

	@media (max-width: 600px) {
		width: auto !important;
	}

	h3 {
		margin: .5rem 0 0;

		color: ${prims.colors.blue.white.opaque};

		font-size: ${prims.fontsize.l};
		line-height: 3rem;
		text-shadow: ${prims.shadows.text_m} ${props => (props.colorFamily === 'blue') ? prims.colors.blue.black.transparent_s : prims.colors.orange.black.opaque};
		font-family: 'RucksackBold';
	}

	p {
		margin: .4rem 0 .1rem;

		color: ${prims.colors.blue.white.opaque};

		font-size: ${prims.fontsize.m};
		line-height: 3rem;
		text-shadow: ${prims.shadows.text_m} ${props => (props.colorFamily === 'blue') ? prims.colors.blue.black.transparent_s : prims.colors.orange.black.opaque};

		transition: opacity 0.2s ease-in-out;

		@media (max-width: 600px) {
			display: none;
		}
	}

	a {
		display: block;

		color: ${prims.colors.blue.white.opaque};

		font-size: ${prims.fontsize.m_uppercase};
		font-family: 'RucksackBold';
		line-height: 3rem;
		text-align: center;
		text-shadow: ${prims.shadows.text_m} ${prims.colors.blue.black.transparent_m};
		text-transform: uppercase;
	}
`

export default TitleCard