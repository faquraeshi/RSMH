import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [country, setCountry] = useState("KSA") // state is `lifted up` to the parent component
  
  return (
    <div className={styles.container}>
      <CountryPicker country={country} setCountry={setCountry} />
      <CountryDetails country={country} />
    </div>
  )
}


const CountryPicker = ({country, setCountry}) => {
  return (
    <select value={country} onChange={e => setCountry(e.target.value)}>
      <option value="BD">Bangladesh</option>
      <option value="KSA">Kingdom of Saudi Arabia</option>
    </select>
  )
}

const CountryDetails = ({country}) => {
  return <h1>{country}</h1>
}