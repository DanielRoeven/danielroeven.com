import React from 'react'
import styled from 'styled-components'

const SkillsCollection = styled.ol`
	list-style-type: none;
	display: flex;
	justify-content: space-between;
`

export default (props) => (
  <SkillsCollection>
  	{props.children}
  </SkillsCollection>
)
