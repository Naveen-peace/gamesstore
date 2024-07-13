import React, { useContext, useState, useEffect } from 'react';
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';
import { CartContext } from '../contex/CartContext.jsx';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});

  const navigate = useNavigate();

  const handleNavigate = () => {
    clearCart();
    navigate('/');
  };

  useEffect(() => {
    const initialQuantities = {};
    cartItems.forEach(item => {
      initialQuantities[item.id] = 1;
    });
    setQuantities(initialQuantities);
  }, [cartItems]);

  const handleIncreaseQuantity = (id) => {
    setQuantities(prev => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const handleDecreaseQuantity = (id) => {
    setQuantities(prev => ({ ...prev, [id]: Math.max((prev[id] || 1) - 1, 1) }));
  };

  const totalAmount = cartItems.reduce((acc, item) => {
    const quantity = quantities[item.id] || 1;
    const rate = item.rate ? parseFloat(item.rate.replace(/[^\d.]/g, '')) : 0;
    return acc + (rate * quantity);
  }, 0);

  return (
    <section>
      <NavBar />
      <div className="container">
        <div className="cart-table">
          <h2 className="cart-title">Shopping Cart</h2>
          <table className='table-flex'>  
            <thead>
              <tr>
                <th>S.No</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id}>
                  <td  style={{color:'#ffffff'}} data-label="S.No">{index + 1}</td>
                  <td data-label="Image">
                    <img src={item.Image} alt={item.name} style={{ width: '30px', height: '30px' }} />
                  </td>
                  <td data-label="Product Name" style={{color:'#ffffff'}}>{item.name}</td>
                  <td data-label="Quantity">
                    <button className="btn" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                    <input type="text" value={quantities[item.id]} readOnly />
                    <button className="btn" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                  </td>
                  <td data-label="Price" style={{color:'#ffffff'}}>{item.rate}</td>
                  <td data-label="Remove">
                    <button className="btn btn-danger" onClick={() => removeFromCart(item)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-end">
            <span>Total: </span> <b>won.{totalAmount.toFixed(2)}</b>
          </div>
          <div className="cart-btn-center">
            <button className="btn btn-success" onClick={handleNavigate}>Checkout</button>
          </div>
        </div>
      </div>
      <div className="line-home"></div>
      <Footer />
    </section>
  );
}

export default Cart;
