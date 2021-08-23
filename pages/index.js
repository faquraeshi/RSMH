import { createContext, useContext, useState, memo } from 'react'
import { useQuery } from 'react-query'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <CountryProvider>
      <HomeContent />
    </CountryProvider>
  )
}

const HomeContent = memo(() => {
  return (
    <div className={styles.container}>
      <CountryPicker />
      <CountryDetails />
    </div>
  )
})

const CountryContext = createContext()   // A global context is declared

const CountryProvider = ({children}) => {
  const [country, setCountry] = useState("BD")
  return (
    <CountryContext.Provider value={{country, setCountry}}>
      {children}
    </CountryContext.Provider>
  )
}

const CountryPicker = () => {
  const {country, setCountry} = useContext(CountryContext)
  return (
    <select className={styles.countryOptions} value={country} onChange={e => setCountry(e.target.value)}>
      <option value="BD">Bangladesh</option>
      <option value="SA">Kingdom of Saudi Arabia</option>
    </select>
  )
}

// https://restcountries.eu/rest/v2/alpha/bd

const fetchCountry = async (country) => {
  const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${country}`);
  const data = await response.json();
  return data;
}

const CountryDetails = () => {
  const {country} = useContext(CountryContext)
  const {data, isLoading, error} = useQuery([country], fetchCountry)

  if (isLoading) return <span>loading...</span>
  if (error) return <span>oops! error occurred :(</span>
  return (
    <div>
      <h1>{country}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
