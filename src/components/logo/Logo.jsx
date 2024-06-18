import styled from "styled-components"

const Img = styled.img`
max-width: 250px;
width: 70%;
@media (max-width: 500px) {
  max-width: 200px;
}
`

const VerticalText = styled.h1`
  font-size: 80px;
  color: ${props => props.theme.colors.back};
  line-height: 70px;
  //Obs: Foi utilizado margin para posicionar o texto e a imagem
  margin-left: 150px;
  margin-top: -80px;
`

const HorizontalText = styled.h1`
  font-size: 80px;
`

const PrimaryColor = styled.span`
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
`

export default function Logo({ showImage, type }) {
  return (
    <div>
      {showImage && <Img src='/woman.svg' />}  
      {type === 'vertical' && 
        <VerticalText>
          Clima<br/><PrimaryColor>Dev</PrimaryColor>
        </VerticalText>
      }

      {type === 'horizontal' && 
        <HorizontalText>
          Clima<PrimaryColor>Dev</PrimaryColor>
        </HorizontalText>

      }
    </div>
  )
}

Logo.defaultProps = {
  type:'horizontal'
}
