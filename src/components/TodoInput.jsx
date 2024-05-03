import React, { useState } from 'react'

export default function TodoInput(props) {
  
  const {handleAddTodos, todoValue, setTodoValue} = props       //Passing function as props 
  
  return (
    <header>
      <input value={todoValue} onChange={(e) => {
        setTodoValue(e.target.value)  //Setting input value on typing
      }} placeholder="Enter todo..."></input>
      <button onClick={() => {
        handleAddTodos(todoValue)     //Calling the add function on click of add button
        setTodoValue('')              //Resetting input field to empty   
      }}>Add</button> 
    </header>
  )
}
