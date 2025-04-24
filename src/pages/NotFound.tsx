
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Animated Background with Stars and Lines */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460]">
          {/* Moving stars (dots) */}
          {[...Array(50)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + 1 + 'px',
                height: Math.random() * 2 + 1 + 'px',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
                animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite`
              }}
            />
          ))}
          
          {/* Moving lines */}
          {[...Array(4)].map((_, i) => (
            <div
              key={`line-${i}`}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{
                width: '100%',
                top: `${(i + 1) * 20}%`,
                animation: `floatingLine ${8 + i * 2}s linear infinite`,
                animationDelay: `${i * 1}s`
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8 bg-black/30 backdrop-blur-md rounded-xl border border-white/10"
      >
        <motion.h1 
          className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300"
          animate={{ textShadow: ["0 0 5px rgba(255,255,255,0.2)", "0 0 15px rgba(255,255,255,0.4)", "0 0 5px rgba(255,255,255,0.2)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          404
        </motion.h1>
        <p className="text-xl text-white/80 mb-6">Oops! Page not found</p>
        <motion.a 
          href="/" 
          className="text-blue-400 hover:text-blue-300 underline text-lg transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          Return to Home
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
