import React, { useEffect, useRef } from 'react'

const Slider = ({ title, description, price, image, isActive }) => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const priceRef = useRef(null);

  useEffect(() => {
    if (isActive && typeof window !== 'undefined' && window.gsap) {
      const gsap = window.gsap;

      gsap.fromTo(contentRef.current?.children || [],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out'
        }
      );
    

      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 0.8, rotation: -10 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: 'elastic.out(1, 0.5)'
        }
      );

      gsap.fromTo(priceRef.current,
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: 'back.out(2)',
          delay: 0.3
        }
      );

      gsap.to(imageRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to(priceRef.current, {
        scale: 1.1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }
  }, [isActive]);
  return (
    <div className={`absolute w-full h-full lg:flex justify-between items-center px-12 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div ref={contentRef} className="max-w-lg z-10">
        <h1 className="lg:text-6xl text-5xl text-white font-bold uppercase leading-tight mb-5">{title}</h1>
        <p className="text-white/80 mb-8 hidden lg:flex text-base">{description}</p>
        <button className="bg-transparent border-3 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-red-600 transition">
          ORDER NOW
        </button>
      </div>
      <div className="relative z-10">
        <img ref={imageRef} src={image} alt={title} className="w-[500px] h-auto drop-shadow-2xl" />
        <div ref={priceRef} className="absolute top-1/4 right-1/4 bg-white rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-xl">
          <span className="text-sm text-gray-600">Only</span>
          <span className="text-4xl font-bold text-red-600">₹{price}</span>
        </div>
      </div>
    </div>
  )
}

export default Slider
