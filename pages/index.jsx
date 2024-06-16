import styled from "styled-components"

import BackGroundImageWithChildren from "../src/components/layout/backgroundImageWithChildren/BackGroundImageWithChildren"
import Logo from "../src/components/logo/Logo"
import Input from "../src/components/form/input/Input"

const StyledPageInicial = styled.div`
  background-color: ${props => props.theme.colors.white};
  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
  //Obs: Este box-sizing: border-box, pode ser usado no _app
  //box-sizing: border-box;

  @media (max-width: 500px) {
    min-width: 100%;  
  }
`
export default function HomePage () {
  return (
      <BackGroundImageWithChildren>
        <StyledPageInicial>
          <Logo showImage type='vertical' />
          <Input type="text" placeholder="Digite o nome da sua cidade" />
        </StyledPageInicial>
      </BackGroundImageWithChildren>
  )
}