
import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import { Diamond, ShoppingCart, Server, Gem } from 'lucide-react';

const Premium = () => {
  const { toast } = useToast();

  const premiumProducts = [
    {
      name: "Koronis Hub Premium",
      description: "Access to all premium features",
      price: "$19.99",
      icon: <Diamond className="w-6 h-6 text-blue-300/90" />,
      bgColor: "bg-blue-500/20",
      link: "https://arcstore.mysellauth.com/product/koronishub"
    },
    {
      name: "Ronin External",
      description: "External cheat solution with premium features",
      price: "$24.99",
      icon: <Gem className="w-6 h-6 text-purple-300/90" />,
      bgColor: "bg-purple-500/20",
      link: "https://arcstore.mysellauth.com/product/ronin-external"
    },
    {
      name: "Lumber Tycoon 2 Private Server",
      description: "Play Lumber Tycoon 2 on a private server with friends",
      price: "$9.99",
      icon: <Server className="w-6 h-6 text-green-300/90" />,
      bgColor: "bg-green-500/20",
      link: "https://arcstore.mysellauth.com/product/lumber-tycoon-2"
    },
    {
      name: "Fisch Private Server",
      description: "Exclusive private server access for Fisch",
      price: "$7.99",
      icon: <Server className="w-6 h-6 text-amber-300/90" />,
      bgColor: "bg-amber-500/20",
      link: "https://arcstore.mysellauth.com/product/fisch"
    },
    {
      name: "Lumber Bucks",
      description: "2,500 Lumber Bucks for in-game purchases",
      price: "$4.99",
      icon: <ShoppingCart className="w-6 h-6 text-emerald-300/90" />,
      bgColor: "bg-emerald-500/20",
      link: "https://arcstore.mysellauth.com/product/lumberbucks"
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

  return (
    <div className="relative pt-24 px-4 max-w-4xl mx-auto min-h-screen">      
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
            onClick={() => handleProductClick(product.link)}
            className="p-5 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-lg border border-primary/15 shadow-lg hover:shadow-blue-900/5 transition-all cursor-pointer group"
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
              <div className="text-right">
                <span className="font-bold text-xl text-white">{product.price}</span>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-sm text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full mt-1"
                >
                  Buy Now
                </motion.div>
              </div>
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
