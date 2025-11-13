import React from 'react'

const Install = () => {
  return (
    <div>
         <section className="bg-gradient-to-br from-yellow-500 to-orange-500 px-12 py-20 flex justify-between items-center gap-12">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-72 h-[550px] bg-gradient-to-br from-red-600 to-red-900 rounded-[40px] p-4 shadow-2xl relative">
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-10" />
          <div className="w-full h-full bg-white rounded-3xl overflow-hidden flex flex-col items-center p-8">
            <div className="text-6xl font-bold text-red-600 italic mb-5">KFC</div>
            <div className="text-sm font-bold mb-2">BARGAIN BUCKET</div>
            <div className="text-2xl text-red-600 font-bold mb-5">₹299</div>
            
            <div className="grid grid-cols-2 gap-4 w-full mt-5">
              {[
                { icon: '🍗', name: '6 PC CHICKEN', price: '₹349' },
                { icon: '🍔', name: 'ZINGER BURGER', price: '₹199' },
                { icon: '🍟', name: 'LARGE FRIES', price: '₹99' },
                { icon: '🥤', name: 'DRINK', price: '₹79' }
              ].map((item, index) => (
                <div key={index} className="bg-yellow-50 rounded-2xl p-4 flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>
                  <div className="text-[10px] font-bold text-center">{item.name}</div>
                  <div className="text-xs text-red-600 font-bold">{item.price}</div>
                </div>
              ))}
            </div>
            
            <button className="mt-5 bg-red-600 text-white px-10 py-3 rounded-full font-bold">
              ADD TO BASKET
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 text-white">
        <h2 className="text-5xl font-bold mb-8">Now With Your Favorite KFC Mobile Application In Your Pocket</h2>
        <div className="flex gap-5">
          <a href="#" className="bg-black text-white px-7 py-4 rounded-xl flex items-center gap-3 hover:scale-105 transition">
            <i className="ri-app-store-fill text-4xl"></i>
            <div>
              <div className="text-xs">Download on the</div>
              <div className="font-bold">App Store</div>
            </div>
          </a>
          <a href="#" className="bg-black text-white px-7 py-4 rounded-xl flex items-center gap-3 hover:scale-105 transition">
           <i className="ri-google-play-fill text-4xl"></i>
            <div>
              <div className="text-xs">Get it on</div>
              <div className="font-bold">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Install