import React, { useState } from 'react';
import NavBar from "../components/Nav";
import Footer from '../components/Footer';
import { useStoreContext } from '../utils/GlobalState';

export default function CartPage() {
  const [state, dispatch] = useStoreContext();
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate subtotal
  const subtotal = state.cart.reduce((acc, item) => acc + item.price, 0);

  // Calculate tax (7.35%)
  const taxRate = 0.0735;
  const tax = subtotal * taxRate;

  // Calculate total
  const total = subtotal + tax;

  const handlePlaceOrder = () => {
    // Place order logic goes here (if needed)
    setOrderPlaced(true);
    // Optionally, you can clear the cart after placing the order
    // dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <>
      <NavBar />
      <div style={{ margin: '0 auto', padding: '20px', maxWidth: '800px' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Cart</h2>
          {state.cart && Array.isArray(state.cart) && state.cart.map((item, index) => (
            <React.Fragment key={index}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h5>{item.name}</h5>
                <div style={{ borderLeft: '1px solid white', height: 'auto', flex: '0 0 auto' }} />
                <h5>${item.price}</h5>
              </div>
            </React.Fragment>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
            <h6>Subtotal:</h6>
            <h6>${subtotal.toFixed(2)}</h6>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h6>Tax (7.35%):</h6>
            <h6>${tax.toFixed(2)}</h6>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <h4>Total:</h4>
            <h4>${total.toFixed(2)}</h4>
          </div>
          {!orderPlaced && (
            <button onClick={handlePlaceOrder} style={{ marginTop: '20px', backgroundColor: 'blue', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
              Place Order
            </button>
          )}
          {orderPlaced && (
            <React.Fragment>
              <h5 style={{ marginTop: '20px', color: 'white' }}>Your order has been placed!</h5>
              <h5 style={{ color: 'white' }}>Your order will be ready for pickup in 20-30 minutes.</h5>
            </React.Fragment>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}