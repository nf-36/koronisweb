
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Stats from '../components/Stats';
import ReviewCarousel from '../components/ReviewCarousel';

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1f2c_2px,transparent_2px),linear-gradient(to_bottom,#1a1f2c_2px,transparent_2px)] bg-[size:24px_24px]" />
          <div className={`absolute inset-0 opacity-20 transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute h-32 w-32 bg-primary/30 rounded-full filter blur-3xl animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Ultimate Roblox Script Hub
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the most powerful and reliable Roblox script with regular updates and premium features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-key"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
            >
              Get Access Key
            </Link>
            <Link
              to="/script"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-secondary border border-primary/20 text-white font-semibold hover:bg-secondary/80 transition-colors"
            >
              View Scripts
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />

      {/* Reviews Section */}
      <div className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        <ReviewCarousel />
      </div>
    </div>
  );
};

export default Index;
