import styled from "styled-components"

import Navibar from "../../../src/components/navbar/Navbar"
import Container from "../../../src/components/layout/container/Container"

const Body = styled.div`
  background-color: ${props => props.theme.colors.gray};
  min-height: 100vh;
`

export default function InfoPage() {
  return (
    <>
      <Navibar /> 
      <Body>
        <Container>
          conteúdo
        </Container>   
      </Body>
    </>
  )
}