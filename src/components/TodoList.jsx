import React from 'react'
import TodoCard from './TodoCard';

export default function TodoList(props) {
  // Only need todos here, other props used in Card
  const {todos} = props; 

  return (
    <ul class="main">
      {todos.map((todo, todoIndex)=>{
        return (
          // Sending all props and index as additional prop to Card
          <TodoCard {...props} index={todoIndex} key={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
