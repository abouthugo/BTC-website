import React from 'react'
import styled from 'styled-components'


const Tick = styled.div`
  position: relative;
  color: #9A9A9A;
  font-size: 9px;
  font-weight: bold;
  line-height: 11px;
  letter-spacing: 0.222353px;
  text-align: center;
  &&::before{
    position: absolute;
    content: "";
    width: 1px;
    height: 6px;
    background-color: #9A9A9A;
    top: -6px;
    left: 50%;
  }
`
const Wrapper = styled.div`
  margin: 12px auto;
  display: flex;
  justify-content: space-between;
`

export default ({marks}) => {
  return (
    <Wrapper >
      {marks.map(mark => (
        <Tick>{mark.toFixed(2)}</Tick>
      ))}
    </Wrapper>
  )
}