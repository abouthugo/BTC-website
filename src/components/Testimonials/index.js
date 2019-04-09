import React from 'react';
import styled from 'styled-components'
import Icons from '../Features/icons';
import ImageCard from './ImageCard';
import testimonies from './testimonies.data'
import Layout from '../Layout'


const Title = styled.h1`
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  line-height: 33px;
  letter-spacing: 2px;
  color: #24B47E;
`
const Paragraph = styled.p`
  text-align: center;
  font-weight: normal;
  font-size: 17px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #6B7C93;
`

const CenteredSection = styled.section`
  width: 50%;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`
const CardGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  padding-top: 40px;
  grid-column-gap: 60px;
  grid-row-gap: 70px;
`
const Lock = Icons['lock'];

export default () => (
  <>
    <CenteredSection>
      <Lock />
      <Title>Trusted by 2 million users</Title>
      <Paragraph>We believe that payments is a problem rooted in code, not finance. We obsessively seek out elegant, composable abstractions that enable robust, scalable, flexible integrations. </Paragraph>
    </CenteredSection>
    <Layout>
      <CardGroup>
        {testimonies.map(person => (
          <ImageCard person={person} />
        ))}
      </CardGroup>
    </Layout>

  </>
)

