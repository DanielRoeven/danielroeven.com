import React from 'react'
import styled from 'styled-components'

const H2 = styled.div`
	padding: .7rem 0 .3rem;
	line-height: 6rem;
	font-weight: bold;
	font-size: 3.4375rem;
	color: hsla(209, 61%, 26%, 1);
`

export default (props) => (
  <H2>
  	{props.children}
  </H2>
)
