import React, { useEffect, useState } from 'react'
import "./App.css"
import image1 from "./Assets/1.jpeg"
import {person} from "./data"
import DateCount from './Components/DateCount'
import DateList from './DateList'
import DateAction from './DateAction'
const App = () => {
  const [personData, setpersonData] = useState(person)
  const onDelete = () => {
    setpersonData([])
  }
  const showData = () => {
    setpersonData(person)
  }
  useEffect(() => {
    setpersonData([])
  }, [])
  return (
    <div className='font .color-body'>
      <div className='container py-5'>
          <DateCount person={personData}/>
          <DateList person={personData} image1 = {image1}/>
          <DateAction deleteData = {onDelete} showData = {showData}/>
      </div>
    </div>
  )
}

export default App