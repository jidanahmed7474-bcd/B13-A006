import React from 'react';


const Banner = () => {
  return (
    <section id="home" className="hero-gradient pt-16 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <img src="/rocket.png" alt="" className="w-4 h-4" />
              <span>New: AI-Powered Tools Available</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-3xl font-extrabold text-indigo-950 leading-tight mb-6">
              Supercharge Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
                Digital Workflow
              </span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products

            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="#products">
                <button className="btn-primary px-8 py-3 rounded-full font-semibold text-base flex items-center gap-2">
                  Explore Products
                </button>
              </a>
              <button className="px-8 py-3 rounded-full font-semibold text-base border-2 border-purple-300 text-purple-700 hover:bg-purple-50 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-3xl blur-3xl opacity-20 scale-110"></div>
              <img
                src="/banner.png"
                alt="Digital Tools"
                className="relative z-10 w-full max-w-md float-anim rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
