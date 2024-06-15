import styled from "styled-components"

import BackGroundImageWithChildren from "../src/components/layout/backgroundImageWithChildren/BackGroundImageWithChildren"

const StyledPageInicial = styled.div`
  background-color: ${props => props.theme.colors.white};
  min-width: 500px;

  @media (max-width: 500px) {
    min-width: 100%;  
  }
`
export default function HomePage () {
  return (
    <BackGroundImageWithChildren>
      <StyledPageInicial>
        Página Inicial
      </StyledPageInicial>
    </BackGroundImageWithChildren>
  )
}