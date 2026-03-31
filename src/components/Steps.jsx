import React from 'react';
 
const steps = [
  {
    number: '01',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
  },
  {
    number: '02',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
      </svg>
    ),
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
  },
  {
    number: '03',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
  },
];
 
const GetStarted = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
 
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl font-extrabold text-indigo-950 mb-3">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
 
        {/* Cards — সবসময় পাশাপাশি */}
        <div className="flex flex-row gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center text-center"
              style={{ flex: 1, minWidth: 0 }}
            >
              {/* Step Badge */}
              <span className="absolute top-4 right-4 bg-purple-700 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                {step.number}
              </span>
 
              {/* Icon */}
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                {step.icon}
              </div>
 
              {/* Text */}
              <h3 className="font-display text-base font-bold text-indigo-950 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
};
 
export default GetStarted;
