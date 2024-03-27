import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './components/Footer/Footer';
import reportWebVitals from './reportWebVitals';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser,faCircle,faStar,faHeart,faShoppingCart,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './Context/Context';

library.add( faUser,faCircle,faStar,faHeart,faShoppingCart,faArrowRightFromBracket);
AOS.init();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <UserProvider>
    <App/>
    <Footer/>
  </UserProvider>
  </BrowserRouter>
);
reportWebVitals();
