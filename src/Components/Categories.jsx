const Categories = ({ activeCategory, setActiveCategory }) => {
 const categories = [
    { id: 'all', name: 'All', icon: '🍽️' },
    { id: 'chicken', name: 'Chicken', icon: '🍗' },
    { id: 'burgers', name: 'Burgers', icon: '🍔' },
    { id: 'sides', name: 'Sides', icon: '🍟' },
    { id: 'beverages', name: 'Beverages', icon: '🥤' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    
    if (typeof window !== 'undefined' && window.gsap) {
      const gsap = window.gsap;
      const activeElement = document.querySelector(`[data-category="${categoryId}"]`);
      
      if (activeElement) {
        gsap.fromTo(activeElement,
          { scale: 0.9 },
          { scale: 1.1, duration: 0.3, ease: 'back.out(2)', yoyo: true, repeat: 1 }
        );
      }
    }
  };
  return (
    <div className="bg-white py-8 px-12 shadow-md sticky  z-40 categories-section">
      <div className="flex justify-center items-center lg:gap-10">
        {categories.map((category) => (
          <div
            key={category.id}
            data-category={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`category-item flex flex-col items-center gap-3 cursor-pointer transition-transform hover:-translate-y-1 lg:min-w-[80px] ${
              activeCategory === category.id ? 'scale-110' : ''
            }`}
          >
            <div
              className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl transition-colors ${
                activeCategory === category.id
                  ? 'bg-red-600 text-white'
                  : 'bg-yellow-50'
              }`}
            >
              {category.icon}
            </div>
            <span className="text-sm font-bold text-center">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories
