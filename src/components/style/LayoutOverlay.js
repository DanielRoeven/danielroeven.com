import React from 'react'
import styled from 'styled-components'

import LayoutImage from '../img/layout.png'

const showOverlay = 0

const LayoutOverlay = styled.div`
	margin: 0 auto;
	width: 80rem;
	
	background-image: url(${showOverlay ? LayoutImage : 0});
	background-position: center top;
	background-repeat: repeat-y;
	background-size: 80rem;

	@media (max-width: 1200px) {
		width: calc(100vw - 4rem);
		max-width: 80rem;
  	}
`

export default (props) => (
  <LayoutOverlay>
  	{props.children}
  </LayoutOverlay>
)
