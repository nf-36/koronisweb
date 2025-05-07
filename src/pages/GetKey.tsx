
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import { Gamepad, Link as LinkIcon } from 'lucide-react';

const GetKey = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLinkClick = (type: string) => {
    let message = '';
    
    setIsLoading(true);
    
    if (type === 'linkvertise') {
      message = "Redirecting to Linkvertise...";
      window.open('https://linkvertise.com/koronis/key', '_blank');
    } else if (type === 'discord') {
      message = "Join our Discord to get a key!";
      window.open('https://discord.gg/Koronis', '_blank');
    }
    
    toast({
      title: "Redirecting",
      description: message,
    });
    
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="relative pt-24 px-4 max-w-4xl mx-auto min-h-screen">      
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white/70"
        >
          Get Your Key
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto"
        >
          Choose one of the methods below to get a script key.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="max-w-lg mx-auto"
      >
        <div className="p-8 rounded-xl bg-gradient-to-br from-secondary/60 to-secondary/40 backdrop-blur-lg border border-primary/20 shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-background/20">
              <Gamepad className="w-6 h-6 text-sky-300" />
            </div>
            <h2 className="text-2xl font-bold text-white">Key Options</h2>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/10 bg-background/30 hover:bg-background/40 transition-all cursor-pointer group" onClick={() => handleLinkClick('linkvertise')}>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-blue-500/30">
                  <LinkIcon className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-white group-hover:text-blue-200 transition-colors">Linkvertise</h3>
                  <p className="text-sm text-gray-400">Complete a short link to get your key</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 rounded-lg border border-white/10 bg-background/30 hover:bg-background/40 transition-all cursor-pointer group" onClick={() => handleLinkClick('discord')}>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-[#5865F2]/30">
                  <svg className="w-5 h-5 text-[#5865F2]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" fill="currentColor">
                    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-white group-hover:text-[#5865F2] transition-colors">Discord</h3>
                  <p className="text-sm text-gray-400">Join our community to get a free key</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p className="mb-2">Key information:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Keys expire after 24 hours</li>
              <li>Each key works with all supported games</li>
              <li>You will need a new key every day</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GetKey;
