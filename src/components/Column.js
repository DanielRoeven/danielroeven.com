import React from 'react'
import styled from 'styled-components'

const Column = styled.div`
width: 39.5rem;
`

export default (props) => (
  <Column>
  	{props.children}
  </Column>
)
