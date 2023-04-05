import React from 'react'
import { memo } from 'react'
// import App from '../src/App'
// import './App.css'

const Todos = ({todos, addTodo}) => {
    console.log('child render')
  return (
    <>
        <h2>My todo</h2>
        {todos.map((todo, index) =>{
            return <p key = {index} > {todo} </p>
        })}
        <button onClick={addTodo}>Add Todo</button>
    </>
  )
}

export default memo(Todos)
