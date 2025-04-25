
import { useState, useEffect } from 'react';
import Stats from '../components/Stats';
import ReviewCarousel from '../components/ReviewCarousel';
import { Star, ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { motion } from 'framer-motion';

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();
  const [lastNotificationTime, setLastNotificationTime] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);

    const checkForNotification = () => {
      const currentTime = Date.now();
      
      if (!lastNotificationTime || (currentTime - lastNotificationTime > 120000)) {
        if (Math.random() < 0.2) {
          toast({
            title: "Join Our Community!",
            description: "Connect with other script users on Discord",
            action: (
              <Link 
                to="https://discord.gg/Koronis" 
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-3 py-1 rounded-md text-xs transition-colors"
              >
                Join Now
              </Link>
            ),
            duration: 10000,
          });
          setLastNotificationTime(currentTime);
        }
      }
    };

    const intervalId = setInterval(checkForNotification, 60000);

    return () => clearInterval(intervalId);
  }, [lastNotificationTime, toast]);

  return (
    <div className="overflow-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden animated-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a]">
          {[...Array(100)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="star"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
          
          {[...Array(8)].map((_, i) => (
            <div
              key={`line-${i}`}
              className="animated-line"
              style={{
                top: `${(i + 1) * 12}%`,
                animationDelay: `${i * 1}s`
              }}
            />
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col items-center justify-center pt-20 px-4"
      >
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div 
            className="mb-8 animate-float"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Star className="w-12 h-12 text-white mx-auto mb-4 filter drop-shadow-lg" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300"
          >
            Koronis Script Hub
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the most reliable and powerful Roblox script hub. 
            Supporting a wide range of popular games with regular updates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link 
              to="/script" 
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary/10 hover:bg-primary/20 rounded-lg border border-white/10 transition-all duration-300 backdrop-blur-md shadow-lg"
            >
              Explore Scripts
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <Stats />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">
          What Our Users Say
        </h2>
        <ReviewCarousel />
      </motion.div>

      <div className="relative overflow-hidden bg-gradient-to-r from-primary-dark/30 to-primary/30 py-12 border-t border-primary/20">
        <div className="absolute inset-0 -z-10">
          {[...Array(5)].map((_, i) => (
            <div 
              key={`banner-line-${i}`} 
              className="absolute h-[1px] w-[200%] bg-gradient-to-r from-transparent via-[#5865F2]/30 to-transparent"
              style={{ 
                top: `${(i + 1) * 20}%`, 
                left: '-50%',
                animation: `floatingLine ${10 + i * 3}s linear infinite`,
              }}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between relative z-10"
        >
          <div className="flex items-center gap-4 mb-6 sm:mb-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <MessageSquare className="w-8 h-8 text-[#5865F2]" />
            </motion.div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Join our Discord Community</h3>
              <p className="text-white/70">Connect with other script users and get help</p>
            </div>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://discord.gg/Koronis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-[#5865F2] hover:bg-[#4752C4] rounded-lg transition-colors duration-300 shadow-lg"
          >
            Join Discord
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
