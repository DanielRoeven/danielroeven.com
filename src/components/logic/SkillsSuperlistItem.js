import React from 'react'
import styled from 'styled-components'

const SkillsSuperlistItem = styled.li`
	width: 19.25rem;
`

import H5 from '../style/H5.js'

const Skill = styled.li`
	font-size: 1.104166667rem;
	color: hsla(209, 61%, 26%, 1);
	padding: .6rem 0 0 0;
	margin: 0 0 -.6rem 0;
	line-height: 2rem;
	width: 100%;

	&:last-child {
		padding: .6rem 0 1rem 0;
	}
`

const SkillsList = styled.ol`
	list-style-type: none;
`

function makeSkillsListFor(skills) {
	const skillItems = skills.map((skill) => <Skill key={skill}>{skill}</Skill>)
	return (<SkillsList>{skillItems}</SkillsList>)
}

export default (props) => (
  <SkillsSuperlistItem>
  	<H5>{props.category}</H5>
  	{makeSkillsListFor(props.skills)}
  </SkillsSuperlistItem>
)
