import React from 'react'
import styled from 'styled-components';
import SlickArrow from './SlickArrow'

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
`

export default () => (
  <Nav>
    <a href="/">Changelly</a>
    <a href="/">Sign in <SlickArrow/> </a>
  </Nav>
)