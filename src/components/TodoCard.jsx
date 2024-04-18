import React, { Children } from 'react'

export default function TodoCard(props) {
  const {children} = props;
  return (
    <li className="todoItem">
      <div class="actionsContainer">
        {children}
        {/* Paste cdn font awesome edit icon */}
        {/* Paste cdn font awesome delete icon */}
      </div>
    </li>
  )
}
