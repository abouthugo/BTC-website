import React from 'react'
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`

export default () => (
  <Nav>
    <a>Changelly</a>
    <a>Sign in</a>
  </Nav>
)