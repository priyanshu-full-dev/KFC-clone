import React, { useEffect, useRef } from 'react'
import ProductCard from './ProductCard';

const Cart = ({ isOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart }) => {
    const cartRef = useRef(null);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  useEffect(() => {
    if (isOpen && typeof window !== 'undefined' && window.gsap && cartRef.current) {
      const gsap = window.gsap;
      
      gsap.fromTo(cartRef.current,
        { x: 400, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }
      );
    }
  }, [isOpen]);


  if (!isOpen) return null;
    return (
        <>
      <div 
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
      />
      
      <div ref={cartRef} className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        <div className="bg-red-600 text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-3xl hover:opacity-80 transition"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-xl p-4 flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">{item.name}</h3>
                    <p className="text-red-600 font-bold">₹{item.price}</p>
                    
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold hover:bg-gray-200 transition"
                      >
                        −
                      </button>
                      <span className="font-bold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold hover:bg-red-700 transition"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-red-600 hover:text-red-800 transition"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t p-6 bg-gray-50">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax (5%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-2 border-t">
                <span>Total</span>
                <span className="text-red-600">₹{total.toFixed(2)}</span>
              </div>
            </div>
            
            <button className="w-full bg-red-600 text-white py-4 rounded-full font-bold text-lg hover:bg-red-700 transition">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
    )
}

export default Cart