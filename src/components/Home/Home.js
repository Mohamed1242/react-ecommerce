import {useEffect} from 'react';
import './Home.css';
import logo from '../../assets/images/pngwi2ng.com.png'
import group3 from '../../assets/images/kjg.png'
import creapure from '../../assets/images/hn.png'
import creoganic from '../../assets/images/pngwing.com.png'
import iso from '../../assets/images/pngwing.com (3).png'
import massGanic from '../../assets/images/pngwing.com (1).png'
import reel from '../../assets/images/Cleanse and detox _ Supplement _ Commercial 3D Animation(1080P_HD).mp4'
import creatine from '../../assets/images/pngwing.com (1).png'
import key1 from '../../assets/images/key1.png'
import key2 from '../../assets/images/key2.png'
import key3 from '../../assets/images/key3.png'
import key4 from '../../assets/images/key4.png'
import isoganic from '../../assets/images/pngwing.com (2).png'
import wheyganic from '../../assets/images/pngwing.com (2).png'
import choclate from '../../assets/images/choclatekey.png'
import milk from '../../assets/images/milkkey.png'
import vanillastick from '../../assets/images/vanillastickkey.png'
import vanillamilk from '../../assets/images/vanillamilk.png'
import vanillalogo from '../../assets/images/vanillakey.png'
import nutellalogo from '../../assets/images/nutellalogo.png'
import flavorplate from '../../assets/images/flavorplatekey.png'
import choclatenutella from '../../assets/images/choclatenutellakey.png'
import purepower from '../../assets/images/pngwing.com (1).png'
import Nav from'../Nav/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink,useLocation } from "react-router-dom";


