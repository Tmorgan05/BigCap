import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

function Login({token, setToken}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(true)
    const navigate = useNavigate();

    const handleSubmit = async (event) =>{
        event.preventDefault()
        console.log("username", username, password)
        const response = await fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify({
                username,
                password,
            })
        })
        console.log(response)
        
        if (response.ok) {
         const data=await response.json()
         console.log(data)   
         setToken(data.token)
        navigate("/products")
            
        } else {
            console.log("what's going on")
            setSuccess(false)
        
        }
        

    }
    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    return (
        
        <div>
            Welcom to the Fake Store Login Page
        <form id="login-form" onSubmit={handleSubmit}>
            <input placeholder="login" class="input" onChange={handleUsernameChange}></input>
            <i className='bx bx-hide eye-icon'></i>
            <input type="password" placeholder="Password" className="password" onChange={handlePasswordChange}></input>
            <div className="field button-field"></div>
            <button>Login</button>
            </form>

            {!success ?<div>
                <p>Unable to authenticate</p><button onClick={()=>{navigate ("/products")}}>View products</button>

                </div>:<p></p>}

        </div>

    )};
    export default Login



            // <section class="container forms">
            //     <div class="form login">
            //         <div class="form-content">
            //             <header>Login</header>
            //             <form action="#"></form>
            //                <div> class="field input-field
            //                 <input type="email" placeholder="Email" class="input"></input>
            //                     <i class='bx bx-hide eye-icon'></i>
            //                 </div>

            //                 <div> class="field input-field"
            //                 <input type="password" placeholder="Password" class="password"></input>

            //                 </div>

            //                 <div class="form-link">
            //                     <a href="#" class="forgot-pass">Forgot Password?</a>
            //                  </div>

            //                 <div> class="field button-field"
            //                 <button>Login</button>
            //                 </div>

            //                 <div class="form-link">
            //                     <span>Already have an account? <a href="#" class="signup-link">Signup</a></span>
            //                  </div>

            //         </div>
            //         <div class="line"></div>
            //     </div>
            // </section> 

    
 

