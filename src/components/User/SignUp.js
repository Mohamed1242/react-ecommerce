import './SignUp.css'
import axios from 'axios'
import { useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { User } from '../../Context/Context'
import Nav from '../Nav/Nav'
const SignUp=()=>{
const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[passwordR,setPasswordR]=useState("")
const[emailError,setEmailError]=useState(false)
const[accept,setAccept]=useState(false)
const nav =useNavigate()
const user=useContext(User)
const cookie=new Cookies

    async function Sumbit(e){
        e.preventDefault()
        try{
        
        let res= await axios.post(`http://127.0.0.1:8000/api/register`,{
                name:name,
                email:email,
                password:password,
                password_confirmation:passwordR
            });
            const token=res.data.data.token
            cookie.set("Bearer",token,{path:"/"})
            const userDetailes=res.data.data.user
        
            user.setAuth({token,userDetailes})
            nav("/")
      
    }catch(err){
      if(err.response.status===422){
        setEmailError(true)
      }
      setAccept(true)
    }
    }
    
    return(
        
        <div>
            <Nav/>
        <div className='formContainoer'>
            <div className='signUpForm' >
                <form onSubmit={Sumbit} >
                    <label htmlFor='name'>Name:</label>
                    <input 
                    id='name' 
                    type='text' 
                    placeholder='Name...' 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                    {name.length<=0 &&accept&&<p>Username required</p>}
                    <label htmlFor='email' >Email:</label>
                    <input 
                    type='email' 
                    id='email' 
                    placeholder='Email...' 
                    required 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    {/* { accept&&emailError===true ?<p>Email already been taken</p>:""} */}
                    <label htmlFor='password'>Password:</label>
                    <input 
                    id='password' 
                    type='password' 
                    placeholder='Password' 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)
                    }
                    />
                    {password.length < 8&& accept &&<p>password must be more than 8 char</p>}
                    <label htmlFor='repassword'>Repeat your password:</label>
                    <input 
                    id='repassword' 
                    placeholder='repeat password' 
                    type='password' 
                    value={passwordR}
                    onChange={(e)=>setPasswordR(e.target.value)}
                    />
                    {passwordR !==password && accept && <p>password dosn't match</p>}
                    <button type="submit">SignUp</button>
                </form>
            </div>
        </div>
        </div>

    )
}
export default SignUp;