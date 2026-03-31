import React, { useState } from 'react';

const tagStyles = {
  popular: 'tag-popular',
  new: 'tag-new',
  bestseller: 'tag-bestseller',
};

const ProductCard = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleBuy = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="card-hover bg-white rounded-3xl p-6 border border-purple-100 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center p-2">
          <img src={`/${product.icon}`} alt={product.name} className="w-10 h-10 object-contain" />
        </div>
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${tagStyles[product.tagType] || 'tag-popular'}`}>
          {product.tag}
        </span>
      </div>

      {/* Name & Description */}
      <h3 className="font-display text-xl font-bold text-indigo-950 mb-2">{product.name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">{product.description}</p>

      {/* Features */}
      <ul className="mb-5 space-y-2">
        {product.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-4 h-4 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Price + Button */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-purple-50">
        <div>
          <span className="font-display text-2xl font-extrabold text-purple-700">
            ${product.price}
          </span>
          <span className="text-xs text-gray-400 ml-1">/{product.period}</span>
        </div>
        <button
          onClick={handleBuy}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
            added
              ? 'bg-green-500 text-white'
              : 'btn-primary'
          }`}
        >
          {added ? '✓ Added!' : 'Buy Now'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
