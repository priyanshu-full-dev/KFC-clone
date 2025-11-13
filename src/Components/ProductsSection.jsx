import { useState } from "react";
import Categories from "./Categories";
import ProductCard from "./ProductCard";

const ProductsSection = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const products = [
  // CHICKEN ITEMS
  {
    id: 1,
    name: 'Chicken Bucket',
    description: '8 pieces of our famous Original Recipe chicken',
    price: 449,
    originalPrice: 599,
    image: '../../public/image/pr1.png',
    category: 'chicken',
    badge: 'Popular'
  },
  {
    id: 5,
    name: 'Hot Wings',
    description: '6 pieces of spicy hot wings',
    price: 219,
    image: '../../public/image/pr2.png',
    category: 'chicken',
    badge: 'Spicy'
  },
  {
    id: 7,
    name: 'Popcorn Chicken',
    description: 'Bite-sized crispy chicken pieces',
    price: 149,
    originalPrice: 199,
    image: '../../public/image/pr3.png',
    category: 'chicken'
  },
  {
    id: 10,
    name: 'Chicken Strips',
    description: '5 crispy chicken strips with dipping sauce',
    price: 189,
    image: '../../public/image/pr4.png',
    category: 'chicken'
  },
  {
    id: 11,
    name: 'Grilled Chicken',
    description: 'Healthy grilled chicken breast with herbs',
    price: 249,
    image: '../../public/image/pr5.png',
    category: 'chicken',
    badge: 'New'
  },
  {
    id: 12,
    name: 'Chicken Nuggets',
    description: '10 pieces of golden chicken nuggets',
    price: 129,
    image: '../../public/image/pr6.png',
    category: 'chicken'
  },
  {
    id: 13,
    name: 'BBQ Chicken Wings',
    description: '8 pieces with smoky BBQ sauce',
    price: 269,
    image: '../../public/image/pr7.png',
    category: 'chicken',
    badge: 'Popular'
  },
  {
    id: 14,
    name: 'Chicken Drumsticks',
    description: '4 juicy chicken drumsticks',
    price: 199,
    image: '../../public/image/pr8.png',
    category: 'chicken'
  },

  // BURGERS
  {
    id: 2,
    name: 'Zinger Burger',
    description: 'Crispy zinger fillet with lettuce and mayo',
    price: 199,
    image: '../../public/image/pr9.png',
    category: 'burgers',
    badge: 'New'
  },
  {
    id: 6,
    name: 'Veg Burger',
    description: 'Crispy veg patty with fresh veggies',
    price: 149,
    image: '../../public/image/pr10.png',
    category: 'burgers'
  },
  {
    id: 15,
    name: 'Classic Chicken Burger',
    description: 'Original chicken burger with special sauce',
    price: 179,
   image: '../../public/image/pr11.png',
    category: 'burgers'
  },
  {
    id: 16,
    name: 'Double Crunch Burger',
    description: 'Double chicken patty with cheese',
    price: 249,
    originalPrice: 299,
    image: '../../public/image/pr12.png',
    category: 'burgers',
    badge: 'Popular'
  },
  {
    id: 17,
    name: 'Spicy Chicken Burger',
    description: 'Extra spicy with jalapenos and hot sauce',
    price: 189,
   image: '../../public/image/pr13.png',
    category: 'burgers',
    badge: 'Spicy'
  },
  {
    id: 18,
    name: 'Cheese Burst Burger',
    description: 'Loaded with melted cheese',
    price: 219,
    image: '../../public/image/pr14.png',
    category: 'burgers'
  },
  {
    id: 19,
    name: 'BBQ Bacon Burger',
    description: 'Smoky BBQ sauce with crispy bacon',
    price: 269,
    image: '../../public/image/pr15.png',
    category: 'burgers'
  },
  {
    id: 20,
    name: 'Paneer Burger',
    description: 'Grilled paneer patty with mint chutney',
    price: 159,
   image: '../../public/image/pr16.png',
    category: 'burgers'
  },

  // SIDES
  {
    id: 3,
    name: 'Large Fries',
    description: 'Crispy golden fries seasoned to perfection',
    price: 99,
    image: '../../public/image/pr17.png',
    category: 'sides'
  },
  {
    id: 8,
    name: 'Coleslaw',
    description: 'Fresh creamy coleslaw salad',
    price: 89,
   image: '../../public/image/pr18.png',
    category: 'sides'
  },
  {
    id: 21,
    name: 'Cheese Fries',
    description: 'Fries topped with melted cheese sauce',
    price: 129,
    image: '../../public/image/pr19.png',
    category: 'sides',
    badge: 'Popular'
  },
  {
    id: 22,
    name: 'Onion Rings',
    description: 'Crispy battered onion rings',
    price: 109,
    image: '../../public/image/pr20.png',
    category: 'sides'
  },
  {
    id: 23,
    name: 'Mashed Potato',
    description: 'Creamy mashed potato with gravy',
    price: 79,
    image: '../../public/image/pr21.png',
    category: 'sides'
  },
  {
    id: 24,
    name: 'Corn on the Cob',
    description: 'Buttered corn with herbs',
    price: 69,
    image: '../../public/image/pr22.png',
    category: 'sides'
  },
  {
    id: 25,
    name: 'Garden Salad',
    description: 'Fresh mixed greens with dressing',
    price: 99,
    image: '../../public/image/pr23.png',
    category: 'sides'
  },
  {
    id: 26,
    name: 'Potato Wedges',
    description: 'Seasoned potato wedges with dip',
    price: 119,
    image: '../../public/image/pr24.png',
    category: 'sides'
  },

  // BEVERAGES
  {
    id: 4,
    name: 'Pepsi',
    description: 'Chilled refreshing Pepsi 500ml',
    price: 79,
   image: '../../public/image/pr25.png',
    category: 'beverages'
  },
  {
    id: 27,
    name: 'Coca Cola',
    description: 'Classic Coke 500ml',
    price: 79,
    image: '../../public/image/pr26.png',
    category: 'beverages'
  },
  {
    id: 28,
    name: 'Fresh Lime Soda',
    description: 'Refreshing lime with soda',
    price: 69,
   image: '../../public/image/pr27.png',
    category: 'beverages'
  },
  {
    id: 29,
    name: 'Iced Tea',
    description: 'Chilled lemon iced tea',
    price: 89,
   image: '../../public/image/pr28.png',
    category: 'beverages'
  },
  {
    id: 30,
    name: 'Mango Shake',
    description: 'Thick mango milkshake',
    price: 119,
    image: '../../public/image/pr29.png',
    category: 'beverages',
    badge: 'New'
  },
  {
    id: 31,
    name: 'Chocolate Shake',
    description: 'Rich chocolate milkshake',
    price: 129,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop',
    category: 'beverages'
  },
  {
    id: 32,
    name: 'Coffee',
    description: 'Hot brewed coffee',
    price: 99,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
    category: 'beverages'
  },
  {
    id: 33,
    name: 'Orange Juice',
    description: 'Fresh squeezed orange juice',
    price: 109,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
    category: 'beverages'
  },

  // DESSERTS
  {
    id: 9,
    name: 'Chocolate Cake',
    description: 'Rich chocolate lava cake',
    price: 119,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    category: 'desserts'
  },
  {
    id: 34,
    name: 'Ice Cream Sundae',
    description: 'Vanilla ice cream with chocolate sauce',
    price: 99,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    category: 'desserts',
    badge: 'Popular'
  },
  {
    id: 35,
    name: 'Apple Pie',
    description: 'Warm apple pie with cinnamon',
    price: 89,
    image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=400&h=300&fit=crop',
    category: 'desserts'
  },
  {
    id: 36,
    name: 'Brownie',
    description: 'Fudgy chocolate brownie',
    price: 79,
    image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&h=300&fit=crop',
    category: 'desserts'
  },
  {
    id: 37,
    name: 'Cheesecake',
    description: 'Creamy New York style cheesecake',
    price: 139,
    image: 'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=400&h=300&fit=crop',
    category: 'desserts'
  },
  {
    id: 38,
    name: 'Donut',
    description: 'Glazed chocolate donut',
    price: 59,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop',
    category: 'desserts'
  },
  {
    id: 39,
    name: 'Cookies',
    description: '3 chocolate chip cookies',
    price: 69,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop',
    category: 'desserts'
  },
  {
    id: 40,
    name: 'Tiramisu',
    description: 'Classic Italian tiramisu',
    price: 149,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
    category: 'desserts',
    badge: 'New'
  },
];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // ⬅️ NEW: Show only first 6 products initially
  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 6);
  const hasMore = filteredProducts.length > 6;
  return (
    <section className="bg-gray-50 py-12">
      <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      
      <div className="px-12 mt-8">
        <div className="max-w-7xl mx-auto mb-8">
          <h2 className="text-4xl font-bold mb-2">Our Menu</h2>
          <p className="text-gray-600">Discover our delicious offerings</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto products-grid">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
        
        {/* ⬇️ VIEW MORE BUTTON */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-3 group"
            >
              {showAll ? (
                <>
                  Show Less
                  <svg className="w-5 h-5 transform rotate-180 group-hover:-translate-y-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              ) : (
                <>
                  View More Products
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products found in this category</p>
          </div>
        )}
      </div>
    </section>
  );
};
export default ProductsSection