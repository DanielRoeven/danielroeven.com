import styled from 'styled-components'

const H2 = styled.h2`
	padding: .7rem 0 .3rem;

	color: hsla(209, 61%, 26%, 1);

	line-height: 6rem;
	font-size: 3.4375rem;
	font-weight: ${props => props.hero ? 'normal;' : 'bold;'};

	em {
		color: hsla(209, 65%, 52%, 1);

		font-style: normal;
		font-weight: bold;
	};
`

export default H2