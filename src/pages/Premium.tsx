
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import { Diamond, Server, Gem, X } from 'lucide-react';

const Premium = () => {
  const { toast } = useToast();
  const [showSpecialOffer, setShowSpecialOffer] = useState(true);
  const [showFeedbackReminder, setShowFeedbackReminder] = useState(false);
  
  useEffect(() => {
    // Check localStorage for feedback reminder
    const lastVisit = localStorage.getItem('premium_last_visit');
    const now = new Date().getTime();
    
    if (lastVisit) {
      const daysSinceLastVisit = (now - parseInt(lastVisit)) / (1000 * 60 * 60 * 24);
      if (daysSinceLastVisit >= 7) {
        setShowFeedbackReminder(true);
      }
    }
    
    // Update last visit timestamp
    localStorage.setItem('premium_last_visit', now.toString());
    
    // Auto-hide special offer after 10 seconds
    const timer = setTimeout(() => {
      setShowSpecialOffer(false);
    }, 10000);
    
    return () => clearTimeout(timer);
  }, []);

  const premiumProducts = [
    {
      name: "Koronis Hub Premium",
      description: "Access to all premium features",
      options: [
        { duration: "1 Day", price: "$1.00" },
        { duration: "Lifetime", price: "$10.00" }
      ],
      icon: <Diamond className="w-6 h-6 text-blue-300/90" />,
      bgColor: "bg-blue-500/20",
      link: "https://arcstore.mysellauth.com/product/koronishub"
    },
    {
      name: "Ronin External",
      description: "External cheat solution with premium features",
      price: "$8.99",
      icon: <Gem className="w-6 h-6 text-purple-300/90" />,
      bgColor: "bg-purple-500/20",
      link: "https://arcstore.mysellauth.com/product/ronin-external"
    },
    {
      name: "Lumber Tycoon 2 Private Server",
      description: "Play Lumber Tycoon 2 on a private server with friends",
      price: "$0.99",
      icon: <Server className="w-6 h-6 text-green-300/90" />,
      bgColor: "bg-green-500/20",
      link: "https://arcstore.mysellauth.com/product/lumber-tycoon-2"
    },
    {
      name: "Fisch Private Server",
      description: "Exclusive private server access for Fisch",
      price: "$0.99",
      icon: <Server className="w-6 h-6 text-amber-300/90" />,
      bgColor: "bg-amber-500/20",
      link: "https://arcstore.mysellauth.com/product/fisch"
    }
  ];

  const handleProductClick = (link) => {
    toast({
      title: "Redirecting to Arcstore",
      description: "Taking you to the payment page...",
      duration: 3000,
    });
    window.open(link, '_blank');
  };

  const handleFeedbackClose = () => {
    setShowFeedbackReminder(false);
    localStorage.setItem('feedback_dismissed', 'true');
  };

  const handleSpecialOfferClick = () => {
    toast({
      title: "Special Offer Selected!",
      description: "Taking you to the payment page for 20,000,000 Lumber Bucks...",
      duration: 3000,
    });
    window.open("https://arcstore.mysellauth.com/product/lumberbucks", '_blank');
  };

  return (
    <div className="relative pt-24 px-4 max-w-4xl mx-auto min-h-screen">      
      <AnimatePresence>
        {showSpecialOffer && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="mx-auto w-full max-w-3xl bg-gradient-to-r from-amber-500/80 to-orange-500/80 rounded-lg shadow-2xl p-5 mb-8 backdrop-blur-md border border-yellow-400/50"
          >
            <button 
              onClick={() => setShowSpecialOffer(false)}
              className="absolute top-2 right-2 text-white/80 hover:text-white"
            >
              <X size={18} />
            </button>
            <h3 className="text-2xl font-bold text-white mb-2">🔥 SPECIAL OFFER! 🔥</h3>
            <p className="text-white/90 mb-3">20,000,000 Lumber Bucks</p>
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl font-bold text-white">$0.99</span>
              <span className="text-sm text-white/70 line-through">$4.99</span>
            </div>
            <button 
              onClick={handleSpecialOfferClick}
              className="w-full py-2 rounded-md bg-white text-orange-500 font-bold hover:bg-yellow-100 transition-colors"
            >
              Buy Now
            </button>
            <p className="text-xs text-white/70 mt-2 text-center">Limited time offer!</p>
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {showFeedbackReminder && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-5 right-5 max-w-sm bg-gradient-to-r from-blue-500/80 to-indigo-500/80 rounded-lg shadow-lg p-4 z-50 backdrop-blur-md border border-blue-400/50"
          >
            <button 
              onClick={handleFeedbackClose}
              className="absolute top-2 right-2 text-white/80 hover:text-white"
            >
              <X size={18} />
            </button>
            <h3 className="text-xl font-semibold text-white mb-2">How are you enjoying Koronis?</h3>
            <p className="text-white/90 mb-4">We'd love to hear your feedback after using our products!</p>
            <div className="flex justify-between">
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md">
                Give Feedback
              </button>
              <button className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-blue-50">
                Rate Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200"
        >
          Premium Content
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto"
        >
          Enhance your gaming experience with our premium offerings.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="max-w-3xl mx-auto grid grid-cols-1 gap-6"
      >
        <div className="mb-6 flex items-center gap-4">
          <div className="p-3 rounded-lg bg-background/20">
            <Diamond className="w-6 h-6 text-blue-300/90" />
          </div>
          <h2 className="text-2xl font-bold text-white">Premium Options</h2>
        </div>
        
        {premiumProducts.map((product, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
            className="p-5 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-lg border border-primary/15 shadow-lg hover:shadow-blue-900/5 transition-all group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${product.bgColor}`}>
                  {product.icon}
                </div>
                <div>
                  <h3 className="font-medium text-lg text-white group-hover:text-blue-200/90 transition-colors">{product.name}</h3>
                  <p className="text-sm text-gray-400">{product.description}</p>
                </div>
              </div>
              
              {product.options ? (
                <div className="text-right">
                  <div className="space-y-2">
                    {product.options.map((option, idx) => (
                      <div key={idx} className="flex flex-col items-end">
                        <span className="text-sm text-gray-300">{option.duration}</span>
                        <span className="font-bold text-xl text-white">{option.price}</span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          onClick={() => handleProductClick(product.link)}
                          className="text-sm text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full mt-1"
                        >
                          Buy Now
                        </motion.button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-right">
                  <span className="font-bold text-xl text-white">{product.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleProductClick(product.link)}
                    className="text-sm text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full mt-1 block ml-auto"
                  >
                    Buy Now
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        ))}
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-8 p-5 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-lg border border-primary/15 shadow-lg"
        >
          <p className="text-sm text-gray-400 mb-2">Premium benefits:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
            <li>Lifetime access to premium features</li>
            <li>Higher script execution priority</li>
            <li>Exclusive games and features</li>
            <li>Priority customer support</li>
            <li>Early access to new releases</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Premium;
