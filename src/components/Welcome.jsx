import { Link } from "react-router-dom"

export default function Welcome(){
    return(
        <>
        <h1>Welcome to the Fake Store</h1>
        <Link to="./login">Next page</Link>
        </>
    )
}

