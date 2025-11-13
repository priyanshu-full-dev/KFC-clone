import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Install from './Components/Install'
import Footer from './Components/Footer'
import ProductSection from './Components/ProductsSection'
import Cart from './Components/Cart'
import  useGsapAnimations  from './Hooks/useGsapAnimations';
import LoadingScreen from './Components/LoadingScreen'
import OffersSection from './Components/OffersSection'


const App = () => {
 const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useGsapAnimations();
  

  // Load GSAP from CDN
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.async = true;
    document.body.appendChild(script);

    const scrollTriggerScript = document.createElement('script');
    scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
    scrollTriggerScript.async = true;
    document.body.appendChild(scrollTriggerScript);

    scrollTriggerScript.onload = () => {
      if (window.gsap && window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
      }
    };

    // Simulate loading time (3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(scrollTriggerScript);
      clearTimeout(timer);
    };
  }, []);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
   <>
      <LoadingScreen isLoading={isLoading} />
      
      {!isLoading && (
        <div className="font-sans bg-gray-100 overflow-x-hidden">
          <Header cartCount={cartCount} setIsCartOpen={setIsCartOpen} />
          <Cart 
            isOpen={isCartOpen} 
            setIsCartOpen={setIsCartOpen}
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
          <Hero />
          
          <ProductSection addToCart={addToCart} />
          <OffersSection/>
          <Install />
          <Footer />
        </div>
      )}
    </>
    
  )
}

export default App