import React, { useCallback, useState } from 'react'
import Todos from '../component/Todos'
import './App.css'
const App = () => {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  const increment = () => {
    setCount((c) => c + 1)
  }

  // const addTodo = () => {
  // }
  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, 'new Entry'])
  }, [todos])
  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div> 
    </>
  )
}

export default App
