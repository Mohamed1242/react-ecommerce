import './SignUp.css'
import axios from 'axios'
import { useContext } from 'react'
import {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { User } from '../../Context/Context'
import Cookies from "universal-cookie";
import Nav from '../Nav/Nav'

const Login=()=>{
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[emailError,setEmailError]=useState("")
const nav =useNavigate()
const cookie=new Cookies()
const user=useContext(User)
    async function Sumbit(e){
        e.preventDefault()

        try{
        
            let res= await axios.post(`http://127.0.0.1:8000/api/login`,{
                    email:email,
                    password:password,
                });
                const token=res.data.data.token
                cookie.set("Bearer",token,{path:"/"})
                const userDetailes=res.data.data.user
            
                user.setAuth({token,userDetailes})
                nav("/Products")
          
        }catch(err){
        setEmailError(err)
        console.log(err)
    }
    }
    
    return(
        <>
        <Nav/>
        <div className='formContainoer'>
            <div className='signUpForm' >
                <form onSubmit={Sumbit} >
                    <label htmlFor='email' >Email:</label>
                    <input 
                    type='email' 
                    id='email' 
                    placeholder='Email...' 
                    required 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    {/* { accept&&emailError===422 ?<p>Email already been taken</p>:""} */}
                    <label htmlFor='password'>Password:</label>
                    <input 
                    id='password' 
                    type='password' 
                    placeholder='Password' 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)
                    }
                    />
                    {/* {accept&& check===false ?<p>wrong email or password</p> :""} */}
                    <button type="submit">LogIn</button>
                    <h5>dont have account
                        <Link to='signup'>Sign up now</Link>
                        </h5>
                </form>
            </div>
        </div>
        </>
    )
}
export default Login;