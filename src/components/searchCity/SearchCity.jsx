import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import InputWithSuggestions from "../form/inputWithSuggestions/InputWithSuggestions"

export default function SearchCity() {
  const [searchText, setSearchText] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const router = useRouter()
  
  const fetchCityList = async () => {
    const CITIES_LIMIT = 5
    const response = await fetch(`/api/openweathermap?url=geo/1.0/direct?q=${searchText}&limit=${CITIES_LIMIT}`)
    const json = await response.json()
    handleList(json)

    //console.log(`http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=${CITIES_LIMIT}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}`)

    //const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=${CITIES_LIMIT}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}`)

  } 

  const handleList = (list) => {
    //Obs: O map vai converter os dados recebidos em objetos
    const formattedList = list.map((obj) => ({
      text: `${obj.name}, ${obj.state}, ${obj.country}`,
      //onClick: () => console.log(`lat: ${obj.lat}, lon: ${obj.lon}`) 
      //Obs: O código acima ("onClick") foi substituido pelo código abaixo
      onClick: () => router.push(`/info/${obj.lat}/${obj.lon}`)
    }))
    setSuggestions(formattedList)
  }

  useEffect(() => {
    if (searchText.length >= 3) fetchCityList()
    else setSuggestions([])
  }, [searchText])

  return(
    <InputWithSuggestions 
      placeholder="Digite o nome da sua cidade" 
      value={searchText}
      onChange={(event) => setSearchText(event.target.value)}
      suggestions={suggestions}
    />
  )
}