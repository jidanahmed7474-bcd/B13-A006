import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-bg text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-2xl font-bold">
                DigiTools
              </span>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed mb-5">
             Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p> 
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-bold text-base mb-5 text-white">Product</h4>
            <ul className="space-y-3 text-purple-200 text-sm">
              {['Features', 'Pricing', 'Templates', 'Integrations'].map((item, i) => (
                <li key={i}><a href="#products" className="hover:text-purple-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-base mb-5 text-white">Company</h4>
            <ul className="space-y-3 text-purple-200 text-sm">
              {['About', 'Blog', 'Careers', 'Press'].map((item, i) => (
                <li key={i}><a href="#" className="hover:text-purple-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-base mb-5 text-white">Resources</h4>
               <ul className="space-y-3 text-purple-200 text-sm">
              {['Documentation', 'Help Center', 'Community', 'Contact'].map((item, i) => (
                <li key={i}><a href="#" className="hover:text-purple-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          {/* social links */}
           <div>
            <h4 className="font-display font-bold text-base mb-5 text-white">Company</h4>
              {['𝕏', 'f', 'in'].map((icon, i) => (
                <button key={i} className="w-9 h-9 bg-white/10 hover:bg-purple-600 rounded-full items-center justify-center text-sm transition-colors">
                  {icon}
                </button>
              ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-purple-300 text-sm">
          <p>© 2025 DigiTools. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
