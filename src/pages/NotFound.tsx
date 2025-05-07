
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
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8 bg-secondary/50 backdrop-blur-md rounded-xl border border-primary/20"
      >
        <motion.h1 
          className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300"
          animate={{ textShadow: ["0 0 5px rgba(33, 150, 243, 0.2)", "0 0 15px rgba(33, 150, 243, 0.4)", "0 0 5px rgba(33, 150, 243, 0.2)"] }}
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
