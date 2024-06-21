import styled from "styled-components";

const StyledLoaging = styled.text`
  font-size: 30px;
  font-weight: 700;
  font-family: 'Roboto';
`

export default function Loading( {loading} ) {
  return (
    <StyledLoaging >
      {!loading && <p>Carregando...</p>}    
    </StyledLoaging>
  )
}
