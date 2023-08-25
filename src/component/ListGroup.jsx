import ListItem from "./ListItem"
import { useContext } from "react"
import TodoContext from "../Context/TodoContext"

const ListGroup = () => {

    const {todos} = useContext(TodoContext)
    return(
        <ul className="list-group my-3">
           {
            todos.map((todo) =>  <ListItem key={todo.id} todo={todo} />)
           }
        </ul>
    )
}
export default ListGroup