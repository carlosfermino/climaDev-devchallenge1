import styled from "styled-components";

import Container from "../layout/container/Container";

const StyledFooter = styled.div`
  background-color: ${props => props.theme.colors.white};
  text-align: center;
  padding: 30px 0;
  font-weight: 400;
  font-size: 20px;
`
export default function Footer() {
  return (
    <StyledFooter>
        Criado por <b>Carlos Fermino</b> durante o <b>DevChallenge01 - SejaDev</b>  
    </StyledFooter>
    
  )
}