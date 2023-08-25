import React, { useContext } from 'react'
import TodoContext from '../Context/TodoContext'

const ListItem = ({todo}) => {

  const {deleteTodo , editTodo} = useContext(TodoContext)


  return (
    <li className="list-group-item">{todo.text}
    <button className="btn btn-danger btn-sm rounded-0 float-end" onClick={()=> deleteTodo(todo.id)}>Delete</button>
    <button className="btn btn-warning rounded-0 btn-sm float-end" onClick={()=> editTodo(todo)}>Edit</button>
    </li>
  )
}

export default ListItem
