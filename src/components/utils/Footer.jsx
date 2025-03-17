import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* Logo and Contact Button */}
        <div className="flex flex-col items-start">
          <div className="mb-8">
            <div className="flex items-center">
              <div className="mr-2">
              <img src={`${process.env.PUBLIC_URL}/vivendia-white.svg`} alt="Vivendia" />
              </div>
            </div>
          </div>
          <button className="bg-[#d94a3d] hover:bg-[#c1392e] text-white py-3 px-6 rounded transition duration-300 text-sm font-medium">
            NOUS CONTACTER
          </button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col">
          <h3 className="text-[#d94a3d] font-medium mb-6 text-lg">CONTACT</h3>
          <div className="mb-4 flex items-center">
            <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            <a href="tel:+33534444444" className="text-white hover:text-gray-300 transition">+33 5 34 44 44 44</a>
          </div>
          <div className="flex items-center">
            <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            <a href="mailto:info@vivendia.fr" className="text-white hover:text-gray-300 transition">info@vivendia.fr</a>
          </div>

          {/* Social Media */}
          <div className="mt-12">
            <h3 className="text-[#d94a3d] font-medium mb-6 text-lg">SUIVEZ NOUS</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1a1a1a] hover:bg-gray-200 transition">
                <svg width="10" height="16" viewBox="0 0 10 16" fill="currentColor">
                  <path d="M8.85 9l0.36-2.6H6.7V4.4c0-0.7 0.3-1.4 1.5-1.4h1.2V0.8c0 0-1.1-0.2-2.1-0.2C5.45 0.6 3.95 2 3.95 4.1v2.3H1.65v2.6h2.3V16h2.75V9h2.15z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1a1a1a] hover:bg-gray-200 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1a1a1a] hover:bg-gray-200 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2.982c2.937,0,3.285,0.011,4.445,0.064c1.072,0.049,1.655,0.228,2.042,0.379c0.513,0.2,0.88,0.438,1.265,0.823 c0.386,0.386,0.624,0.752,0.824,1.265c0.151,0.387,0.33,0.97,0.379,2.042c0.053,1.16,0.064,1.508,0.064,4.445 s-0.011,3.285-0.064,4.445c-0.049,1.072-0.228,1.655-0.379,2.042c-0.2,0.513-0.438,0.88-0.824,1.265 c-0.386,0.386-0.752,0.624-1.265,0.824c-0.387,0.151-0.97,0.33-2.042,0.379c-1.16,0.053-1.508,0.064-4.445,0.064 s-3.285-0.011-4.445-0.064c-1.072-0.049-1.655-0.228-2.042-0.379c-0.513-0.2-0.88-0.438-1.265-0.824 c-0.386-0.386-0.624-0.752-0.824-1.265c-0.151-0.387-0.33-0.97-0.379-2.042c-0.053-1.16-0.064-1.508-0.064-4.445 s0.011-3.285,0.064-4.445c0.049-1.072,0.228-1.655,0.379-2.042c0.2-0.513,0.438-0.88,0.824-1.265 c0.386-0.386,0.752-0.624,1.265-0.824c0.387-0.151,0.97-0.33,2.042-0.379C8.715,2.993,9.063,2.982,12,2.982 M12,1 C9.016,1,8.641,1.013,7.466,1.066C6.291,1.119,5.496,1.306,4.804,1.577C4.089,1.858,3.472,2.232,2.858,2.847 C2.242,3.463,1.872,4.076,1.585,4.796C1.319,5.483,1.129,6.275,1.075,7.45c-0.055,1.175-0.066,1.55-0.066,4.534 s0.011,3.359,0.066,4.534c0.053,1.175,0.244,1.967,0.51,2.654c0.287,0.72,0.657,1.334,1.273,1.949 c0.615,0.615,1.234,0.989,1.949,1.27c0.687,0.266,1.479,0.457,2.654,0.51c1.175,0.055,1.55,0.066,4.534,0.066 s3.359-0.011,4.534-0.066c1.175-0.053,1.967-0.244,2.654-0.51c0.72-0.287,1.334-0.657,1.949-1.273 c0.615-0.615,0.989-1.234,1.27-1.949c0.266-0.687,0.457-1.479,0.51-2.654C23.988,15.859,24,15.484,24,12.5 s-0.012-3.359-0.066-4.534c-0.053-1.175-0.244-1.967-0.51-2.654c-0.287-0.72-0.657-1.334-1.273-1.949 c-0.615-0.615-1.234-0.989-1.949-1.27c-0.687-0.266-1.479-0.457-2.654-0.51C15.359,1.012,14.984,1,12,1L12,1z M12,7 c-3.037,0-5.5,2.463-5.5,5.5S8.963,18,12,18s5.5-2.463,5.5-5.5S15.037,7,12,7z M12,16c-1.93,0-3.5-1.57-3.5-3.5 S10.07,9,12,9s3.5,1.57,3.5,3.5S13.93,16,12,16z M18.5,6.75c0,0.69-0.56,1.25-1.25,1.25S16,7.44,16,6.75S16.56,5.5,17.25,5.5 S18.5,6.06,18.5,6.75z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col">
          <ul className="space-y-3">
            <li><a href="#" className="text-white hover:text-gray-300 font-medium">NOS PRODUITS</a></li>
            <li><a href="#" className="text-white hover:text-gray-300 font-medium">SERVICES</a></li>
            <li><a href="#" className="text-white hover:text-gray-300 font-medium">NOS SOLUTIONS</a></li>
            <li><a href="#" className="text-white hover:text-gray-300 font-medium">À PROPOS</a></li>
            <li><a href="#" className="text-white hover:text-gray-300 font-medium">PRESSE</a></li>
            <li><a href="#" className="text-white hover:text-gray-300 font-medium">AVIS CLIENTS</a></li>
            <li><a href="#" className="text-white hover:text-gray-300 font-medium">BLOG</a></li>
            <li><a href="#" className="text-white hover:text-gray-300 font-medium">CARRIÈRES</a></li>
          </ul>
          <button className="bg-[#d94a3d] hover:bg-[#c1392e] text-white py-3 px-6 rounded transition duration-300 text-sm font-medium mt-8">
            VOIR SUR YOUTUBE
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#333333] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>© 2025. Tous droits reservés</div>
          <div className="text-white my-2 md:my-0">Nous ne vendons pas vos données personelles.</div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition">Mentions légales →</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Accessibilité</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Conditions d'utilisation</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;