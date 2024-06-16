import styled from "styled-components";

const StyledInput = styled.input`
  padding: 20px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.cinza};
  border: 0;
  outline: none;
  color: #9C9C9C;
  font-weight: bold;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  //Obs: Utilizado no input mas não é uma boa pratica.
  //width: 150%;
  //z-index: 100;
`

export default function Input(props) {
  return (
    <StyledInput {...props} />
  )
}