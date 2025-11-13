import React, { useEffect, useRef } from 'react'

const FloatingFoodElements = () => {
    const elementsRef = useRef([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap) {
      const gsap = window.gsap;

      elementsRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            y: Math.random() * 30 + 20,
            x: Math.random() * 20 - 10,
            rotation: Math.random() * 20 - 10,
            duration: Math.random() * 2 + 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.2
          });
        }
      });
    }
  }, []);

 const foodItems = [
  { image: '../../public/image/if1.png', size: 'w-20 h-20', top: '10%', left: '5%' },
  { image: '../../public/image/if4.png', size: 'w-60  h-60', top: '20%', right: '20%' },
  { image: '../../public/image/if3.png', size: 'w-16 h-16', bottom: '25%', left: '10%' },
  { image: '../../public/image/if2.png', size: 'w-16 h-16', top: '60%', left: '7%' },
  { image: '../../public/image/if5.png', size: 'w-60 h-60', top: '30%', right: '3%' },
  { image: '../../public/image/if4.png', size: 'w-60 h-60', bottom: '5%', right: '12%' },
];
  return (
    <>
    {foodItems.map((item, index) => (
      <div
        key={index}
        ref={el => elementsRef.current[index] = el}
        className={`absolute ${item.size} pointer-events-none `}
        style={{
          top: item.top,
          bottom: item.bottom,
          left: item.left,
          right: item.right,
        }}
      >
        <img 
          src={item.image} 
          alt={`Food item ${index + 1}`}
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
    ))}
  </>
  );
}

export default FloatingFoodElements