import styled from 'styled-components'

const H3 = styled.h3`
	padding: 3rem 0 1.45rem;
	line-height: 3rem;
	font-weight: bold;
	font-size: 2.5rem;
	color: hsla(209, 61%, 26%, 1);
	width: 100%;

	a {
		font-size: 2.5rem;
		font-weight: bold;
		line-height: 3rem;
		padding: 2.55rem .25rem 1.45rem;
		color: hsla(209, 21%, 63%, 1);
		background-image: linear-gradient(transparent 4.75rem, hsla(190, 84%, 64%, 1) 4.75rem, hsla(190, 84%, 64%, 1) 5.25rem, transparent 5.25rem);
		width: 100%;
	}

	img {
		width: 3.25rem;
		height: 3rem;
		position: relative;
		top: .6rem;
		padding: 0 0 0 .25rem;
		display: inline-block;
	}
`

export default H3