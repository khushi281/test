import { createContext , useState } from "react";

const TodoContext = createContext()

export const TodoProvider = ({children}) => {

    // Read Todo

    const [todos , setTodos] = useState([{id:1 , text:"something"}])


    // Delete Todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    // Create Todo 

      const submitTodo = (text) => {
        const newTodo ={
            id : crypto.randomUUID(),
            text : text,
        }
        setTodos([newTodo, ...todos])
    }
    
    // Edit Todo

    const [edit, setEdit] = useState({todo:{} , isEdit:false})

    const editTodo = (todo) => {
       setEdit({
            todo : todo,
            isEdit:true
        })
    }

    // Update Todo

    const updateTodo = (oldId , newText) => {
        setTodos(todos.map(todo => todo.id === oldId ? {...todo , text :newText } : todo))
        setEdit({todo:{},isEdit:false})
    }

    
    return(
    <TodoContext.Provider value={{todos ,edit, deleteTodo , submitTodo , editTodo , updateTodo}}>
        {children}

    </TodoContext.Provider>
    )
}

export default TodoContext 

