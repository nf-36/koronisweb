
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import SupportedGames from '../components/SupportedGames';
import { motion } from 'framer-motion';

const Script = () => {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();
  const scriptCode = `loadstring(game:HttpGet("https://raw.githubusercontent.com/nf-36/Koronis/refs/heads/main/Scripts/Loader.lua"))()`;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(scriptCode);
    setIsCopied(true);
    toast({
      title: "Copied!",
      description: "Script code has been copied to clipboard",
      duration: 2000,
    });
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative pt-24 px-4 max-w-4xl mx-auto overflow-x-hidden min-h-screen">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460] animate-gradient">
          {[...Array(100)].map((_, i) => (
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
          
          {[...Array(6)].map((_, i) => (
            <div
              key={`line-${i}`}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{
                width: '100%',
                top: `${(i + 1) * 15}%`,
                animation: `floatingLine ${8 + i * 2}s linear infinite`,
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
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300"
        >
          Universal Script
        </motion.h1>

        <motion.div 
          className="grid gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div 
            className="p-6 rounded-xl bg-gradient-to-br from-secondary/60 to-secondary/40 backdrop-blur-lg border border-primary/20 transition-all duration-300 hover:border-white/20 group"
            whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(255,255,255,0.3)" }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">Script Hub</h2>
              <motion.button
                onClick={copyToClipboard}
                className="px-4 py-2 rounded-md bg-primary/20 hover:bg-primary/30 transition-all duration-300 flex items-center gap-2 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isCopied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Code</span>
                  </>
                )}
              </motion.button>
            </div>
            
            <motion.div 
              className="bg-black/50 p-4 rounded-md overflow-x-auto max-w-full border border-white/10"
              whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              <code className="text-white font-mono text-sm whitespace-pre-wrap break-all">{scriptCode}</code>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <SupportedGames />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Script;
