import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, HoveredLink, ProductItem } from './ui/navbar-menu';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="fixed top-0 md:top-6 inset-x-0 max-w-5xl mx-auto z-50 px-2 sm:px-4 bg-[#050E3C]/95 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
      <div className="flex items-center justify-between py-3 md:py-0 mb-0 md:mb-4">
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg sm:text-xl md:text-2xl pl-2 sm:pl-4">
          NGO CONNECT
        </Link>
        <Button className="bg-[#FF3838] hover:bg-[#DC0000] text-white font-semibold text-sm px-4 py-2 md:hidden">
          Donate
        </Button>
      </div>
      
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
