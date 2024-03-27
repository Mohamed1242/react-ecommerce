import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderForm from './OrderForm';
import { useContext } from 'react';
import { User } from '../../Context/Context';
import Nav from '../Nav/Nav';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isDiv1Visible, setIsDiv1Visible] = useState(true);
    const [isDiv2Visible, setIsDiv2Visible] = useState(false);
    const context =useContext(User)
    const token=context.auth.token
    const handleToggleDivs = () => {
      setIsDiv1Visible(!isDiv1Visible);
      setIsDiv2Visible(!isDiv2Visible);
    };


    useEffect(()=>{
      axios
      .get('http://127.0.0.1:8000/api/product/show',{
      headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
      },
  })
      .then((data)=> setProducts(data.data))
      .catch((err)=>console.log(err))
  },[])

    let filteredProducts;
    if (selectedProduct) {
      // If a product is selected, display it first and then other related products
      const relatedProducts = products.filter(
        product =>
          product.category === selectedProduct.category &&
          product.id !== selectedProduct.id
      ).slice(0, 2);
  
      filteredProducts = [selectedProduct, ...relatedProducts];
    } else {
      // If no product is selected, apply category filter (if any) and search filter
      filteredProducts = products
        .filter(product => !selectedCategory || product.category === selectedCategory)
        .filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
  
  
    const handleProductSelect = (product) => {
      setSelectedProduct(product);
      setSelectedCategory(null);
    };
  
    const handleCategoryFilter = (category) => {
      setSelectedCategory(category);
      setSelectedProduct(null); // Reset selected product when a category is selected
    };
    
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
      setSelectedProduct(null);
      setSelectedCategory(null);
    };
  
    const handleAddToCart = () => {
     

        setIsCartOpen(prevState => true);
        if (selectedProduct) {
          const isProductInCart = cart.some(item => item.id === selectedProduct.id);
          
          if (isProductInCart) {
            // If the product is already in the cart, increase its quantity
            const updatedCart = cart.map(item =>
              item.id === selectedProduct.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
              );
              setCart(updatedCart);
            } else {
              // If the product is not in the cart, add it with quantity 1
              setCart(prevCart => [...prevCart, { ...selectedProduct, quantity: 1 }]);
            }
          }
        
      }
        
    const handleBackToProductList = () => {
      setSelectedProduct(null);
    };
  
    const handleToggleCart = () => {
      setIsCartOpen(prevState => !prevState);
    };
  

    
    const handleIncreaseQuantity = (item) => {
        const updatedCart = cart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: (cartItem.quantity ||0) + 1 } : cartItem
        );
        setCart(updatedCart);
      };
    
      const handleDecreaseQuantity = (item) => {
        const updatedCart = cart.map(cartItem =>
          cartItem.id === item.id && (cartItem.quantity || 0) >= 1
            ? { ...cartItem, quantity: (cartItem.quantity || 0) - 1 }
            : cartItem
        ).filter(cartItem => cartItem.quantity !== 0);
        setCart(updatedCart);
        
      };
    const back=()=>{
      if(!isDiv1Visible&&isDiv2Visible&& cart.length===0){
        setIsDiv1Visible(!isDiv1Visible);
        setIsDiv2Visible(!isDiv2Visible);
      }
    }
    back()
    return (
      <>
      <Nav/>
      <div className='productsSection'>
        <div className='productsHeader'>
          <h2>
            Products
          </h2>
          <input
            type="text"
            placeholder='Search...'
            value={searchTerm}
            onChange={handleSearchChange}
            />
          <div>
            <FontAwesomeIcon  className="icon" icon="user" />
            <FontAwesomeIcon className="icon" icon="heart" />
            
{cart.length!==0?<FontAwesomeIcon style={{color:'#549608'}} className="icon" icon="cart-shopping" onClick={handleToggleCart}/>
 :<FontAwesomeIcon  className="icon" icon="cart-shopping" onClick={handleToggleCart}/>}            
          </div>
        </div>
            <hr></hr>
        <div className='productsMain'>
          <div className='productCatigories'>
            <h2>Product catigores</h2>

            <div>
              <p onClick={() => handleCategoryFilter(null)}>All</p>
              <p onClick={() => handleCategoryFilter('electronics')}>Creatine</p>
              <p onClick={() => handleCategoryFilter('jewelery')}>Protien</p>
              <p onClick={() => handleCategoryFilter(`men's clothing`)}>Mass gainer</p>
              <p onClick={() => handleCategoryFilter(`women's clothing`)}>Accessories</p>
            </div>
          </div>
          <div className='productdata'>
        {isCartOpen && (
          <div className="cart-popup">
            <p onClick={handleToggleCart}>X</p>
            <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className='cartContainer'>

          {cart.map(item => (
            <div key={item.id} className='cartItem'>
              <div className='cartItemData'>
                <img src={item.image} alt={item.title}></img>
                <h4>{item.title} - {(item.description*item.quantity).toFixed(2)} L.E</h4>
              </div>
                <div className='cartButtons'>
                  <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                  <span> {item.quantity}</span>
                  <button onClick= {() => handleDecreaseQuantity(item)}>-</button>
                </div>
            </div>
          ))}
                        <h4>Total Price: ${cart.reduce((acc, item) => acc + item.description * item.quantity, 0).toFixed(2)}</h4>

{ isDiv1Visible?<button onClick={handleToggleDivs}> complete order </button>:
<button onClick={handleToggleDivs}> back to products </button>
}

        </div>
      )}
          </div>
        )}
            
            {isDiv1Visible && <div>

            {selectedProduct && (
              <div className='selected'>
                <img src={selectedProduct.image} alt={selectedProduct.title}></img>
                <div className='selectedData'>
                  <h2>{selectedProduct.title}</h2>
                  <p>{selectedProduct.description}</p>
                  <h3>{selectedProduct.price}</h3>
                  <div className='buttons'>
                  <button onClick={handleAddToCart}>Add to Cart</button>
                  <button onClick={handleBackToProductList}>Back</button>
                  </div>
                </div>
              </div>
            )}


            <div className='products' >
              {filteredProducts.map(product => (
                <div onClick={() => handleProductSelect(product)} className='product' key={product.id}>
                  <img src={product.image} alt={product.title}></img>
                  <h3>{product.title}</h3>
                  <h4>{product.description} L.E</h4>
                </div>
              ))}
            </div>
                  </div>}
                
                  {isDiv2Visible && <OrderForm cart={cart}/> }
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default Products;