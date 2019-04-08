import styled from 'styled-components'

const Layout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  height: ${props => props.full ? "100%": null};
  width: 80%;
  margin: 0 auto;
  padding: 0;
  & * {
    color: white;
  }
`
export default Layout;
