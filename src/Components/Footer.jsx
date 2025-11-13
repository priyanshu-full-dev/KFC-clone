import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-red-600 text-white px-12 py-8 flex justify-between items-center">
                <div className="text-4xl font-bold italic">KFC</div>
              
                <div className="flex gap-4">
                     <div  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
                     <i className="ri-facebook-fill"></i>
                          
                        </div>
                         <div  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
                           <i className="ri-instagram-fill"></i>
                        </div>
                         <div  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
                           <i className="ri-youtube-fill"></i>
                        </div>
                </div>
            </footer>
            <div className="bg-gray-900 text-gray-400 px-12 py-10 grid grid-cols-3 gap-8">
                <div>
                    <h4 className="text-white mb-4 font-bold">ABOUT</h4>
                    <a href="#" className="block mb-2 text-sm hover:text-white transition">History</a>
                    <a href="#" className="block mb-2 text-sm hover:text-white transition">Career</a>
                    <a href="#" className="block mb-2 text-sm hover:text-white transition">Personal Selling Areas</a>
                    <a href="#" className="block mb-2 text-sm hover:text-white transition">Privacy</a>
                </div>
                <div>
                    <h4 className="text-white mb-4 font-bold">SITE MAP</h4>
                    <a href="#" className="block mb-2 text-sm hover:text-white transition">Find Restaurant</a>
                    <a href="#" className="block mb-2 text-sm hover:text-white transition">Terms Condition</a>
                    <a href="#" className="block mb-2 text-sm hover:text-white transition">Chicken</a>
                    <a href="#" className="block mb-2 text-sm hover:text-white transition">Delivery</a>
                </div>
                <div>
                    <h4 className="text-white mb-4 font-bold">NUTRITION</h4>
                    <a href="#" className="block mb-2 text-sm hover:text-white transition">Food Allergens And Nutrition Information</a>
                </div>
            </div>
        </div>
    )
}

export default Footer