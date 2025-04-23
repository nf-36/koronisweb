
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

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
    <div className="pt-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70 animate-fade-in">
        Available Scripts
      </h1>
      
      <div className="grid gap-6 animate-fade-in">
        <div className="p-6 rounded-lg bg-[#1A1F2C]/80 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:border-white/20 group">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">Koronis Script Hub</h2>
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center gap-2 group-hover:scale-105"
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
          
          <div className="bg-black/50 p-4 rounded-md overflow-x-auto whitespace-pre-wrap break-words max-w-full">
            <code className="text-white font-mono text-sm">{scriptCode}</code>
          </div>
          
          <div className="mt-4 text-gray-400">
            <p>Supports multiple Roblox games with regular updates and optimized performance.</p>
          </div>

          <div className="absolute inset-0 -z-10 animate-pulse-slow opacity-50">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent animate-gradient" />
          </div>
        </div>
      </div>

      <div className="animated-line bottom-0 left-0" />
    </div>
  );
};

export default Script;
