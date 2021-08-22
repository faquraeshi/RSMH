import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <CountryPicker />
      <CountryDetails />
    </div>
  )
}


const CountryPicker = () => {
  const [country, setCountry] = useState("KSA")
  return (
    <select value={country} onChange={e => setCountry(e.target.value)}>
      <option value="BD">Bangladesh</option>
      <option value="KSA">Kingdom of Saudi Arabia</option>
    </select>
  )
}

const CountryDetails = () => {
  return <h1>Country Details</h1>
}