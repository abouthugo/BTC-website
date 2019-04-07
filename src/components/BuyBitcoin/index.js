import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from './Slider'
import Picker from './Picker';
import Button from '../Button'
import CurrencyCard from './CurrencyCard';

const values = [0.01, 0.15, 0.25, 0.35, 0.45, 0.60, 0.80, 0.93, 1.00, 1.15, 1.15];
const Card = styled.div`
  width: 90%;
  background: white;
  justify-self: flex-end;
  border-radius: 4px;
`;

const Constraint = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 50px;
  color: #9B9B9B;
`
export default class BuyBitcoin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      current: "USD",
      amount: 200,
      options: ["USD", "EUR"],
    }
  }
  
  handleCurrencyChange = ({target}) => {
    this.setState({
      current: target.value
    });
  }

  // TODO: add next flags
  render() {
    const {amount, options, current} = this.state;
    return (
      <Card>
        <Constraint>
          <Slider />
          <Picker marks={values} />
          <CurrencyCard amount={amount} options={options} current={current} onChange={this.handleCurrencyChange}/>
          <Button theme={{ bg: "#99D979", main: "white" }} width="100%">Continue</Button>
        </Constraint>
      </Card>
    )
  }

}