
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
    <div className="relative pt-24 px-4 max-w-4xl mx-auto overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70">
          Universal Script
        </h1>
        
        <div className="grid gap-6">
          <motion.div 
            className="p-6 rounded-xl bg-gradient-to-br from-secondary/60 to-secondary/40 backdrop-blur-lg border border-primary/20 transition-all duration-300 hover:border-white/20 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">Script Hub</h2>
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
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
              </button>
            </div>
            
            <div className="bg-black/50 p-4 rounded-md overflow-x-auto max-w-full">
              <code className="text-white font-mono text-sm whitespace-pre-wrap break-all">{scriptCode}</code>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <SupportedGames />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Script;
