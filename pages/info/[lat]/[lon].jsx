import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import styled from "styled-components"

import Navbar from "../../../src/components/navbar/Navbar"
import Container from "../../../src/components/layout/container/Container"
import ClimaCard from "../../../src/components/climaCard/ClimaCard"
import Footer from "../../../src/components/footer/Footer"
import Loading from "../../../src/components/loading/Loading"



const Body = styled.div`
  background-color: ${props => props.theme.colors.gray};
  min-height: calc(100vh - 200px);
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

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`

export default function InfoPage() {

  const [currentInfo, setCurrentInfo] = useState()
  const [futureInfo, setFutureInfo] = useState()
  const [loading, setLoading] = useState(false)
  const getRouter = useRouter()
  //Obs: Simplificando Router com destructor
  /*getRouter.query.lat
    getRouter.query.lon*/
    
  const { lat, lon } = getRouter.query

  const fetchCurrentInfo = async () => {
    //1 - `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}&units=metric&lang=pt_br`
    
    //2 - `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}&units=metric&lang=pt_br`
    
    setLoading(true)
    const response = await fetch(`/api/openweathermap?url=/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br`)
    const json = await response.json()
    setCurrentInfo(json)
  }
  
  const fetchFutureInfo = async () => {
    const response = await fetch(`/api/openweathermap?url=/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=pt_br`)
    const json = await response.json()
    setFutureInfo(json)
  }

  useEffect(() => {
    if (lat && lon) {
      fetchCurrentInfo()
      fetchFutureInfo()
    }     
  }, [lat, lon])

  //if (!currentInfo) return <div>Carregando...teste</div>

  return (
    <>
      <Navbar /> 
      <Body>
        <Container>
          <Content>
            <Loading loading={loading} />
            <Text>Previsão do tempo para</Text>
            <CityName>{currentInfo?.name}, {currentInfo?.sys.country}</CityName>
          </Content>
          <InfoContainer>
            <ClimaCard
              title="Agora" 
              icon={currentInfo?.weather[0].icon}
              description={currentInfo?.weather[0].description}
              temp={currentInfo?.main.temp}
              feels={currentInfo?.main.feels_like}
              min={currentInfo?.main.temp_min}
              max={currentInfo?.main.temp_max}
            />
            <ClimaCard
              title="Próximas 3 horas" 
              icon={futureInfo?.list[0].weather[0].icon}
              description={futureInfo?.list[0].weather[0].description}
              temp={futureInfo?.list[0].main.temp}
              feels={futureInfo?.list[0].main.feels_like}
              min={futureInfo?.list[0].main.temp_min}
              max={futureInfo?.list[0].main.temp_max}
            />

            <ClimaCard
              title="Próximas 6 horas" 
              icon={futureInfo?.list[1].weather[0].icon}
              description={futureInfo?.list[1].weather[0].description}
              temp={futureInfo?.list[1].main.temp}
              feels={futureInfo?.list[1].main.feels_like}
              min={futureInfo?.list[1].main.temp_min}
              max={futureInfo?.list[1].main.temp_max}
            />  
          </InfoContainer>
        </Container>   
      </Body>
      <Footer />
    </>
  )
}