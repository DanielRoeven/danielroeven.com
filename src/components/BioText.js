import React from 'react'
import styled from 'styled-components'

const BioText = styled.p`
	line-height: 3rem;
	font-size: 1.65625rem;
	color: hsla(209, 61%, 26%, 1);
	padding: 1.85rem 0 1.15rem 0;
	
	emph {
		font-weight: bold;
		color: hsla(209, 65%, 52%, 1);
	}
`

export default (props) => (
  <BioText>
  	{props.children}
  </BioText>
)
