
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import { Gamepad } from 'lucide-react';

const GetKey = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [key, setKey] = useState("");
  const { toast } = useToast();

  const generateKey = () => {
    setIsGenerating(true);

    // Simulate a key generation process
    setTimeout(() => {
      const newKey = "KORONIS-" + Math.random().toString(36).substring(2, 10).toUpperCase() + "-" + Math.random().toString(36).substring(2, 10).toUpperCase();
      setKey(newKey);
      setIsGenerating(false);
      toast({
        title: "Key Generated",
        description: "Your script key has been successfully generated.",
      });
    }, 1500);
  };

  const copyToClipboard = async () => {
    if (!key) return;
    await navigator.clipboard.writeText(key);
    toast({
      title: "Copied!",
      description: "Key copied to clipboard",
      duration: 2000,
    });
  };

  return (
    <div className="relative pt-24 px-4 max-w-4xl mx-auto min-h-screen">
      {/* Dark blue animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460] animate-gradient">
          {/* Animated background particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-white/10"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.3,
                  animation: `floatingParticle ${Math.random() * 15 + 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
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
          Generate a unique script key to access all our premium features.
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
            <h2 className="text-2xl font-bold text-white">Script Key Generator</h2>
          </div>
          
          {key ? (
            <>
              <div className="p-4 bg-background/30 border border-white/10 rounded-lg mb-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[line-flow_3s_linear_infinite]"></div>
                <p className="font-mono text-lg text-sky-300 break-all">{key}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={generateKey}
                  className="py-3 px-4 rounded-lg bg-sky-600/40 hover:bg-sky-600/60 text-white font-medium transition-all duration-300"
                >
                  Generate New Key
                </button>
                <button
                  onClick={copyToClipboard}
                  className="py-3 px-4 rounded-lg bg-primary/20 hover:bg-primary/40 text-white font-medium transition-all duration-300"
                >
                  Copy Key
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={generateKey}
              disabled={isGenerating}
              className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-sky-600/70 to-blue-700/70 hover:from-sky-600 hover:to-blue-700 text-white font-medium transition-all duration-300 relative overflow-hidden"
            >
              {isGenerating ? (
                <>
                  <span className="opacity-0">Generate Key</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                </>
              ) : (
                "Generate Key"
              )}
            </button>
          )}
          
          <div className="mt-8 text-sm text-gray-400">
            <p className="mb-2">Your key will:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Expire after 24 hours</li>
              <li>Work with all supported games</li>
              <li>Allow unlimited executions</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GetKey;
