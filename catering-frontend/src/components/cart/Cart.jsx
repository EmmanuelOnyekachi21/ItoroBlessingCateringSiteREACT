import React, { useState } from 'react'
import styles from '../menu/Menu.module.css';
import CartStyles from './CartStyles.module.css'
import pic from '../../assets/images/catering.jpeg'
import { FileText, Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom'

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Jollof Rice Special",
      image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80",
      price: 1500,
      quantity: 2,
      notes: "Extra spices please",
      extras: [
        {
          name: "Extra Chicken",
          quantity: 2,
          price: 200
        },
        {
          name: "Extra pork meat",
          quantity: 4,
          price: 300
        }
      ]
    },
    {
      id: 2,
      name: "Ewedu and Amala",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      price: 3000,
      quantity: 1,
      notes: "Less pepper please",
      extras: [
        {
          name: "Extra snail",
          quantity: 2,
          price: 500
        },
        {
          name: "Extra pork meat",
          quantity: 5,
          price: 200
        }
      ]
    }
  ]);
  const [deliveryOption, setDeliveryOption] = useState('delivery');
  const [couponCode, setCouponCode] = useState("");

  const subtotal = cartItems.reduce((dishacc, dishcurr) => {
    const extras = (dishcurr.extras).reduce((acc, curr) => (curr.quantity * curr.price) + acc, 0)
    return (dishcurr.price * dishcurr.quantity) + dishacc + extras;
  }, 0);

  const deliveryFee = deliveryOption === 'delivery' ? 2000 : 0;
  const tax = 0.12 * subtotal;
  const total = subtotal + deliveryFee + tax;

  const updateQuantity = (id, qty) => {
    if (qty < 1) return;
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: qty } : item));
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleNoteChange = (id, note) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, notes: note } : item))
  }

  const removeExtra = (itemId, extraIndex) => {
    setCartItems(cartItems.map(item => {
      if (item.id === itemId) {
        const newExtras = [...item.extras];
        newExtras.splice(extraIndex, 1);
        return { ...item, extras: newExtras };
      }
      return item;
    }));
  };


  const applyCoupon = () => {
    alert(`Coupon "${couponCode}" applied!`);
  };


  return (
    <section className="bg-light">
      <div className=''>
        <div className={`container-fluid text-center ${styles.hero}`} style={{ height: '40vh' }}>
          <div className={`${styles.content} ps-md-4`} style={{ paddingTop: '6rem' }} />
          <h1 className='poppins-bold'>Your Cart</h1>
          <p className={`text-muted text-center fs-4 ${styles.heroText}`}>
            Review your items and proceed to checkout!
          </p>
        </div>
      </div>

      <div className="my-5 container-fluid" />
      {
        cartItems.length === 0 ? (
          <div className="text-center">
            <h4 className='poppins-bold'>Your cart is empty!</h4>
            <p className='text-muted'>
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link className='btn mt-3 mb-5' to='/menu' style={{ backgroundColor: 'rgb(var(--orange))' }}>
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="mb-5 p-5 container-fluid row">
            {/* Cart Items */}
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-header">
                  <h4 className="poppins-bold p-3">Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</h4>
                </div>
                <div className="card-body">
                  {cartItems.map((item) => (
                    <div key={item.id} className="mb-4 pb-3 border-bottom">
                      <div className="d-flex gap-3">
                        <img src={item.image} alt={item.name} style={{ objectFit: 'cover', width: '100px', height: '100px' }} className="rounded" />
                        <div className='flex-grow-1'>
                          <div className=''>
                            <div class="row">
                              <div class="col-7">
                                <div className=''>
                                  <h5 className="poppins-semibold">{item.name}</h5>
                                  <p className="lato-bold mb-1" style={{ color: 'rgb(var(--orange))' }}>${item.price.toFixed(2)}</p>

                                  <div className="mb-2">
                                    <label className="form-label small mb-1">Special Instructions:</label>
                                    <input type="text" className="form-control form-control-sm" value={item.notes} onChange={(e) => handleNoteChange(item.id, e.target.value)} />
                                  </div>
                                </div>
                              </div>
                              <div class="col-5">

                                {/* Next flexed Item */}
                                <div className='mt-3 d-flex justify-content-between align-items-center'>

                                  {/* Quantity control */}
                                  <div>
                                    {/* <div className="d-flex mb-2 gap-1 align-items-center">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="btn btn-outline-secondary btn-sm me-2">
                                          <Minus />
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="btn btn-outline-secondary btn-sm me-2">
                                          <Plus />
                                        </button>
                                        </div> */}
                                    <div className="mt-3">
                                      <div className="input-group input-spinner">
                                        <div className="input-group-prepend">
                                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="btn border btn-light">
                                            -
                                          </button>
                                        </div>
                                        <input type="text" className="text-center border-none border" value={item.quantity} readOnly style={{ width: '2rem', padding: '0' }} />
                                        <div className="input-group-append">
                                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="border btn btn-light">
                                            +
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <div className="text-end poppins-bold">${item.price * item.quantity}</div>
                                    <div onClick={() => removeItem(item.id) } className={`d-flex ${CartStyles.hover} rounded btn-sm btn-danger text-danger ms-2`} style={{ cursor: 'pointer' }}>
                                      <span> <Trash2 size={16} color="#ed333b" strokeWidth={2.0} /> </span>
                                      <span className='text-danger'>Remove</span>
                                    </div>
                                  </div>
                                </div>
                              </div>




                            </div>
                          </div>


                          <hr />
                          {/* Extras */}
                          {item.extras?.length > 0 && (
                            <div className="mt-3">
                              <strong>Extras:</strong>
                              <ul className="ms-3 list-unstyled">
                                {item.extras.map((extra, index) => (
                                  <li key={index} className="d-flex justify-content-between align-items-center">
                                    <div >
                                      <div className={`d-flex align-items-center gap-2`}>
                                        <Plus size={10} />
                                        <div className={`d-flex align-items-center justify-content-between`}>
                                          {extra.name}

                                        </div>
                                      </div>
                                      <div onClick={() => removeExtra(item.id, index)} className={`${CartStyles.hover} rounded btn-sm btn-danger text-danger ms-2`} style={{ cursor: 'pointer' }}>
                                        <span><Trash2 size={16} color="#ed333b" strokeWidth={2.0} /></span>  <span className='' style={{ fontSize: '16px' }}>Remove</span>
                                      </div>
                                    </div>
                                    <div>
                                      <span>${extra.price} x {extra.quantity} = {(extra.price * extra.quantity).toFixed(2)}</span>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <hr />
                          <div className="my-3 d-flex justify-content-between">
                            <span>Item Total:</span>
                            <div>
                              <strong>Total:{(item.price * item.quantity) + item.extras.reduce((acc, extra) => acc + (extra.price * extra.quantity), 0)}</strong>
                            </div>
                            
                          </div>
                        </div>


                      </div>
                    </div>
                  ))}
                </div>

                {/* Coupon */}
                <div className="card-footer d-flex gap-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button className="btn btn-outline-primary" disabled={!couponCode} onClick={applyCoupon}>
                    Apply
                  </button>
                </div>

                <Link to="/menu" className="btn btn-outline-secondary">
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order summary */}
            <div className="col-lg-4">
              <div className="card shadow-sm position-sticky" style={{ top: '80px' }}>
                <div className="card-header"><h4 className="poppins-bold p-3">Order Summary</h4></div>
                <div className="card-body">
                  {/* Example Summary Content */}
                  <h5 className="poppins-bold">Delivery Options</h5>
                  <div className='form-check mb-2'>
                    <input
                      type='radio'
                      className='form-check-input'
                      id='delivery'
                      name='deliveryOption'
                      value='delivery'
                      checked={deliveryOption === 'delivery'}
                      onChange={(e) => setDeliveryOption(e.target.value)}
                    />
                    <label htmlFor="delivery" className="form-check-label">Delivery ($2000)</label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="pickup"
                      name="deliveryOption"
                      value="pickup"
                      checked={deliveryOption === 'pickup'}
                      onChange={(e) => setDeliveryOption(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="pickup">Pickup (Free)</label>
                  </div>

                  <hr />
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Delivery Fee</span>
                    <span>${deliveryFee}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Tax</span>
                    <span>${tax}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between fw-bold fs-5">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                  <button className="btn btn-success w-100 mt-4">Proceed to Checkout</button>
                </div>
              </div>

            </div>
          </div>
        )
      }

    </section>
  )
}

export default Cart