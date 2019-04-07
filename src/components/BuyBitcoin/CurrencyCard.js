import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(71, 71, 71, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  margin: 10px 0;
  padding: 0 11px;
`

const Money = styled.p`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: #010101;
  font-weight: bold;
  &::before{
    content: "$";
  }
`
const SelectWrap = styled.div`
  position: relative;
  width: 50%;
  height: 40px;
  z-index:0;
  &::before{
    content: "";
    position: absolute;
    z-index: 3;
    top: 40%;
    right: 10px;
    border-top: 4px solid black;
    border-bottom: 4px solid transparent;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
  }
`;

// TODO: add flags
const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;

  background: #E8F7FE;
  color: #010101;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.296471px;
  padding: 13px;
  border: none;
`

export default ({ amount, options, current, onChange }) => (
  <Card>
    <Money>{amount}</Money>
    <SelectWrap>
    <Select value={current} onChange={onChange} flag={"heyo"}>
      {options.map(option => (
        <option value={option.toLowerCase().trim()}>{option}</option>
      ))}
    </Select>
    </SelectWrap>
  </Card>
);