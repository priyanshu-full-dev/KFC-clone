import React, { useState } from 'react'

const OffersSection = () => {
    const offers = [
    {
      id: 1,
      title: 'Family Feast Deal',
      description: 'Get 20% off on family buckets. Perfect for gatherings!',
      discount: '20% OFF',
      couponCode: 'FAMILY20',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop',
      bgColor: 'from-orange-500 to-red-600',
      validUntil: 'Valid till Dec 31, 2024'
    },
    {
      id: 2,
      title: 'Zinger Combo Special',
      description: 'Buy 1 Zinger Burger, get 1 free. Limited time offer!',
      discount: 'BUY 1 GET 1',
      couponCode: 'ZINGER2X',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
      bgColor: 'from-yellow-500 to-orange-600',
      validUntil: 'Valid till Nov 30, 2024'
    },
    {
      id: 3,
      title: 'Student Special',
      description: 'Show your student ID and get flat 25% off on all items',
      discount: '25% OFF',
      couponCode: 'STUDENT25',
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop',
      bgColor: 'from-purple-500 to-pink-600',
      validUntil: 'Valid till Dec 15, 2024'
    },
    {
      id: 4,
      title: 'Chicken Bucket Bonanza',
      description: '8pc Chicken Bucket at ₹399 only. Save ₹200!',
      discount: 'FLAT ₹200 OFF',
      couponCode: 'BUCKET399',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop',
      bgColor: 'from-red-600 to-red-800',
      validUntil: 'Valid till Dec 20, 2024'
    },
    {
      id: 5,
      title: 'Wings Wednesday',
      description: 'Every Wednesday get 50% off on all chicken wings',
      discount: '50% OFF',
      couponCode: 'WINGS50',
      image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop',
      bgColor: 'from-green-500 to-teal-600',
      validUntil: 'Every Wednesday'
    },
    {
      id: 6,
      title: 'Mega Saver Box',
      description: 'Complete meal for 2 at just ₹499. Includes burger, fries & drink',
      discount: 'SAVE ₹150',
      couponCode: 'MEGA499',
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop',
      bgColor: 'from-blue-500 to-indigo-600',
      validUntil: 'Valid till Nov 25, 2024'
    },
  ];

  const [copiedCode, setCopiedCode] = useState(null);

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };
 
  return (
   <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Special Offers & Deals
          </h2>
          <p className="text-gray-600 text-lg">
            Don't miss out on these amazing discounts and save big!
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="offer-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Offer Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                {/* Discount Badge */}
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${offer.bgColor} text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg`}>
                  {offer.discount}
                </div>
              </div>

              {/* Offer Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {offer.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {offer.description}
                </p>

                {/* Coupon Code Section */}
                <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg p-4 mb-4 border-2 border-dashed border-gray-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Coupon Code</p>
                      <p className="text-xl font-bold text-red-600 tracking-wider">
                        {offer.couponCode}
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(offer.couponCode, offer.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition text-sm"
                    >
                      {copiedCode === offer.id ? '✓ Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* Valid Until */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 flex items-center gap-1">
                    ⏰ {offer.validUntil}
                  </span>
                  <button className="text-red-600 font-semibold hover:underline">
                    Use Now →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want more exclusive deals?</p>
          <button className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition shadow-lg">
            View All Offers
          </button>
        </div>
      </div>
    </section>
  )
}

export default OffersSection