import React from 'react'
import styled from 'styled-components'
import data from './data'
import Icons from './icons'
import ThickArrow from '../ThickArrow';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  div {
    &:nth-child(even) {
      border-left: 2px solid #F6F9FC;
    }
  }
`
const GridItem = styled.div`
  border-bottom: 2px solid #F6F9FC;
`
const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 50%;
  margin: 70px auto;
  h1 {
    font-size: 17px;
    line-height: 22px;
    letter-spacing: 1.55px;
    font-weight: 600;
    color: #24B47E;
  }

  p {
    font-weight: normal;
    font-size: 17px;
    line-height: 26px;
    letter-spacing: 0.4px;
    color: #6B7C93;
  }

  a {
    font-weight: normal;
    font-size: 17px;
    line-height: 22px;
    letter-spacing: 0.5px;
    color: #24B47E;
    text-decoration: none;
  }
`

export default () => (
  <Grid>
    {data.map(feature => {
      let FeatureIcon = Icons[feature.icon];
      return (
        <GridItem>
          <Wrapper>
            <FeatureIcon />
            <h1>{feature.name}</h1>
            <p>{feature.content}</p>
            <a href={feature.link}>Learn More <ThickArrow/></a>
          </Wrapper>
        </GridItem>
      )
    })}
  </Grid>
)