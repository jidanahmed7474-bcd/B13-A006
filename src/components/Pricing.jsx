import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: 0,
    period: 'month',
    description: 'Perfect for getting started',
    features: [
      'Access to 5 tools',
      'Basic analytics',
      'Email support',
      '1 user seat',
      '5GB storage',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: 29,
    period: 'month',
    description: 'Best for professionals',
    features: [
      'Access to 50+ tools',
      'Advanced analytics',
      'Priority support',
      '5 user seats',
      '50GB storage',
      'API access',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    period: 'month',
    description: 'For teams and businesses',
    features: [
      'Unlimited tools',
      'Custom analytics',
      '24/7 dedicated support',
      'Unlimited seats',
      '500GB storage',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl font-extrabold text-indigo-950 section-title">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 flex flex-col transition-all ${
                plan.popular
                  ? 'pricing-popular'
                  : 'bg-white border border-purple-100 hover:shadow-xl hover:shadow-purple-100'
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full">
                    ⭐ Most Popular
                  </span>
                </div>
              )}

              <h3 className={`font-display text-2xl font-extrabold mb-2 ${plan.popular ? 'text-white' : 'text-indigo-950'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-purple-200' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className={`font-display text-5xl font-extrabold ${plan.popular ? 'text-white' : 'text-purple-700'}`}>
                  ${plan.price}
                </span>
                <span className={`text-sm ml-1 ${plan.popular ? 'text-purple-200' : 'text-gray-400'}`}>
                  /{plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`flex items-center gap-3 text-sm ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                      plan.popular ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-600'
                    }`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-2xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? 'bg-white text-purple-700 hover:bg-purple-50'
                    : 'btn-primary'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
