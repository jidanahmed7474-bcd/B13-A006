import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between bg-white rounded-2xl p-4 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center p-1.5">
          <img src={`/${item.icon}`} alt={item.name} className="w-8 h-8 object-contain" />
        </div>
        <div>
          <h4 className="font-display font-bold text-indigo-900 text-base">{item.name}</h4>
          <p className="text-gray-500 text-sm">{item.period}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-display font-extrabold text-purple-700 text-lg">${item.price}</span>
        <button
          onClick={() => onRemove(item.id)}
          className="w-8 h-8 bg-red-50 hover:bg-red-100 text-red-500 rounded-full flex items-center justify-center transition-colors text-xs font-bold"
          title="Remove"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default CartItem;
