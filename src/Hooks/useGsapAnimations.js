import { useEffect } from "react";

const useGsapAnimations = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap) {
      const gsap = window.gsap;

      gsap.from('header', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.category-item', {
        scrollTrigger: {
          trigger: '.categories-section',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      });

      gsap.from('.product-card', {
        scrollTrigger: {
          trigger: '.products-grid',
          start: 'top 80%',
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });

      gsap.from('.app-section-content', {
        scrollTrigger: {
          trigger: '.app-section',
          start: 'top 80%',
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.app-section-image', {
        scrollTrigger: {
          trigger: '.app-section',
          start: 'top 80%',
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    }
  }, []);
};

export default useGsapAnimations