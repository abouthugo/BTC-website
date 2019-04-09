import React, { Component } from 'react'
import styled from 'styled-components';

const SelectBoxArrow = styled.div`
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0;
  display: inline-block;
  position: relative;
  background: #E8F7FE;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: ${props => props.show ? "8px" : "12px"};
    left: 10px;

    width: 0;
    height: 0;

    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-top: 5px solid black;
    transition: all 0.3s;
    transform: ${props => props.show ? "rotate(180deg)": null};
    cursor: pointer;
  }
`;
const ItemGroup = styled.div`
  display: block;
  transform: ${props => props.show ? "scaleY(1)": "scaleY(0)"};
  position: absolute;
  width: 6.4em;
  transition: transform 0.2s;
`;

const Item = styled.div`
  background-color: white;
  width: 100%;
  color: black;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  &:hover{
    background-color: #E8F7FE;
  }
`
const Container = styled.div`
  width: fit-content;
  height: fit-content;
`

const SelectedItem = styled.div`
  display: inline-block;
  background-color: #E8F7FE;
  color: black;
`

const FlexWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: fit-content;
  background-color: #E8F7FE;
  border-radius: 4px;
  padding: 12px 5px;
  cursor: pointer;
`

const Flag = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 5px;
  background: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
`

export default class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      showItems: false,
      selected: null
    }
  }

  componentDidMount() {
    if (this.props.items && this.props.selected) {
      let selected = this.props.items.filter(i => i.id === this.props.selected)[0];
      console.log(selected);
      this.setState({
        items: this.props.items,
        selected
      })
    }
  }

  handleDrop = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }));
  }

  handleSelect = (item) => {
    this.setState({selected: item, showItems: false})
  }

  render() {
    const { items, showItems, selected } = this.state;
    return (
      <Container>
        <FlexWrap onClick={this.handleDrop}>
          {selected && <Flag img={selected.imgURL}/>}
          <SelectedItem>{selected ? selected.value : "Loading..."}</SelectedItem>
          <SelectBoxArrow show={showItems} />
        </FlexWrap>
        <ItemGroup show={showItems}>
          {items.map(item => (
            <Item key={item.id}
              onClick={() => this.handleSelect(item)}
            >{item.value}
            </Item>
          ))}
        </ItemGroup>
      </Container>
    )
  }

}