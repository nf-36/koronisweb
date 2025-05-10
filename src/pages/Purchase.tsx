import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import { Diamond, Server, Gem, X, ChevronDown, ChevronUp } from 'lucide-react';

const RobuxIcon = ({ className }) => (
  <svg className={className} fill="white" viewBox="0 0 100 100">
    <path d="M50 0L0 25v50l50 25 50-25V25L50 0zm25 57.5l-25 12.5-25-12.5V42.5l25-12.5 25 12.5v15z" />
  </svg>
);

const Purchase = () => {
  const { toast } = useToast();
  const [showFeedbackReminder, setShowFeedbackReminder] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [showKoronisDetails, setShowKoronisDetails] = useState(false);

  useEffect(() => {
    const lastVisit = localStorage.getItem('premium_last_visit');
    const now = new Date().getTime();

    if (lastVisit) {
      const daysSinceLastVisit = (now - parseInt(lastVisit)) / (1000 * 60 * 60 * 24);
      if (daysSinceLastVisit >= 7) {
        setShowFeedbackReminder(true);
      }
    }

    localStorage.setItem('premium_last_visit', now.toString());
  }, []);

  const premiumProducts = [
    {
      name: "Ronin External",
      description: "External cheat solution with premium features",
      price: "$8.99",
      icon: <Gem className="w-8 h-8 text-purple-300" />,
      bgColor: "from-purple-500/80 to-indigo-500/80",
      isGradient: true,
      borderColor: "border-purple-400/50",
      textColor: "text-white",
      descriptionColor: "text-white/90",
      buttonBg: "bg-white text-purple-500 hover:bg-purple-100",
      link: "https://arcstore.mysellauth.com/product/ronin-external",
      isSpecial: true,
      category: "external"
    },
    {
      name: "Koronis Hub Premium",
      description: "Access to all premium features",
      options: [
        { duration: "1 Day", price: "$1.00" },
        { duration: "Lifetime", price: "$10.00" },
        {
          duration: "Lifetime",
          price: "1000 Robux",
          robux: true,
          link: "https://discord.gg/koronis"
        }
      ],
      icon: <Diamond className="w-6 h-6 text-blue-300/90" />,
      bgColor: "bg-blue-500/20",
      link: "https://arcstore.mysellauth.com/product/koronishub",
      category: "script",
      showDetailsToggle: true
    },
    {
      name: "Lumber Tycoon 2 Private Server",
      description: "Play Lumber Tycoon 2 on a private server with friends",
      price: "$0.99",
      icon: <Server className="w-6 h-6 text-green-300/90" />,
      bgColor: "bg-green-500/20",
      link: "https://arcstore.mysellauth.com/product/lumber-tycoon-2",
      category: "private"
    },
    {
      name: "Fisch Private Server",
      description: "Exclusive private server access for Fisch",
      price: "$0.99",
      icon: <Server className="w-6 h-6 text-amber-300/90" />,
      bgColor: "bg-amber-500/20",
      link: "https://arcstore.mysellauth.com/product/fisch",
      category: "private"
    }
  ];

  const categories = ["all", "script", "external", "private"];
  const filteredProducts = activeTab === "all" ? premiumProducts : premiumProducts.filter(p => p.category === activeTab);

  const handleProductClick = (link) => {
    const newTab = window.open(link, '_blank');
    if (newTab) {
      toast({
        title: "Redirecting to Arcstore",
        description: "Taking you to the payment page...",
        duration: 3000,
      });
    } else {
      toast({
        title: "Popup Blocked",
        description: "Please allow popups for this site.",
        duration: 3000,
        variant: "destructive"
      });
    }
  };

  const handleFeedbackClose = () => {
    setShowFeedbackReminder(false);
    localStorage.setItem('feedback_dismissed', 'true');
  };

  return (
    <div className="relative pt-24 px-4 max-w-4xl mx-auto min-h-screen">
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
          Purchase
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

      <div className="flex gap-2 mb-6 justify-center flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              activeTab === cat
                ? "bg-blue-500 text-white"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="max-w-3xl mx-auto grid grid-cols-1 gap-6"
      >
        {filteredProducts.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            className={`p-5 rounded-xl ${product.isGradient
              ? `bg-gradient-to-r ${product.bgColor} backdrop-blur-md border ${product.borderColor || 'border-primary/15'}`
              : `bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-lg border border-primary/15`
            } shadow-lg hover:shadow-blue-900/5 transition-all group`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${product.bgColor}`}>{product.icon}</div>
                <div>
                  <h3 className={`font-medium text-lg ${product.textColor || 'text-white group-hover:text-blue-200/90'} transition-colors`}>
                    {product.isSpecial && <span className="text-yellow-300">🔥 </span>}
                    {product.name}
                  </h3>
                  <p className={`text-sm ${product.descriptionColor || 'text-gray-400'}`}>{product.description}</p>
                </div>
              </div>

              {product.options ? (
                <div className="text-right">
                  <div className="flex space-x-4 items-center justify-end">
                    {product.options.map((option, idx) => (
                      <div key={idx} className="flex flex-col items-end">
                        <span className="text-sm text-gray-300">{option.duration}</span>
                        <span className="font-bold text-xl text-white flex items-center gap-1">
                          {option.robux && <RobuxIcon className="w-5 h-5" />}
                          {option.price}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          onClick={() => handleProductClick(option.link || product.link)}
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
                  <div className="flex flex-col items-end">
                    <span className="font-bold text-xl text-white">{product.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={() => handleProductClick(product.link)}
                      className={`text-sm px-3 py-1 rounded-full mt-1 block ml-auto ${product.buttonBg || 'text-blue-300 bg-blue-500/20'}`}
                    >
                      Buy Now
                    </motion.button>
                  </div>
                </div>
              )}
            </div>

            {product.name === "Koronis Hub Premium" && (
              <div className="mt-4">
                <button
                  onClick={() => setShowKoronisDetails(!showKoronisDetails)}
                  className="flex items-center text-sm text-blue-300 hover:underline"
                >
                  {showKoronisDetails ? <ChevronUp size={16} className="mr-1" /> : <ChevronDown size={16} className="mr-1" />}
                  {showKoronisDetails ? "Hide Details" : "More Details"}
                </button>
                <AnimatePresence>
                  {showKoronisDetails && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden mt-2 text-sm text-gray-300 space-y-1"
                    >
                      <ul className="list-disc list-inside">
                        <li>Includes all supported game scripts</li>
                        <li>Frequent feature updates and new modules</li>
                        <li>Priority execution queue</li>
                        <li>Advanced UI and customization tools</li>
                        <li>Access to exclusive betas and test builds</li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Purchase;
