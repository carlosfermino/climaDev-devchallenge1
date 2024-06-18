import styled from "styled-components"

import Navbar from "../../../src/components/navbar/Navbar"
import Container from "../../../src/components/layout/container/Container"

const Body = styled.div`
  background-color: ${props => props.theme.colors.gray};
  min-height: 100vh;
`

const Content = styled.div`
  padding: 80px 0;
`

const Text = styled.p`
  font-size: 20px;
  padding: 0;
  margin: 0;
`
const CityName = styled.h2`
  font-size: 60px;
  padding: 0;
  margin: 0;
`

export default function InfoPage() {
  return (
    <>
      <Navbar /> 
      <Body>
        <Container>
          <Content>
            <Text>Previsão do tempo para</Text>
            <CityName>Jandira, SP, Brasil</CityName>
          </Content>
        </Container>   
      </Body>
    </>
  )
}