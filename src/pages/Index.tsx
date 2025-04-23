import { useState, useEffect } from 'react';
import Stats from '../components/Stats';
import ReviewCarousel from '../components/ReviewCarousel';
import { Star, ArrowRight, Discord } from 'lucide-react';
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

      {/* Discord Banner */}
      <div className="bg-[#1A1F2C] py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-4 mb-6 sm:mb-0">
            <Discord className="w-8 h-8 text-white" />
            <h3 className="text-2xl font-semibold text-white">Join our Discord Community</h3>
          </div>
          <a
            href="https://discord.gg/Koronis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-[#5865F2] hover:bg-[#4752C4] rounded-lg transition-colors duration-300"
          >
            Join Discord
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
