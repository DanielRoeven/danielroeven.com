import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import prims from '../../Primitives'

const Header = styled.div`
  position: fixed;
  z-index: 9999;
  transform-style: preserve-3d;
  transform: translateZ(9999rem);

  display: flex;
  height: 5rem;
  justify-content: center;
  width: 100%;
  
  background: ${prims.colors.blue.white.transparent_s};
  box-shadow: ${prims.shadows.xs} ${prims.colors.blue.dark.transparent_l}, ${prims.shadows.l} ${prims.colors.blue.dark.transparent_l};
  backdrop-filter: blur(8px);
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80rem;
`

const H1 = styled.h1`
  height: 3rem;
  margin: .9rem 0 0;
  
  color: ${prims.colors.blue.dark.opaque};

  font-size: ${prims.fontsize.m};
  line-height: 3rem;

  a {
    display: block;

    height: 3rem;
    padding: 0 .3rem;
    margin: 0 -.3rem;

    color: ${prims.colors.blue.dark.opaque};

    background-image: linear-gradient(transparent 1.9rem, ${prims.colors.blue.lighter} 1.9rem, ${prims.colors.blue.lighter} 2.4rem, transparent 2.4rem);
    background-position: left center;
    background-repeat: no-repeat;
    background-size: 0% 100%;

    text-decoration: none;

    transition-property: background-size;
    transition-duration: .5s;
    transition-timing-function: ease;

    &:hover {
      background-size: 100% 100%;
    };
  }
`

const Nav = styled.nav`
  ol {
    display: flex;
    margin: .9rem 0 0 1rem;

    list-style: none;
  }

  li {
    padding: 0 .2rem;

    &:last-child {
      margin: 0 -.5rem 0 0;
    };    
  }

  a {
    display: block;

    height: 3rem;
    padding: 0 .3rem;

    color: ${prims.colors.blue.dark.opaque};

    background-image: linear-gradient(transparent 1.9rem, ${prims.colors.blue.lighter} 1.9rem, ${prims.colors.blue.lighter} 2.4rem, transparent 2.4rem);
    background-position: left center;
    background-repeat: no-repeat;
    background-size: 0% 100%;

    font-size: ${prims.fontsize.m};
    font-weight: bold;
    line-height: 3rem;
    text-decoration: none;
    text-transform: lowercase;

    transition-property: background-size;
    transition-duration: .5s;
    transition-timing-function: ease;

    &:hover {
      background-size: 100% 100%;
    };
  }
`

const linkActiveStyle = {
  backgroundSize: '100% 100%'
}

export default () => (
  <Header>
    <Container>
      <H1><Link to="/">Daniel Roeven</Link></H1>
      <Nav>
        <ol>
          <li>
            <Link to="/about" activeStyle={linkActiveStyle}>About</Link>
          </li>
          <li>
            <Link to="/portfolio" activeStyle={linkActiveStyle}>Portfolio</Link>
          </li>
          <li>
            <Link to="/case-studies" activeStyle={linkActiveStyle}>Case Studies</Link>
          </li>
          <li>
            <Link to="/contact" activeStyle={linkActiveStyle}>Contact</Link>
          </li>
        </ol>
      </Nav>
    </Container>
  </Header>
);