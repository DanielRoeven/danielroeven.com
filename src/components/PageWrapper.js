import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
  padding: 10rem 0 0;
  display: flex;
  flex-direction: column;
`

export default (props) => (
  <PageWrapper>
  	{props.children}
  </PageWrapper>
)
