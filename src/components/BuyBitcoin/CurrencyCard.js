import React from 'react'
import styled from 'styled-components'
import SelectBox from './SelectBox';

const Card = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(71, 71, 71, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  margin: 10px 0;
  padding: 13px 11px;
`
const Money = styled.p`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: #010101;
  font-weight: 600;
  margin-left: 11px;
  &::before{
    content: "$";
  }
`
export default ({ amount, items, selected }) => (
  <Card>
    <Money>{amount}</Money>
    <SelectBox  items={items} selected={selected}/>
  </Card>
);