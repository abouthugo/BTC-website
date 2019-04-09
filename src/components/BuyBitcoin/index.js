import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from './Slider'
import Picker from './Picker';
import Button from '../Button'
import CurrencyCard from './CurrencyCard';

const values = [0.01, 0.15, 0.25, 0.35, 0.45, 0.60, 0.80, 0.93, 1.00, 1.15, 1.15];
const Card = styled.div`
  width: 80%;
  background: white;
  justify-self: flex-end;
  border-radius: 4px;
  padding: 44px 0;
`;

const Constraint = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 50px;
  color: #9B9B9B;
`

const Dot = styled.div`
    width: ${props => props.active? "7px":"5px"};
    height: ${props => props.active? "7px":"5px"};
    background: ${props => props.active? "#73D07D":"#D1D1D1"};
    margin: ${props => props.active ? "5px 4px": "0 5px"};
    border-radius: 50%;
`

const DotGroup = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-right: 18px;
`

const Wrap = styled.div`
  display: flex;
  align-items: center;
`
export default class BuyBitcoin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      current: "US",
      amount: 200,
      options: ["USD", "EUR"],
      countries : [
        {value: "USD", id: "US", imgURL: "https://www.countryflags.io/us/flat/64.png"},
        {value: "EUR", id: "EU", imgURL: "https://www.countryflags.io/eu/flat/64.png"},
        {value: "GBP", id: 'GB', imgURL: "https://www.countryflags.io/gb/flat/64.png"}
      ],
      crypto: [
        {value: "BTC", id: "BTC", imgURL:"https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"}
      ]
    }
  }

  handleCurrencyChange = ({ target }) => {
    this.setState({
      current: target.value
    });
  }

  render() {
    const { amount, current, countries, crypto } = this.state;
    return (
      <Card>
        <Constraint>
          <Slider />
          <Picker marks={values} />
          <CurrencyCard amount={amount} items={countries} selected={current} />
          <Wrap>
            <DotGroup>
              <Dot/>
              <Dot active/>
              <Dot/>
            </DotGroup>
            <p style={{color: "#9B9B9B", fontWeight: "600"}}>For <span style={{ color: "black" }}>200 USD</span> you will get <span style={{ color: "black" }}>0.75454 Bitcoin</span></p>
          </Wrap>
          <CurrencyCard amount={0.75454} items={crypto} selected={crypto[0].id} />
          <Button theme={{ bg: "#99D979", main: "white" }} width="100%" style={{marginTop: "23px"}}>Continue</Button>
        </Constraint>
      </Card>
    )
  }

}