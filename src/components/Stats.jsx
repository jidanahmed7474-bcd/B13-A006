import React from 'react';

const stats = [
  { value: '50k+', label: 'Active Users'},
  { value: '200+', label: 'Premium Tools'},
  { value: '4.9', label: 'Rating'},
];

const Stats = () => {
  return (
    <section className="py-16 bg-purple-700">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card rounded-2xl p-6 transition-all hover:shadow-md">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="font-display text-3xl font-extrabold text-purple-700 mb-1">{stat.value}</div>
              <div className="font-semibold text-gray-800 text-sm mb-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
