import React from 'react';
import { Footer as FooterComponent } from './ui/footer';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const handleNewsletterSubscribe = async (email: string): Promise<boolean> => {
    console.log(`Subscribing ${email}...`);
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // Simulate a 70% success rate
    if (Math.random() > 0.3) {
      console.log(`Successfully subscribed ${email}!`);
      return true;
    } else {
      console.error(`Failed to subscribe ${email}.`);
      return false;
    }
  };

  const socialLinksData = [
    { 
      label: 'Facebook', 
      href: 'https://facebook.com', 
      icon: <Facebook className="h-5 w-5" /> 
    },
    { 
      label: 'Instagram', 
      href: 'https://instagram.com', 
      icon: <Instagram className="h-5 w-5" /> 
    },
    { 
      label: 'Twitter (X)', 
      href: 'https://twitter.com', 
      icon: <Twitter className="h-5 w-5" /> 
    },
    { 
      label: 'LinkedIn', 
      href: 'https://linkedin.com', 
      icon: <Linkedin className="h-5 w-5" /> 
    },
  ];

  return (
    <FooterComponent
      logoSrc="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=256&h=256&fit=crop&crop=entropy"
      companyName="NGO CONNECT"
      description="Connecting hearts, transforming lives. We bridge the gap between those who want to help and those who need it most. Together, we create lasting change in our communities."
      usefulLinks={[
        { label: 'Home', href: '/' },
        { label: 'Donate', href: '/donate' },
        { label: 'Volunteer', href: '/volunteer' },
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ]}
      socialLinks={socialLinksData}
      newsletterTitle="Subscribe our newsletter"
      onSubscribe={handleNewsletterSubscribe}
    />
  );
};

export default Footer;
