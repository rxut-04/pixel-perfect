import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-navbar shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl md:text-2xl">
            <Heart className="w-6 h-6 md:w-8 md:h-8 fill-primary-lighter text-primary-lighter" />
            NGO-CONNECT
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-primary-lighter transition-colors font-medium">
              Home
            </Link>
            <Link to="/donate" className="text-white hover:text-primary-lighter transition-colors font-medium">
              Donate
            </Link>
            <Link to="/about" className="text-white hover:text-primary-lighter transition-colors font-medium">
              About
            </Link>
            <Link to="/activities" className="text-white hover:text-primary-lighter transition-colors font-medium">
              Activities
            </Link>
            <Link to="/volunteer" className="text-white hover:text-primary-lighter transition-colors font-medium">
              Volunteer
            </Link>
            <Button variant="default" className="bg-accent hover:bg-accent/90 text-white font-semibold">
              Get Involved
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary-medium">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-white hover:text-primary-lighter transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/donate"
                className="text-white hover:text-primary-lighter transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Donate
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-primary-lighter transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/activities"
                className="text-white hover:text-primary-lighter transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Activities
              </Link>
              <Link
                to="/volunteer"
                className="text-white hover:text-primary-lighter transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Volunteer
              </Link>
              <Button variant="default" className="bg-accent hover:bg-accent/90 text-white font-semibold w-full">
                Get Involved
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
