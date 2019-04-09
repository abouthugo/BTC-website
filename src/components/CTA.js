import React from 'react'
import styled from 'styled-components';
import Layout from './Layout';
import Button from './Button';

const BackDrop = styled.section`
  background: #F6F9FC;
  width: 100%;
  padding: 70px 0;
  h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 38px;
    letter-spacing: 0.91px;
    color: #24B47E;
    margin: 6px 0;
  }
  h2 {
    font-weight: normal;
    font-size: 30px;
    line-height: 38px;
    letter-spacing: 0.91px;
    color: #32325D;
    margin: 0;
  }
`

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export default () => (
  <BackDrop>
    <Layout>
      <Wrap>
        <div>
          <h1>Buy Bitcoin with credit card</h1>
          <h2>In just a few easy steps</h2>
        </div>
        <div>
          <Button theme={{bg: "#24B47E"}} style={{marginRight: "30px"}}>CREATE LOGO ACCOUNT</Button>
          <Button>Buy Now</Button>
        </div>
      </Wrap>
    </Layout>
  </BackDrop>
);

