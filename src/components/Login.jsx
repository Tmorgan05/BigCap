import React, {useState} from 'react'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (event) =>{
        event.preventDefault()
        console.log("username", username, password)
        const response = await fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username,
                password,
            })
        })
        console.log(response)
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
        <form id="login-form" onSubmit={handleSubmit}></form>
            <input class="field input-field"></input>
            <input type="email" placeholder="Email" class="input" onChange={handleUsernameChange}></input>
            <i class='bx bx-hide eye-icon'></i>
            <input class="field input-field"></input>
            <input type="password" placeholder="Password" class="password" onChange={handlePasswordChange}></input>
            <div class="field button-field"></div>
            <button>Login</button>

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

    
 

