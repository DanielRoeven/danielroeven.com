import React from 'react'
import styled from 'styled-components'
import prims from '../Primitives'
import H5 from '../style/H5.js'

const SkillsSuperlistItem = styled.li`
	width: 19.25rem;
`
const Skill = styled.li`
	padding: .6rem 0 0 0;
	margin: 0 0 -.6rem 0;
	width: 100%;
	
	color: ${prims.colors.blue.dark.opaque};

	font-size: ${prims.fontsize.s};
	line-height: 2rem;

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
