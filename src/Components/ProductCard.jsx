import { useRef } from "react";

const ProductCard = ({ product, addToCart }) => {
  const cardRef = useRef(null);

  const handleAddToCart = () => {
    addToCart(product);
    
    if (typeof window !== 'undefined' && window.gsap && cardRef.current) {
      const gsap = window.gsap;
      
      gsap.to(cardRef.current, {
        scale: 1.05,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut'
      });
      
    }
  };
  return (
       <div 
      ref={cardRef}
      className="product-card bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
    >
      <div className="relative mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-xl"
        />
        {product.badge && (
          <span className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
            {product.badge}
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
      
      <div className="flex justify-between items-center">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-red-600">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
          )}
        </div>
        <button 
          onClick={handleAddToCart}
          className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition"
        >
          Add
        </button>
      </div>
    </div>
  );
};
export default ProductCard