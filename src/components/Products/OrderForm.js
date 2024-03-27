import { useState } from "react"
import './OrderForm.css'
const OrderForm =({ cart })=>{
const [companyName,setCompanyName]=useState("")
const [streetAddress,setStreetAddress]=useState("")
const [city,setCity]=useState("")
const [phone,setPhone]=useState("")
const [orderNotes,setOrderNotes]=useState("")
const [deliveryDate,setDeliveryDate]=useState("")

    return(
        <div className="orderForm">
            <form>
            <label htmlFor='companyName'>Company Name:</label>
                    <input 
                    id='companyName' 
                    type='text' 
                    value={companyName}
                    onChange={(e)=>setCompanyName(e.target.value)}
                    />
            <label>Street Address:</label>
                    <input
                    id="streetAddress"
                    type="text"
                    value={streetAddress}
                    onChange={(e)=>setStreetAddress(e.target.value)}
                    />
            <label htmlFor="city"> City</label>
                    <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}
                    />
            <label htmlFor="phone">Phone:</label>
                    <input
                    id="phone"
                    type="number"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    />
            <label htmlFor="orderNotes">Order Notes: (optional)</label>
                    <input
                    id="orderNotes"
                    type="text"
                    value={orderNotes}
                    onChange={(e)=>setOrderNotes(e.target.value)}
                    />
            <label htmlFor="deliveryDate">Delivery Date:</label>
                    <input
                    id="deliveryDate"
                    type="date"
                    value={deliveryDate}
                    onChange={(e)=>setDeliveryDate(e.target.value)}
                    />
                        <h4>Total Price: ${cart.reduce((acc, item) => acc + item.description * item.quantity, 0).toFixed(2)}</h4>
                    <button>Confirm Order</button>
            </form>
        </div>
    )
}
export default OrderForm