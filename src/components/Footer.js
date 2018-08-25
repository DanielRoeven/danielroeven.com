import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import copyrightIcon from './img/icons/copyright.svg'

const Footer = styled.footer`
  width: 100vw;
  align-self: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  height: 6rem;
  margin-top: -6rem;
  padding: 2.1rem 0 0;
  background-image: radial-gradient(ellipse at bottom, hsla(209, 61%, 26% ,.25) 0%, hsla(209, 61%, 26% , .05) 45%, transparent 66%);
  background-size: 150% 40%;
  background-position: center bottom;
  background-repeat: no-repeat;
`

const FooterText = styled.h6 `
  font-size: 1.104375rem;
  font-weight: normal;
  color: hsla(209, 21%, 63%, 1);
  line-height: 3rem;

  img {
    width: 2.5rem;
    height: 1.5rem;
    padding: 0 .5rem 0;
    display: inline-block;
    position: relative;
    top: .35rem;
  }
`

export default () => (
  <Footer>
    <FooterText><img src={copyrightIcon}/>Daniel Roeven 2018</FooterText>
  </Footer>
);