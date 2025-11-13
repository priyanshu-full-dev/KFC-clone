import React from 'react'


const Header = ({ cartCount, setIsCartOpen }) => {
  return (
    <div>
        
      <header className="bg-white px-12 py-3 flex justify-between items-center shadow-md fixed w-full top-0 z-50">
      <div className="text-5xl font-bold text-red-600 italic">KFC</div>
      <nav className="flex gap-8 items-center">
        <a href="#about" className="text-red-600 font-bold text-sm hover:opacity-80 transition">ABOUT US</a>
        <a href="#find" className="text-red-600 font-bold text-sm hover:opacity-80 transition">FIND US</a>
        <a href="#campaigns" className="text-red-600 font-bold text-sm hover:opacity-80 transition">ALL CAMPAIGNS</a>
        <div className="flex gap-4">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer shadow">
        <i className="ri-user-2-fill text-2xl text-red-600"></i>
          </div>
          <div 
            onClick={() => setIsCartOpen(true)}
            className="bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer shadow relative hover:bg-gray-50 bg-[url( /image/bucket_cart_icon.svg)] bg-cover transition"
          >
            
            {cartCount > 0 && (
              <span className="absolute mt-0.5 text-center font-bold  text-red-600 rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default Header