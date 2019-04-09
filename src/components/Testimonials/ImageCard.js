import React from 'react'
import styled from 'styled-components'


const ImageCard = styled.div`
  display: flex;
  align-items:center;
  background: #FFFFFF;
  box-shadow: 0px 6px 8px rgba(164, 164, 164, 0.213825);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 40px;
  img {
    width: 107px;
    height: 107px;
    border-radius: 50%;
    margin-left: -4.28em;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  h1{
    color: #24B47E;
    font-weight: bold;
    font-size: 17px;
    line-height: 22px;
    letter-spacing: 1.1px;
  }
  p {
    font-weight: normal;
    font-size: 17px;
    line-height: 26px;
    letter-spacing: 0.4px;
    color: #6B7C93;
  }
`


export default ({person}) => (
  <ImageCard>
    <figure>
      <img src={person.img} alt={person.name}/>
    </figure>
    <InfoSection>
      <h1>{person.name}</h1>
      <p>{person.content}</p>
    </InfoSection>
  </ImageCard>
)