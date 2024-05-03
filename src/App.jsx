import { useState, useEffect } from "react";     //Importing react hooks
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([])          //Storing and using array of Todo items
  const [todoValue, setTodoValue] = useState('')  //Storing and using input value

  // To persist data in local storage
  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  // To add new Todo item
  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]       // Appending new item
    persistData(newTodoList)
    setTodos(newTodoList)                         // Updating state
  }

  function handleDeleteTodo(index){
    // Item that returns false is filtered out of new array
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })                
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)         // Sets it back to the input value and deletes the original item
    handleDeleteTodo(index)
  }

  useEffect(() => {
    // If localStorage or todos is empty
    if(!localStorage){ 
      return
    }
    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos}/>
    </>
  )
}

export default App
