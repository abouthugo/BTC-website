import styled from 'styled-components';

const SlickArrow = styled.div`
  display: inline-block;
  position: relative; 
  top: 0px;
  right: 0 px;
  width: 90px;
  height: 10px;
  margin: 0 -40px;
  background: white;
  transform: scale(0.1);
  
  &::before, &::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 8px;
    background: white;
    left: 50%;
  }
  &::before{
    transform: rotate(45deg);
    top: -140%;
  }
  &::after{
    transform: rotate(135deg);
    bottom: -140%;
  }
`
export default SlickArrow;