import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ProductCard from './ProductCard';
import CartItem from './CartItem';
import productsData from '../products.json';

const MainSection = ({ cart, setCart }) => {
  const [activeTab, setActiveTab] = useState('products');

  const handleAddToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      toast.warn(`"${product.name}" is already in your cart!`, {
        position: "top-right",
        autoClose: 2500,
      });
      return;
    }
    setCart([...cart, product]);
    toast.success(`"${product.name}" added to cart! 🛒`, {
      position: "top-right",
      autoClose: 2500,
    });
  };

  const handleRemove = (id) => {
    const item = cart.find(i => i.id === id);
    setCart(cart.filter(i => i.id !== id));
    toast.error(`"${item?.name}" removed from cart.`, {
      position: "top-right",
      autoClose: 2500,
    });
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warn('Your cart is empty!', { position: "top-right", autoClose: 2500 });
      return;
    }
    setCart([]);
    toast.success('🎉 Checkout successful! Thank you for your purchase!', {
      position: "top-right",
      autoClose: 3500,
    });
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl font-extrabold text-indigo-950 section-title">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-8 py-3 rounded-full font-semibold text-sm transition-all ${
              activeTab === 'products'
                ? 'btn-primary shadow-lg shadow-purple-200'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-purple-300'
            }`}
          >
             Products
          </button>
          <button
            onClick={() => setActiveTab('cart')}
            className={`px-8 py-3 rounded-full font-semibold text-sm transition-all relative ${
              activeTab === 'cart'
                ? 'btn-primary shadow-lg shadow-purple-200'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-purple-300'
            }`}
          >
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        {/* Products Grid */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsData.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}

        {/* Cart Section */}
        {activeTab === 'cart' && (
          <div className="max-w-2xl mx-auto">
            {cart.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="font-display text-2xl font-bold text-gray-400 mb-2">Your cart is empty</h3>
                <p className="text-gray-400 mb-6">Add some amazing tools to get started!</p>
                <button
                  onClick={() => setActiveTab('products')}
                  className="btn-primary px-8 py-3 rounded-full font-semibold"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <div>
                <div className="space-y-3 mb-6">
                  {cart.map(item => (
                    <CartItem key={item.id} item={item} onRemove={handleRemove} />
                  ))}
                </div>

                {/* Total + Checkout */}
                <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600 font-medium">Total Items:</span>
                    <span className="font-bold text-gray-800">{cart.length}</span>
                  </div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-purple-50">
                    <span className="text-gray-600 font-medium">Total Price:</span>
                    <span className="font-display text-2xl font-extrabold text-purple-700">${totalPrice}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full btn-primary py-4 rounded-2xl font-semibold text-base"
                  >
                    🚀 Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MainSection;
