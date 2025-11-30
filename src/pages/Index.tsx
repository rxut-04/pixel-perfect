import React from 'react';
import { motion } from 'framer-motion';
import { Heart, HandHeart, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg-light-blue via-background to-bg-very-light-blue pt-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDc3Y2MiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtOC4yNjIgNi43MzgtMTUgMTUtMTVzMTUgNi43MzggMTUgMTUtNi43MzggMTUtMTUgMTUtMTUtNi43MzgtMTUtMTV6TTAgMTZjMC04LjI2MiA2LjczOC0xNSAxNS0xNXMxNSA2LjczOCAxNSAxNS02LjczOCAxNS0xNSAxNVM0IDI0LjI2MiA0IDE2em0wIDI4YzAtOC4yNjIgNi43MzgtMTUgMTUtMTVzMTUgNi43MzggMTUgMTUtNi43MzggMTUtMTUgMTVTMCA1Mi4yNjIgMCA0NHptMzYgMGMwLTguMjYyIDYuNzM4LTE1IDE1LTE1czE1IDYuNzM4IDE1IDE1LTYuNzM4IDE1LTE1IDE1LTE1LTYuNzM4LTE1LTE1eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <Heart className="w-16 h-16 md:w-20 md:h-20 text-accent fill-accent" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Connecting Hearts,
              <br />
              <span className="text-accent">Transforming Lives</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join us in making a difference. Every donation, every volunteer hour, 
              every act of kindness brings hope to those who need it most.
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg shadow-elevated"
              >
                Donate Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary-lighter">50K+</div>
              <div className="text-lg text-gray-200">Lives Impacted</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary-lighter">1,200+</div>
              <div className="text-lg text-gray-200">Volunteers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary-lighter">$2M+</div>
              <div className="text-lg text-gray-200">Funds Raised</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
              Ways to Make a Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose how you'd like to contribute to our mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 h-full shadow-smooth hover:shadow-elevated transition-all duration-300 border-2 hover:border-accent">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <HandHeart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Donate</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Your financial contribution helps us provide essential resources to those in need. 
                  Every dollar makes a difference.
                </p>
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
                  Give Today
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 h-full shadow-smooth hover:shadow-elevated transition-all duration-300 border-2 hover:border-accent">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Volunteer</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Share your time and skills with our community. Join a passionate team making real change happen.
                </p>
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
                  Join Us
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-8 h-full shadow-smooth hover:shadow-elevated transition-all duration-300 border-2 hover:border-accent">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Spread the Word</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Help us reach more people by sharing our mission with your network and community.
                </p>
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
                  Share Now
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-medium text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
              Your support can change lives. Join our community of changemakers today 
              and help us build a better tomorrow for those who need it most.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-6 text-lg shadow-xl"
            >
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
