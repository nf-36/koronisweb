
import { useState, useEffect, useRef } from 'react';
import Stats from '../components/Stats';
import ReviewCarousel from '../components/ReviewCarousel';
import { Star } from 'lucide-react';

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="background-grid"></div>
        
        {/* Animated Lines */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="animated-line"
            style={{
              top: `${(i + 1) * 20}%`,
              animationDelay: `${i * 1.5}s`
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background"></div>
      </div>

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 px-4 relative">
        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white animate-fade-in">
            Koronis Script Hub
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            The most powerful and reliable Roblox script with regular updates and premium features.
            Supporting a wide range of popular Roblox games.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />

      {/* Reviews Section */}
      <div className="py-20 px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          What Our Users Say
        </h2>
        <ReviewCarousel />
      </div>
    </div>
  );
};

export default Index;
