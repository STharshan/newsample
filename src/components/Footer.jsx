import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { footerContent } from '../global'; // adjust path if needed

const iconMap = {
  Facebook: <Facebook size={20} />,
  Instagram: <Instagram size={20} />
};

 const  socials = [
    { name: "Facebook", href: "#", icon: "Facebook" },
    { name: "Instagram", href: "#", icon: "Instagram" }
 ];

const Footer = () => {
  const { brand, office, bottomBar } = footerContent;

  return (
    <footer className="bg-black text-gray-300 py-16 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">
              {brand.title}
            </h3>
            <p className="leading-relaxed max-w-xs">{brand.description}</p>
          </div>

          {/* Office Section */}
          <div>
            <h3 className="text-white  font-bold text-lg mb-6 uppercase tracking-wider">
              {office.title}
            </h3>
            <address className="not-italic space-y-4">
              <p className='hover:text-white cursor-pointer'>{office.address}</p>
              <div className="pt-2">
                <a
                  href={`mailto:${office.email}`}
                  className=" hover:text-white transition-colors cursor-pointer wrap-break-word"
                >
                  {office.email}
                </a>
              </div>
              <p className="text-white font-bold text-xl pt-2 hover:text-white cursor-pointer">{office.phone}</p>
            </address>
          </div>

          {/* Links Section (hard-coded) */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">
              Links
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">
              Get In Touch
            </h3>
            <div className="space-y-4">
              
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  {iconMap[social.icon]}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-sm flex flex-col md:flex-row items-center justify-between">
          <p>{bottomBar.copyright}</p>
          <p>
            Powered by <a href="https://www.ansely.co.uk" target='_blank' className="text-white hover:underline">Ansely</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
