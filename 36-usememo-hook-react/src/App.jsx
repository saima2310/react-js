import React, { useMemo, useState } from 'react'
import './App.css'

const App = () => {
  const [myNum, setMyNum] = useState(0)
  const [show, setShow] = useState(false)

  const getValue = () => {
    return setMyNum(myNum + 1)

  }
  const countNumber = (num) => {
    console.log('asdf')
    for (let i = 0; i < 100000000; i++) { }
    return num
  }
  const checkData = useMemo(() => {
    return countNumber(myNum)
  }, [myNum])



  return (
    <div id='root'>
      <button onClick={getValue} style={{ backgroundColor: 'red' }} > counter </button>
      <p>my new number : {checkData}</p>
      <button onClick={() => setShow(!show)} > {show ? 'you clicked me' : 'click me please'} </button>
    </div>
  )
}

export default App
