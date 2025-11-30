import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HandHeart, Users, TrendingUp, Clock, Heart, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PixelTrail } from '@/components/ui/pixel-trail';
import { Logos3 } from '@/components/ui/logos3';
import { AnimatedHikeCard, Stat } from '@/components/ui/card-25';
import { CpuArchitecture } from '@/components/ui/cpu-architecture';
import { useScreenSize } from '@/hooks/use-screen-size';

const Index = () => {
  const screenSize = useScreenSize();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  
  const quotes = [
    "The best way to find yourself is to lose yourself in the service of others.",
    "God has given us two hands: one to receive with and the other to give with.",
    "Your little help can make a big difference.",
    "Happiness is not so much in having as sharing. We make a living by what we get, but we make a life by what we gave."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000); // Change quote every 4 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Pixel Trail */}
      <section className="relative w-full h-full min-h-screen bg-gradient-to-br from-[#050E3C] via-[#002455] to-[#050E3C] text-white flex flex-col font-calendas pt-24 sm:pt-28 md:pt-40">
        {/* Pixel Trail Background */}
        <div className="absolute inset-0 z-0">
          <PixelTrail
            pixelSize={screenSize.lessThan('md') ? 48 : 80}
            fadeDuration={0}
            delay={1200}
            pixelClassName="rounded-full bg-[#FF3838]"
          />
        </div>
        
        <div className="justify-center items-center flex flex-col w-full h-full z-10 pointer-events-none space-y-2 md:space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl cursor-pointer tracking-tight text-center pt-4 sm:pt-6 md:pt-8 lg:pt-16 px-4"
          >
            Connecting Hearts ✽ Transforming Lives
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs sm:text-sm md:text-xl lg:text-2xl text-center px-4 sm:px-6"
          >
            with compassion, action, and hope.
          </motion.p>
          
          {/* Rotating Quotes */}
          <div className="min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[150px] flex items-center justify-center px-4 sm:px-6 mt-3 sm:mt-4 md:mt-6 lg:mt-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentQuoteIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center max-w-5xl italic font-bold text-white font-calendas leading-relaxed px-2"
              >
                "{quotes[currentQuoteIndex]}"
              </motion.p>
            </AnimatePresence>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pointer-events-auto mt-6 sm:mt-8 px-4"
          >
            <Button 
              size="lg" 
              className="bg-[#FF3838] hover:bg-[#DC0000] text-white font-semibold px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 text-base sm:text-lg md:text-xl shadow-lg w-full sm:w-auto"
            >
              Donate Now
            </Button>
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 font-semibold px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 text-base sm:text-lg md:text-xl border-2 border-black w-full sm:w-auto"
            >
              Learn More
            </Button>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute text-xs sm:text-sm md:text-base bottom-2 sm:bottom-4 right-2 sm:right-4 pointer-events-none z-10 text-white/80 px-2"
        >
          make the world better together.
        </motion.p>
      </section>

      {/* Partners & Supporters */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <Logos3
          heading="Our Trusted Partners & Supporters"
          logos={[
            {
              id: "partner-1",
              description: "Corporate Partner 1",
              image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
              className: "h-12 w-auto grayscale hover:grayscale-0 transition-all",
            },
            {
              id: "partner-2",
              description: "Corporate Partner 2",
              image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop",
              className: "h-12 w-auto grayscale hover:grayscale-0 transition-all",
            },
            {
              id: "partner-3",
              description: "Corporate Partner 3",
              image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=100&fit=crop",
              className: "h-12 w-auto grayscale hover:grayscale-0 transition-all",
            },
            {
              id: "partner-4",
              description: "Corporate Partner 4",
              image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=200&h=100&fit=crop",
              className: "h-12 w-auto grayscale hover:grayscale-0 transition-all",
            },
            {
              id: "partner-5",
              description: "Corporate Partner 5",
              image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=200&h=100&fit=crop",
              className: "h-12 w-auto grayscale hover:grayscale-0 transition-all",
            },
            {
              id: "partner-6",
              description: "Corporate Partner 6",
              image: "https://images.unsplash.com/photo-1556761175-b4c9f883e73b?w=200&h=100&fit=crop",
              className: "h-12 w-auto grayscale hover:grayscale-0 transition-all",
            },
            {
              id: "partner-7",
              description: "Corporate Partner 7",
              image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=100&fit=crop",
              className: "h-12 w-auto grayscale hover:grayscale-0 transition-all",
            },
            {
              id: "partner-8",
              description: "Corporate Partner 8",
              image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop",
              className: "h-12 w-auto grayscale hover:grayscale-0 transition-all",
            },
          ]}
        />
      </section>

      {/* Ways to Help */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 px-4">
              Ways to Make a Difference
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Choose how you'd like to contribute to our mission
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <AnimatedHikeCard
                title="Donate"
                images={[
                  "https://images.unsplash.com/photo-1554224154-26032d6c4f9a?q=80&w=2070&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2070&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop",
                ]}
                stats={[
                  {
                    icon: <DollarSign className="h-4 w-4" />,
                    label: "Any Amount",
                  },
                  {
                    icon: <Heart className="h-4 w-4" />,
                    label: "Make Impact",
                  },
                  {
                    icon: <Clock className="h-4 w-4" />,
                    label: "One-Time",
                  },
                ] as Stat[]}
                description="Your financial contribution helps us provide essential resources to those in need. Every dollar makes a difference."
                href="/donate"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <AnimatedHikeCard
                title="Volunteer"
                images={[
                  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2070&auto=format&fit=crop",
                ]}
                stats={[
                  {
                    icon: <Users className="h-4 w-4" />,
                    label: "Join Team",
                  },
                  {
                    icon: <Clock className="h-4 w-4" />,
                    label: "Flexible Hours",
                  },
                  {
                    icon: <Heart className="h-4 w-4" />,
                    label: "Make Change",
                  },
                ] as Stat[]}
                description="Share your time and skills with our community. Join a passionate team making real change happen."
                href="/volunteer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <AnimatedHikeCard
                title="Spread the Word"
                images={[
                  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2070&auto=format&fit=crop",
                ]}
                stats={[
                  {
                    icon: <TrendingUp className="h-4 w-4" />,
                    label: "Share Mission",
                  },
                  {
                    icon: <Users className="h-4 w-4" />,
                    label: "Build Community",
                  },
                  {
                    icon: <Heart className="h-4 w-4" />,
                    label: "Inspire Others",
                  },
                ] as Stat[]}
                description="Help us reach more people by sharing our mission with your network and community."
                href="/share"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with CPU Architecture */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-[#050E3C] via-[#002455] to-[#050E3C]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-6 sm:mb-8 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
                Ready to Make an Impact?
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-200 leading-relaxed">
                Your support can change lives. Join our community of changemakers today 
                and help us build a better tomorrow for those who need it most.
              </p>
            </div>
            <div className="flex justify-center items-center p-2 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm overflow-hidden">
              <div className="w-full h-[200px] sm:h-[250px] md:h-[300px]">
                <CpuArchitecture 
                  text="IMPACT"
                  width="100%"
                  height="100%"
                  className="text-white"
                  animateText={true}
                  animateLines={true}
                  animateMarkers={true}
                  showCpuConnections={true}
                />
              </div>
            </div>
            <div className="text-center mt-6 sm:mt-8 px-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-xl w-full sm:w-auto"
              >
                Get Started Today
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
