import React from 'react'
import styled from 'styled-components'
import prims from '../../Primitives'

import copyrightIcon from '../img/icons/copyright.svg'

const Footer = styled.footer`
  align-items: center;
  align-self: center;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  
  height: 6rem;
  margin-top: -6rem;
  padding: 2.1rem 0 0;
  width: 100vw;
  
  background-image: radial-gradient(ellipse at bottom, ${prims.colors.blue.dark.transparent_xl} 0%, ${prims.colors.blue.dark.transparent_xxl} 45%, transparent 66%);
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 150% 40%;
  `

const FooterText = styled.h6 `
  color: ${prims.colors.blue.gray};
  
  font-size: ${prims.fontsize.s};
  font-weight: normal;
  line-height: 3rem;

  img {
    position: relative;
    top: .35rem;
    
    display: inline-block;

    height: 1.5rem;
    padding: 0 .5rem 0;
    width: 2.5rem;
  }
`

export default () => (
  <Footer>
    <FooterText>Side made by Daniel Roeven with GatsbyJS</FooterText>
  </Footer>
);