const Home=()=> {
  
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top when the location changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <main>
      
    <section className='homeSection'>

      <Nav/>
      <img className='logo2' src={logo} alt='' loading="lazy"></img>
    <div className='logos' data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1200">
      <img className='logo1' src={logo} alt='' loading="lazy"></img>
    </div  >
    <div  className='groupsection' data-aos="zoom-in"
    data-aos-easing="linear"
    data-aos-duration="1200">
    <img className='groupimg' src={group3} alt='' loading="lazy"></img>
    </div>
    <div  className='creapuresection' data-aos="zoom-in-up"
    data-aos-easing="linear"
    data-aos-duration="1100">
    <img className='groupimg' src={creapure} alt='' loading="lazy"></img>
    </div>
    </section>
    <section className='exploreSection'>
    <div>
    <h1 data-aos="fade-right"
    data-aos-duration="1300" >Explore our feature products</h1>
    <hr></hr>
    </div>
    <div  className='symboles'>
      <div className='symbol1 symbol'>
        <div>
          <h5><FontAwesomeIcon className="icon" icon="circle" /></h5>
          <img src={logo} alt='' loading="lazy"></img>
        </div>
        <div className='information'>
          <h3 data-aos="fade-right"
    data-aos-easing="linear"
    data-aos-duration="800">CREA Ganic</h3>
          <h3 data-aos="fade-left"
    data-aos-easing="linear"
    data-aos-duration="800">1,300 L.E</h3>
        </div>
        <section>
        <h4 data-aos="fade-right"
    data-aos-easing="linear"
    data-aos-duration="1200"><FontAwesomeIcon className="icon" icon="star" /></h4>
        <h4 data-aos="fade-right"
    data-aos-easing="linear"
    data-aos-duration="1000"><FontAwesomeIcon className="icon" icon="star" /></h4>
        <h4 data-aos="fade-right"
    data-aos-easing="linear"
    data-aos-duration="800"><FontAwesomeIcon className="icon" icon="star" /></h4>
        <h4 data-aos="fade-right"
    data-aos-easing="linear"
    data-aos-duration="600"><FontAwesomeIcon className="icon" icon="star" /></h4>
        <h4 data-aos="fade-right"
    data-aos-easing="linear"
    data-aos-duration="400"><FontAwesomeIcon className="icon" icon="star" /></h4>
        </section>
        <section className='img'>
        <img data-aos="zoom-in-up"
    data-aos-easing="linear"
    data-aos-duration="1100" src={creoganic} alt='' loading="lazy"></img>
        </section>
      </div>
      <div className='symbol symbol2'>
      <div>
          <h5><FontAwesomeIcon className="icon" icon="circle" /></h5>
          <img  src={logo} alt='' loading="lazy"></img>
        </div>
        <div className='information'>
          <h3 data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="800">ISO GANIC</h3>
          <h3 data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="800">1,600 L.E</h3>
        </div>
        <section>
        <h4 data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="1200"><FontAwesomeIcon className="icon" icon="star" /></h4>
        <h4 data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="1000"><FontAwesomeIcon className="icon" icon="star" /></h4>
        <h4 data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="800"><FontAwesomeIcon className="icon" icon="star" /></h4>
        <h4 data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="600"><FontAwesomeIcon className="icon" icon="star" /></h4>
        <h4 data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="400"><FontAwesomeIcon className="icon" icon="star" /></h4>
        </section>
        <section className='img'>
        <img data-aos="zoom-in-down"
    data-aos-easing="linear"
    data-aos-duration="1100" src={iso} alt='' loading="lazy"></img>
        </section>
      </div>
      <div className='symbol symbol3'>
      <div>
          <h5><FontAwesomeIcon className="icon" icon="circle" /></h5>
          <img src={logo} alt='' loading="lazy"></img>
        </div>
        <div className='information'>
          <h3 data-aos="fade-right"
    data-aos-easing="linear"
    data-aos-duration="800">MASS GANIC </h3>
          <h3 data-aos="fade-left"
    data-aos-easing="linear"
    data-aos-duration="800">1,300 L.E</h3>
        </div>
        <section>
        <h4 data-aos="fade-left"
    data-aos-easing="linear"
    data-aos-duration="400"><FontAwesomeIcon className="icon" icon="star" /></h4>
        <h4 data-aos="fade-left"
    data-aos-easing="linear"
    data-aos-duration="600"><FontAwesomeIcon className="icon" icon="star" /></h4>
        <h4 data-aos="fade-left"
    data-aos-easing="linear"
    data-aos-duration="800"><FontAwesomeIcon className="icon" icon="star" /></h4>
        <h4 data-aos="fade-left"
    data-aos-easing="linear"
    data-aos-duration="1000"><FontAwesomeIcon className="icon" icon="star" /></h4>
        <h4 data-aos="fade-left"
    data-aos-easing="linear"
    data-aos-duration="1200"><FontAwesomeIcon className="icon" icon="star" /></h4>
        </section>
        <section className='img'>
        <img data-aos="zoom-in-up"
    data-aos-easing="linear"
    data-aos-duration="1100" src={massGanic} alt='' loading="lazy"></img>
        </section>
      </div>
    </div>
    </section>
    <section className='videoSection'>
    <video controls>
        <source src={reel} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </section>
    <section className='animation'>
      <div>
      <h1>feel the energy through OUR supplement products with power breeze
    </h1>
    <h2 data-aos="fade-right"
    data-aos-duration="1300" >EXPLORE OUR NEW SPECIAL</h2>
    <hr></hr>
      </div>
      <div className='flavorAnimation'>
        <img className='creatine' src={creatine} alt='' loading="lazy"></img>
        <img data-aos="fade-left"
    data-aos-duration="1600" className='key1' src={key1} alt='' loading="lazy"></img>
        <img data-aos="fade-right"
    data-aos-duration="1600" className='key2' src={key2} alt=''loading="lazy" ></img>
        <img data-aos="fade-right"
    data-aos-duration="1000" className='key3' src={key3} alt='' loading="lazy"></img>
        <img data-aos="fade-left"
    data-aos-duration="1000" className='key4' src={key4} alt='' loading="lazy"></img>
    <h1>Creatine hcl</h1>
      </div>
      <div className='flavorAnimation'>
        <img className='isoganic' src={isoganic} alt='' loading="lazy"></img>
        <img className='wheyganic' src={wheyganic} alt='' loading="lazy"></img>
        <img data-aos="fade-up"
    data-aos-duration="2000" className='choclatekey' src={choclate} alt='' loading="lazy"></img>
        <img data-aos="fade-up"
    data-aos-duration="2000" className='milkkey' src={milk} alt='' loading="lazy"></img>
        <h1>MORE FLAVORES</h1>
      </div>
      <div className='flavorAnimation'>
        <img className='isoganic' src={isoganic} alt='' loading="lazy"></img>
        <img className='wheyganic' src={wheyganic} alt='' loading="lazy"></img>
        <img className='nutellalogo' src={vanillalogo} alt='' loading="lazy"></img>
        <img data-aos="fade-up" data-aos-duration="1600" className='choclatekey' src={milk} alt='' loading="lazy"></img>
        <img className='vanillastick' src={vanillastick} alt='' loading="lazy"></img>
        <img data-aos="fade-up"
    data-aos-duration="1600" className='milkchoclate' src={vanillamilk} alt='' loading="lazy"></img>
      </div>
      <div className='flavorAnimation'>
      <img className='isoganic' src={isoganic} alt='' loading="lazy"></img>
      <img data-aos="fade-up"
    data-aos-duration="2000" className='choclatekey' src={choclate} alt='' loading="lazy"></img>
    <img className='nutellalogo' src={nutellalogo} alt='' loading="lazy"></img>
    <img className='vanillastick' src={flavorplate} alt='' loading="lazy"></img>
    <img className='nutellawhey' src={wheyganic} alt='' loading="lazy"></img>
    <img data-aos="fade-down"
    data-aos-duration="2000" className='choclatenutella' src={choclatenutella} alt='' loading="lazy"></img>
      </div>
    </section>
    <section className='exploreSection'>
    <div>
    <h1 data-aos="fade-right"
    data-aos-duration="1300" >PRODUCTS</h1>
    <hr></hr>
    </div>
    <div className='symboles'>
    <div className='card'>
      <img src={purepower} alt='' loading="lazy"></img>
      <h2>PURE POWER - PRE WORKOUT</h2>
      <h3>850 LE</h3>
    </div>
    <div className='card'>
      <img src={wheyganic} alt='' loading="lazy"></img>
      <h2>PURE POWER - PRE WORKOUT</h2>
      <h3>850 LE</h3>
    </div>
    <div className='card'>
      <img src={creatine} alt='' loading="lazy"></img>
      <h2>PURE POWER - PRE WORKOUT</h2>
      <h3>850 LE</h3>
    </div>
    </div>
    <NavLink className="navlink" to="Products" >
    <button>EXPLORE ALL</button>
    </NavLink>
    
    </section>
    </main>
  );
}

export default Home;
