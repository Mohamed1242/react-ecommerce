import './App.css';
import Home from './components/Home/Home';
import Products from './components/Products/Products.js'
import { Route, Routes } from 'react-router-dom';
import Login from './components/User/Login.js';
import SignUp from './components/User/SignUp.js';
import PersistLogin from './PersistLogin.js';
import RequireAuth from "./RequireAuth";

function App() {
  
  
  return (
    <Routes>
    <Route path="react-ecommerce"  Component={Home}/>
    <Route element={<PersistLogin/>}>
    <Route element={<RequireAuth/>}>
    <Route path="react-ecommerce/Products" Component={Products}/>
    </Route>
    </Route>
    <Route path='user' Component={Login}/>
    <Route path="user/signup" Component={SignUp}/>
    </Routes>
  );
}

export default App;
