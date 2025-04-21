
import { useState, useEffect } from 'react';
import Stats from '../components/Stats';
import ReviewCarousel from '../components/ReviewCarousel';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Animated Background with Lines */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="background-grid opacity-20"></div>
        
        {/* Animated Lines */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform"
              style={{
                top: `${(i + 1) * 16}%`,
                animationDelay: `${i * 2}s`,
                animation: 'floatingLine 8s ease-in-out infinite'
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 px-4">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-float">
            <Star className="w-12 h-12 text-white mx-auto mb-4" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white animate-fade-in">
            Koronis Script Hub
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the most reliable and powerful Roblox script hub. 
            Supporting a wide range of popular games with regular updates.
          </p>

          <Link 
            to="/script" 
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary/10 hover:bg-primary/20 rounded-lg border border-white/10 transition-all duration-300 hover:scale-105"
          >
            Explore Scripts
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />

      {/* Reviews Section */}
      <div className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          What Our Users Say
        </h2>
        <ReviewCarousel />
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-secondary/40 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                <Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
                <Link to="/script" className="text-white/70 hover:text-white transition-colors">Script</Link>
                <Link to="/get-key" className="text-white/70 hover:text-white transition-colors">Get Key</Link>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Community</h3>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-white/70 hover:text-white transition-colors">Discord</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">YouTube</a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Support</h3>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-white/70 hover:text-white transition-colors">FAQ</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Documentation</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Legal</h3>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
