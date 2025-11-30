import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, HoveredLink, ProductItem } from './ui/navbar-menu';
import { Menu as MenuIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="fixed top-0 md:top-6 inset-x-0 max-w-5xl mx-auto z-50 px-2 sm:px-4 bg-[#050E3C]/95 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
      <div className="flex items-center justify-between py-3 md:py-0 mb-0 md:mb-4">
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg sm:text-xl md:text-2xl pl-2 sm:pl-4">
          NGO CONNECT
        </Link>
        <div className="flex items-center gap-2">
          <Button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-transparent hover:bg-[#002455] text-white p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </Button>
          <Button className="bg-[#FF3838] hover:bg-[#DC0000] text-white font-semibold text-sm px-4 py-2 md:hidden">
            Donate
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-container fixed inset-0 top-[60px] md:hidden bg-[#050E3C] z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-4">
            <Link 
              to="/" 
              className="block text-white hover:text-[#FF3838] font-medium py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="border-t border-white/20 pt-4">
              <button
                onClick={() => setActive(active === 'Get Involved' ? null : 'Get Involved')}
                className="w-full flex items-center justify-between text-white hover:text-[#FF3838] font-medium py-2 text-lg"
              >
                Get Involved
                <span className={cn("transition-transform", active === 'Get Involved' && "rotate-180")}>▼</span>
              </button>
              {active === 'Get Involved' && (
                <div className="pl-4 mt-2 space-y-3">
                  <Link to="/donate" className="block text-white/80 hover:text-[#FF3838] py-2" onClick={() => setMobileMenuOpen(false)}>Make a Donation</Link>
                  <Link to="/volunteer" className="block text-white/80 hover:text-[#FF3838] py-2" onClick={() => setMobileMenuOpen(false)}>Become a Volunteer</Link>
                  <Link to="/fundraise" className="block text-white/80 hover:text-[#FF3838] py-2" onClick={() => setMobileMenuOpen(false)}>Start a Fundraiser</Link>
                  <Link to="/corporate" className="block text-white/80 hover:text-[#FF3838] py-2" onClick={() => setMobileMenuOpen(false)}>Corporate Partnership</Link>
                </div>
              )}
            </div>

            <div className="border-t border-white/20 pt-4">
              <button
                onClick={() => setActive(active === 'Our Impact' ? null : 'Our Impact')}
                className="w-full flex items-center justify-between text-white hover:text-[#FF3838] font-medium py-2 text-lg"
              >
                Our Impact
                <span className={cn("transition-transform", active === 'Our Impact' && "rotate-180")}>▼</span>
              </button>
              {active === 'Our Impact' && (
                <div className="pl-4 mt-2 space-y-3">
                  <Link to="/impact/food" className="block text-white/80 hover:text-[#FF3838] py-2" onClick={() => setMobileMenuOpen(false)}>Food Distribution</Link>
                  <Link to="/impact/education" className="block text-white/80 hover:text-[#FF3838] py-2" onClick={() => setMobileMenuOpen(false)}>Education Support</Link>
                  <Link to="/impact/medical" className="block text-white/80 hover:text-[#FF3838] py-2" onClick={() => setMobileMenuOpen(false)}>Medical Care</Link>
                  <Link to="/impact/community" className="block text-white/80 hover:text-[#FF3838] py-2" onClick={() => setMobileMenuOpen(false)}>Community Development</Link>
                </div>
              )}
            </div>

            <div className="border-t border-white/20 pt-4">
              <button
                onClick={() => setActive(active === 'About' ? null : 'About')}
                className="w-full flex items-center justify-between text-white hover:text-[#FF3838] font-medium py-2 text-lg"
              >
                About
                <span className={cn("transition-transform", active === 'About' && "rotate-180")}>▼</span>
              </button>
              {active === 'About' && (
                <div className="pl-4 mt-2 space-y-3">
                  <Link to="/about" className="block text-white/80 hover:text-[#FF3838] py-2" onClick={() => setMobileMenuOpen(false)}>Our Story</Link>
                  <Link to="/team" className="block text-white/80 hover:text-[#FF3838] py-2" onClick={() => setMobileMenuOpen(false)}>Our Team</Link>
                  <Link to="/activities" className="block text-white/80 hover:text-[#FF3838] py-2" onClick={() => setMobileMenuOpen(false)}>Activities & Events</Link>
                  <Link to="/transparency" className="block text-white/80 hover:text-[#FF3838] py-2" onClick={() => setMobileMenuOpen(false)}>Financial Transparency</Link>
                  <Link to="/contact" className="block text-white/80 hover:text-[#FF3838] py-2" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                </div>
              )}
            </div>

            <div className="border-t border-white/20 pt-4">
              <Link to="/donate" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-[#FF3838] hover:bg-[#DC0000] text-white font-semibold w-full">
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <Menu setActive={setActive}>
          <Link to="/" className="text-foreground hover:opacity-90 font-medium">
            Home
          </Link>
          
          <MenuItem setActive={setActive} active={active} item="Get Involved">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink to="/donate">Make a Donation</HoveredLink>
              <HoveredLink to="/volunteer">Become a Volunteer</HoveredLink>
              <HoveredLink to="/fundraise">Start a Fundraiser</HoveredLink>
              <HoveredLink to="/corporate">Corporate Partnership</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Our Impact">
            <div className="text-sm grid grid-cols-2 gap-6 p-4">
              <ProductItem
                title="Food Distribution"
                href="/impact/food"
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=200&fit=crop"
                description="Providing meals to 10,000+ families monthly"
              />
              <ProductItem
                title="Education Support"
                href="/impact/education"
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=200&fit=crop"
                description="Scholarships and learning resources for children"
              />
              <ProductItem
                title="Medical Care"
                href="/impact/medical"
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=400&h=200&fit=crop"
                description="Free health clinics and emergency assistance"
              />
              <ProductItem
                title="Community Development"
                href="/impact/community"
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=200&fit=crop"
                description="Building sustainable local infrastructure"
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink to="/about">Our Story</HoveredLink>
              <HoveredLink to="/team">Our Team</HoveredLink>
              <HoveredLink to="/activities">Activities & Events</HoveredLink>
              <HoveredLink to="/transparency">Financial Transparency</HoveredLink>
              <HoveredLink to="/contact">Contact Us</HoveredLink>
            </div>
          </MenuItem>

          <Link to="/donate">
            <Button className="bg-[#FF3838] hover:bg-[#DC0000] text-white font-semibold">
              Donate Now
            </Button>
          </Link>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
