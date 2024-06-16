import styled from "styled-components"

import BackGroundImageWithChildren from "../src/components/layout/backgroundImageWithChildren/BackGroundImageWithChildren"
import Logo from "../src/components/logo/Logo"
import SearchCity from "../src/components/searchCity/SearchCity" 

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
const StyledInput = styled(SearchCity)`
  width: 100%;
  box-sizing: border-box;
`

const InputContainer = styled.div`
  //width: calc(100% + 200px);
  @media (min-width: 750px) {
    width: 150%;
  }
  z-index: 100;
`

export default function HomePage () {
  return (
      <BackGroundImageWithChildren>
        <StyledPageInicial>
          <Logo showImage type='vertical' />
          <InputContainer>
            <StyledInput />
          </InputContainer>
        </StyledPageInicial>
      </BackGroundImageWithChildren>
  )
}