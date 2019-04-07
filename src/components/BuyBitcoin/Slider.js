import React, {Component} from 'react'
import styled from 'styled-components'


const Input = styled.input`
  -webkit-appearance: none;
  border-radius: 5px;
  height: 10px;
  width: 100%;
  margin: 0 auto;
  background-color: #E1E1E1;
  outline: none;

  &::-webkit-slider-thumb {
     -webkit-appearance: none;
     background: #71D07D;
     width: 23px;
     height: 23px;
     border-radius: 50%;
     box-shadow: 0px 0px 10px rgba(113, 208, 125, 0.453493);
     cursor: pointer;
  }

  &::-webkit-range-thumb {
    -webkit-appearance: none;
    background: #71D07D;
    box-shadow: 0px 0px 10px rgba(113, 208, 125, 0.453493);
    cursor: pointer;
  }
`

export default class Slider extends Component{


  constructor(props){
    super(props);
    this.state = {
      value: 2,
      min: 0,
      max: 10
    }
  }

  handleChange = ({target}) => {
    const {value} = target;
    this.setState({value})
  }

  render(){
    return(
      <Input
        type="range"
        {...this.state}
        onChange={this.handleChange}
      />
    )
  }

}