import styled from 'styled-components'

const Alert = styled.div`
  background: rgba(255,255,255, 0.35);
  border-radius: 100px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.55px;
  color: #FFFFFF;
  padding: 5px 22px 5px 5px;
  width: fit-content;

  &::before{
    position: relative;
    content: "NEW";
    background: #28BD84;
    width: fit-content;
    border-radius: 20px;
    margin-right: 10px;
    padding: 0px 7px;
    font-weight: bold;
  }
`

export default Alert;