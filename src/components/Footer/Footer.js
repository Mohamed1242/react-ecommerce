import React from "react";
import footertop from '../../assets/images/footer.png'
import footerlogo from '../../assets/images/pngwi2ng.com.png'
import visa from '../../assets/images/visa.png'
import mastercard from '../../assets/images/mastercard.png'
import './Footer.css'

class Footer extends React.Component{
    render(){
        return(
            <footer name='contactus'>
                <div className="footer">
            <img className="footertopimg" src={footertop} alt=''></img>
            <section className="footercontent">
                <div className="footercolumn">
                    <img src={footerlogo} alt=""></img>
                </div>
                <div>
                    <h4>Useful links</h4>
                    <p>About Us</p>
                    <p>Contact</p>
                </div>
                <div>
                    <h4>My Account</h4>
                    <p>My Profile</p>
                    <p>Whislist</p>
                    <p>Orders</p>
                    <p>Order Traking</p>
                    <p></p>
                </div>
                <div>
                    <h4>Contact Info</h4>
                    <p>Suez , Cairo , Egypt</p>
                    <p>support@gym-eg.com</p>
                    <p>01010101010</p>
                </div>
            </section>
            <section className="footerend">
                <hr></hr>
                <div className="rights"><p>© 2021 gym . All Rights Reserved To Talbatk.</p></div>
                <div><img src={visa} alt=""></img></div>
                <div><img src={mastercard} alt=""></img></div>
                <div className="message"><button>Message US</button></div>
            </section>
            </div>
            </footer>
        )
    }
}
export default Footer