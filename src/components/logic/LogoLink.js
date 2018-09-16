import React from 'react'
import styled from 'styled-components'

import RCSWLogoImg from '../img/logos/rcsw.png'

const LogoLink = styled.a`
  filter: grayscale(1);
  transition: filter .2s ease-in-out !important;
  background: none !important;
  margin: 0 !important;
  padding: 0 !important;

  &:hover {
    filter: grayscale(0);
  }
`
const RCSWLogo = styled.img`
  margin: 1rem 0 -1.8rem 0;
  width: 26rem;
  height: 6rem;
  object-fit: contain;
  object-position: left;
`
export default (props) => (
  <LogoLink href={props.href} target="_blank">
  	<RCSWLogo src={RCSWLogoImg} alt="Logo of Radboud Center for Social Sciences"/>
  </LogoLink>
)
