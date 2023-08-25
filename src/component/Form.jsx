import { useContext, useEffect, useState } from "react"
import TodoContext from "../Context/TodoContext"

const Form = () => {

    const {submitTodo, edit , updateTodo} = useContext(TodoContext)

    const [text , setText] = useState("")

    const handleSubmit = (e) => {
       e.preventDefault()
       if(edit.isEdit === true){
        updateTodo(edit.todo.id , text)
    }else{
        submitTodo(text)
    }
        setText("")
    }
    useEffect(()=>{
        setText(edit.todo.text)
    },[edit])

    return(
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter text here..." className="form-control rounded-0 border-dark my-4" required onChange={(e)=> setText(e.target.value)} value={text}></input>
        <button className="btn btn-success rounded-0 w-100">Save</button>
        </form>
       
    )
}

export default Form