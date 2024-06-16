import { useState, useEffect } from "react"

import InputWithSuggestions from "../form/inputWithSuggestions/InputWithSuggestions"

export default function SearchCity() {
  const [searchText, setSearchText] = useState('')
  const [suggestions, setSuggestions] = useState([])
  
  const fetchCityList = async () => {
    const CITIES_LIMIT = 5
    //console.log(`http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=${CITIES_LIMIT}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}`)

    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=${CITIES_LIMIT}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}`)
    const json = await response.json()
    handleList(json)
  } 

  const handleList = (list) => {
    //Obs: O map vai converter os dados recebidos em objetos
    const formattedList = list.map((obj) => ({
      text: `${obj.name}, ${obj.state}, ${obj.country}`,
      onClick: () => console.log(`lat: ${obj.lat}, lon: ${obj.lon}`)
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