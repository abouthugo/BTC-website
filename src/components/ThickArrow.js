import styled from 'styled-components'

const ThickArrow = styled.div`
  margin-left: 10px;
  display: inline-block;
  position: relative;
  top: -5px;
  left: 0;
  
  width: 8px;
  height: 2px;
  background: #24B47E;
  border-radius: 10px;
  transform: scale(1);
  &::before, &::after {
    content: "";
    position: absolute;
    width: 85%;
    height: 100%;
    background: #24B47E;
    left: 39.5%;
    border-radius: 9px;
  }
  &::before {
     top: -90%;
     transform: rotate(45deg);
  }
  
  &::after {
    bottom: -90%;
    transform: rotate(135deg);
  }

`

export default ThickArrow;