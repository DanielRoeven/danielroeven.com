import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Header = styled.div`
  background: rgba(250,251,252, 0.8);
  box-shadow: 0 0 8px 0 rgba(26,67,106,0.25), 0 32px 32px -32px rgba(26,67,106,0.25);
  height: 5rem;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(8px);
  width: 100vw;
  position: fixed;
  z-index: 9999;
`

const Container = styled.div`
  width: 80rem;
  display: flex;
  justify-content: space-between;
`

const H1 = styled.h1`
  color: hsla(209, 61%, 26%, 1);
  margin: .9rem 0 0;
  font-size: 1.65625rem;
  line-height: 3rem;
  height: 3rem;
`

const Nav = styled.nav`
  ol {
    display: flex;
    list-style: none;
  }

  li {
    margin: .9rem 0 0 1rem;
    height: 3rem;
  }

  a {
    color: hsla(209, 61%, 26%, 1);
    font-weight: bold;
    font-size: 1.65625rem;
    line-height: 3rem;
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