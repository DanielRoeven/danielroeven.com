import React from 'react'
import styled from 'styled-components'

import CaretIcon from './img/icons/caret.svg'

const TriviaButton = styled.button`
	width: 4rem;
	height: 4rem;
	margin-top: 3rem;
	background-color: transparent;
	border: none;
`

const Previous = styled.img`
	width: 4rem;
	height: 4rem;
	transform: scaleX(-1);
`

const Next = styled.img`
	width: 4rem;
	height: 4rem;
`

function makeButtonFor(type) {
	if (type == 'next')
		return <Next src={CaretIcon}/>
	else if (type == 'previous')
		return <Previous src={CaretIcon}/>
	else
		throw 'Incorrect type defined for trivia button!'
}

export default (props) => (
  <TriviaButton>
  	{makeButtonFor(props.type)}
  </TriviaButton>
)
