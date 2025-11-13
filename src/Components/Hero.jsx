import React, { useEffect, useState } from 'react'
import Slider from './Slider';
import FloatingFoodElements from './FloatingFoodElements';



const Hero = () => {
       const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Italian pasta with vegetables",
      description: "Such as rotini pasta, broccoli florets, cherry tomatoes, black olives, and green peas, being tossed or flying above a black frying pan.",
      price: "299",
      image: " /image/br.png"

    },
    {
      title: "CRISPY ZINGER BURGER COMBO",
      description: "Spicy, crispy, and absolutely delicious. Our signature Zinger burger with extra crunch and flavor that hits the spot every time.",
      price: "199",
      image: " /image/burg.png"
    },
    {
      title: "FAMILY FEAST BUCKET",
      description: "Share the joy with our family bucket. Loaded with crispy chicken pieces, perfect for gatherings and celebrations.",
      price: "599",
      image: " /image/fam.png"
    },
    {
      title: "POPCORN CHICKEN DELIGHT",
      description: "Bite-sized perfection in every piece. Our popcorn chicken is crispy outside, tender inside, and utterly irresistible.",
      price: "149",
      image: " /image/pop.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

    
  return (
    <div>
        <section className="bg-gradient-to-br from-red-600 to-red-700 pt-20 relative overflow-hidden h-[650px]">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 text-white text-[400px] font-bold italic">
        KFC
      </div>
      
      <FloatingFoodElements />
      
      
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <Slider key={index} {...slide} isActive={index === currentSlide} />
        ))}
      </div>
      

      <div className="absolute bottom-8 left-12 flex gap-3 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full cursor-pointer transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-2.5'
            }`}
          />
        ))}
      </div>
    </section>
    </div>
  )
}

export default Hero