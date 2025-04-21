
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Stats from '../components/Stats';
import ReviewCarousel from '../components/ReviewCarousel';
import { Star } from 'lucide-react';

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    // Mouse move effect for background particles
    const handleMouseMove = (e: MouseEvent) => {
      if (backgroundRef.current) {
        const particles = backgroundRef.current.querySelectorAll('.particle');
        particles.forEach((particle) => {
          const speed = Number((particle as HTMLElement).dataset.speed);
          const x = (window.innerWidth - e.pageX * speed) / 100;
          const y = (window.innerHeight - e.pageY * speed) / 100;
          (particle as HTMLElement).style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Animated Background */}
      <div 
        ref={backgroundRef}
        className="fixed inset-0 overflow-hidden -z-10"
      >
        <div className="absolute inset-0 grid-pattern"></div>
        <div 
          className="absolute inset-0 bg-gradient-to-br from-background via-[#1c2235] to-background animate-gradient"
        ></div>
        
        {mounted && (
          <>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="particle absolute h-64 w-64 rounded-full animate-pulse-slow"
                style={{
                  background: `radial-gradient(circle, rgba(155, 135, 245, 0.15) 0%, rgba(155, 135, 245, 0) 70%)`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
                data-speed={((i + 1) * 0.4).toFixed(1)}
              />
            ))}

            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(50)].map((_, i) => (
                <div
                  key={`star-${i}`}
                  className="absolute rounded-full bg-white animate-pulse-slow"
                  style={{
                    width: `${Math.random() * 2 + 1}px`,
                    height: `${Math.random() * 2 + 1}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.5 + 0.3,
                    animationDuration: `${Math.random() * 3 + 2}s`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Hero Section */}
      <div className="min-h-[90vh] flex flex-col items-center justify-center pt-20 px-4 relative">
        {/* Floating Elements */}
        {mounted && (
          <>
            <div className="absolute left-[10%] top-[20%] w-20 h-20 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="w-full h-full rounded-lg border border-primary/20 backdrop-blur-md bg-secondary/30 rotate-12"></div>
            </div>
            <div className="absolute right-[15%] top-[30%] w-16 h-16 animate-float" style={{ animationDelay: '1.2s' }}>
              <div className="w-full h-full rounded-full border border-primary/20 backdrop-blur-md bg-secondary/30"></div>
            </div>
            <div className="absolute left-[15%] bottom-[20%] w-24 h-24 animate-float" style={{ animationDelay: '0.8s' }}>
              <Star className="w-full h-full text-primary/20 animate-rotate" style={{ animationDuration: '15s' }} />
            </div>
          </>
        )}

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white/70 text-glow animate-pulse-slow">
            Ultimate Roblox Script Hub
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Experience the most powerful and reliable Roblox script with regular updates and premium features.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/get-key"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Access Key
            </Link>
            <Link
              to="/script"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-secondary border border-primary/30 text-white font-bold text-lg hover:bg-secondary/80 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Scripts
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <div className="w-[2px] h-12 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />

      {/* Reviews Section */}
      <div className="py-20 px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white/70">
          What Our Users Say
        </h2>
        <ReviewCarousel />
      </div>
    </div>
  );
};

export default Index;
