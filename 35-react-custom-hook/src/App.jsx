import React from 'react'
import useFetch from './components/useFetch'

const App = () => {
const [data]= useFetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')

  return (
    <div>
      {
        data.map((e,i) => {
          return <h1 key={i}>{e.firstName}</h1>
        })
      }
    </div>
  )
}

export default App
