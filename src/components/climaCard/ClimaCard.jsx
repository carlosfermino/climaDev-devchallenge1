import styled from "styled-components";

const StyledClimaCard = styled.div`
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 350px;
  padding: 15px;
  box-sizing: border-box;
`

const Title = styled.h6`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  margin: 0;
  padding: 0;
`

const BasicInfo = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const BasicInfoImg = styled.img`
  width: 100px;
  height: 100px;
`

const BasicInfoText = styled.div`
  flex: 1;
  text-align: center;
`
//Obs: Duas formas de css com "div e P"
/*const InfoLine = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 0 15px;
`

const InfoText = styled.p`

`

const InfoTemperature = styled.p`
  font-weight: 700;
`*/
//Obs: Duas formas de css com " P e SPAN"
const InfoLine = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 0 15px;
`

const InfoTemperature = styled.span`
  font-weight: 700;

  ${props => props.blue && 'color: #00C9F5;'}
  ${props => props.red && 'color: #FF0000'}
`

export default function ClimaCard({
  title, icon, description, temp, feels, min, max
}) {

  return (
    <StyledClimaCard>
      <Title>{title}</Title>
      <BasicInfo>
        <BasicInfoImg src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        <BasicInfoText>{description}</BasicInfoText>
      </BasicInfo>
      <InfoLine>
        Temperatura<InfoTemperature>{temp}ºC</InfoTemperature>
      </InfoLine>
      <InfoLine>
        Sensação<InfoTemperature>{feels}ºC</InfoTemperature>
      </InfoLine>
      <InfoLine>
        Minima<InfoTemperature blue={true}>{min}ºC</InfoTemperature>
      </InfoLine>
      <InfoLine>
        Maxima<InfoTemperature red>{max}ºC</InfoTemperature>
      </InfoLine>
    </StyledClimaCard>  
  )
}