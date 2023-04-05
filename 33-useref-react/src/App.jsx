import React, { useEffect, useRef, useState } from 'react'

const App = () => {
const [input, setInput] = useState()
// const [counter, setCounter] = useState(0)
// const counter = useRef(0)
const inputFeild = useRef('')

// const formHandler = (event) => {
//   setInput(event.target.value)
// }

const clickHandler = () => {
// inputFeild.current.value = 'asdf;lkjasdfasdf'
console.log(inputFeild.current.value)
}

// useEffect(() => {
//   console.log('rerendered')
//   // counter.current = counter.current + 1
//   prevState.current = input
//   // setCounter(counter + 1)
// },[input])
  return (
    <div>
      <input ref={inputFeild}  />
      {/* <h4>previous state was {prevState.current}</h4> */}
      <button onClick={clickHandler}>Submit</button>
    </div>

  )
}

export default App
