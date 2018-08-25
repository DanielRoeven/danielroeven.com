import React from 'react'
import styled from 'styled-components'

const EducationItem = styled.div`
	display: flex;
	flex-flow: row wrap;
	height: 8rem;
	overflow: hidden;
`

const Program = styled.h4`
	font-size: 1.104166667rem;
	font-weight: bold;
	color: hsla(209, 61%, 26%, 1);
	padding: 1.6rem 0 0 0;
	line-height: 2rem;
	width: 26rem;
	margin: 0 1rem -.6rem 0;
`

const Time = styled.span`
	font-size: 0.855943153rem;
	font-weight: normal;
	color: hsla(209, 61%, 26%, 1);
	text-transform: uppercase;
	padding: 1.7rem 0 0 0;
	line-height: 2rem;
	width: 11.5rem;
	text-align: right;
	letter-spacing: 0.025rem;
	margin: 0 0 -.7rem 0;
`

const Description = styled.span`
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

export default (props) => (
  <EducationItem>
  	<Program>{props.program}</Program>
  	<Time>{props.time}</Time>
  	<Description>{props.uni}</Description>
  	<Description>{props.place}</Description>
  </EducationItem>
)
