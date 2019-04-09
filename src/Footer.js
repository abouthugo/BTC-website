import React from 'react'
import styled from 'styled-components'
import Layout from './components/Layout';

const Foot = styled.footer`
display: flex;
justify-content: space-between;
  color: #6B7C93;
  padding: 39px 0;
  a {
    color: #6B7C93;
    text-decoration: none;
    margin-left: 34px;
  }
`

export default () => (
  <Layout>
    <Foot>
      © 2018 - All rights reserved
      <span>
      <a href="#">Terms of use</a>
      <a>Privacy Policy</a>
      </span>
    </Foot>
  </Layout>
)