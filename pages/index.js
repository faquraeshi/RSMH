import { createContext, useContext, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <CountryProvider>
      <HomeContent />
    </CountryProvider>
  )
}

const HomeContent = () => {
  
  return (
    <div className={styles.container}>
      <CountryPicker />
      <CountryDetails />
    </div>
  )
}

const CountryContext = createContext()   // A global context is declared

const CountryProvider = ({children}) => {
  const [country, setCountry] = useState("KSA")

  return (
    <CountryContext.Provider value={{country, setCountry}}>
      {children}
    </CountryContext.Provider>
  )
}

const CountryPicker = () => {
  const {country, setCountry} = useContext(CountryContext)

  return (
    <select value={country} onChange={e => setCountry(e.target.value)}>
      <option value="BD">Bangladesh</option>
      <option value="KSA">Kingdom of Saudi Arabia</option>
    </select>
  )
}

const CountryDetails = () => {
  const {country} = useContext(CountryContext)

  return (
    <h1>{country}</h1>
  )
}