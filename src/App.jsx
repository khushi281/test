import Navbar from "./component/Navbar"
import Form from "./component/Form"
import ListGroup from "./component/ListGroup"


const App = () => {

    
    return(
        <>
            <Navbar />
            <div className="container">
                <Form />
                <ListGroup />
            </div>
       
        </>
    )
}

export default App