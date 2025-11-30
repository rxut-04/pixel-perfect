import React from 'react';
import { PixelTrail } from './ui/pixel-trail';
import { useScreenSize } from '@/hooks/use-screen-size';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const screenSize = useScreenSize();

  return (
    <footer className="relative w-full bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <PixelTrail
          pixelSize={screenSize.lessThan('md') ? 48 : 80}
          fadeDuration={0}
          delay={1200}
          pixelClassName="rounded-full bg-primary-lighter"
        />
      </div>

      <div className="relative z-10 pointer-events-none">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="pointer-events-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                NGO-CONNECT
              </h2>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-sm">
                Connecting hearts, transforming lives. We bridge the gap between those who want to help 
                and those who need it most. Together, we create lasting change in our communities.
              </p>
            </div>

            <div className="pointer-events-auto">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="/" 
                    className="text-sm md:text-base text-gray-200 hover:text-primary-lighter transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="/donate" 
                    className="text-sm md:text-base text-gray-200 hover:text-primary-lighter transition-colors duration-300"
                  >
                    Donate
                  </a>
                </li>
                <li>
                  <a 
                    href="/about" 
                    className="text-sm md:text-base text-gray-200 hover:text-primary-lighter transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="/activities" 
                    className="text-sm md:text-base text-gray-200 hover:text-primary-lighter transition-colors duration-300"
                  >
                    Activities
                  </a>
                </li>
                <li>
                  <a 
                    href="/volunteer" 
                    className="text-sm md:text-base text-gray-200 hover:text-primary-lighter transition-colors duration-300"
                  >
                    Volunteer
                  </a>
                </li>
              </ul>
            </div>

            <div className="pointer-events-auto">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary-lighter mt-1 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-200">
                    info@ngoconnect.org
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary-lighter mt-1 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-200">
                    +1 (555) 123-4567
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-lighter mt-1 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-200">
                    123 Charity Street,<br />
                    Community City, CC 12345
                  </span>
                </li>
              </ul>
            </div>

            <div className="pointer-events-auto">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">
                Follow Us
              </h3>
              <p className="text-sm md:text-base text-gray-200 mb-4">
                Stay connected with us on social media
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-medium hover:bg-primary-light flex items-center justify-center transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-medium hover:bg-primary-light flex items-center justify-center transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-medium hover:bg-primary-light flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-medium hover:bg-primary-light flex items-center justify-center transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-primary-medium">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs md:text-sm text-gray-300 text-center md:text-left">
                © {new Date().getFullYear()} NGO-CONNECT. All rights reserved.
              </p>
              <div className="flex gap-4 text-xs md:text-sm text-gray-300">
                <a 
                  href="/privacy" 
                  className="hover:text-primary-lighter transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <span>|</span>
                <a 
                  href="/terms" 
                  className="hover:text-primary-lighter transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
