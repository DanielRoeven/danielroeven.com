import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import prims from '../../Primitives'

const Header = styled.div`
  position: fixed;
  z-index: 9999;

  display: flex;
  height: 5rem;
  justify-content: center;
  width: 100vw;
  
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
`

const Nav = styled.nav`
  ol {
    display: flex;
    margin: .9rem 0 0 1rem;

    list-style: none;
  }

  li {
    height: 3rem;
    padding: 0 .5rem;

    &:last-child {
      margin: 0 -.5rem 0 0;
    };
  }

  a {
    color: ${prims.colors.blue.dark.opaque};

    font-size: ${prims.fontsize.m};
    font-weight: bold;
    line-height: 3rem;
    text-transform: lowercase;
  }
`

export default () => (
  <Header>
    <Container>
      <H1>Daniel Roeven</H1>
      <Nav>
        <ol>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>Case Studies</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ol>
      </Nav>
    </Container>
  </Header>
);