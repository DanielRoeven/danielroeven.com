import React from 'react'
import styled from 'styled-components'
import H5 from '../style/H5'
import TagSmall from '../style/TagSmall'
import PSMall from '../style/PSmall'

const HistoryItem = styled.div`
	display: flex;
	flex-flow: row wrap;
`

export default (props) => (
  <HistoryItem>
  	<H5>{props.title}</H5>
  	<TagSmall>{props.time}</TagSmall>
  	<PSMall>{props.description1}</PSMall>
  	{props.description2 ?
  		(<PSMall>{props.description2}</PSMall>) : null
  	}
  </HistoryItem>
)
