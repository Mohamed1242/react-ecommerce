import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import LoadingScreen from "./Loading";
import Cookies from "universal-cookie";
import { User } from "./Context/Context";
export default function PersistLogin(){
    const context =useContext(User)
    const token=context.auth.token
    const[Loading,setLoading]=useState(true)
    const cookie=new Cookies()
    const getToken=cookie.get("Bearer")
    useEffect(()=>{

  
    async function refresh(){
        try{
        await axios.post(`http://127.0.0.1:8000/api/refresh`,null,{headers:{
    Authorization:"Bearer " + getToken}})
        .then((data)=>{
        cookie.set("Bearer",data.data.token,{path:"/"})
        context.setAuth((prev)=>{
            return{userDetailes: data.data.user,token:data.data.token}
        })}
        )
        }
        catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }
    !token? refresh():setLoading(false)
},[])
    return Loading?<LoadingScreen/>:<Outlet/>
    
}