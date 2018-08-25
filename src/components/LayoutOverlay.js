import React from 'react'
import styled from 'styled-components'

import LayoutImage from './img/layout.png'

const showOverlay = false

const LayoutOverlay = styled.div`
	background-image: url(${showOverlay ? LayoutImage : 0});
	background-size: 80rem;
	background-repeat: repeat-y;
	background-position: center top;
	width: 80rem;
	margin: 0 auto;
`

export default (props) => (
  <LayoutOverlay>
  	{props.children}
  </LayoutOverlay>
)
