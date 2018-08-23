import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Header = styled.div`
  background: #FAFBFC;
  box-shadow: 0 0 8px 0 rgba(26,67,106,0.25), 0 32px 32px -32px rgba(26,67,106,0.25);
`

export default () => (
  <Header>
    <h1>Daniel Roeven</h1>
  </Header>
);