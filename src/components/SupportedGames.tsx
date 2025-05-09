
import { motion } from "framer-motion";
import { Gamepad, Flame } from "lucide-react";
import { useState, useEffect } from "react";

// Updated games list
const games = [
  "Grow a Garden",
  "Beaks",
  "Grow a Tree",
  "Jailbreak",
  "Murder Mystery 2",
  "Collect all Pets",
  "Zombies RNG"
];

const SupportedGames = () => {
  const [fireIconGames, setFireIconGames] = useState<string[]>([]);
  
  // Set fire icons for Beaks and Grow A Garden
  useEffect(() => {
    setFireIconGames(["Beaks", "Grow a Garden"]);
  }, []);

  return (
    <motion.div 
      className="p-6 rounded-lg glass-panel border border-sky-300/20"
      whileHover={{ borderColor: "rgba(186, 230, 253, 0.4)" }}
    >
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Gamepad className="w-6 h-6 text-sky-300" />
        </motion.div>
        <h2 className="text-2xl font-bold text-white">Supported Games</h2>
      </div>
      
      <div className="grid gap-3">
        {games.map((game, index) => (
          <motion.div
            key={game}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(186, 230, 253, 0.1)" }}
            className="p-3 rounded bg-transparent backdrop-blur-sm border border-sky-300/10 transition-all duration-300 flex justify-between items-center"
          >
            <span>{game}</span>
            {fireIconGames.includes(game) && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring" }}
              >
                <Flame className="w-5 h-5 text-orange-500" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
      <motion.p 
        className="mt-4 text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Games not listed on this page may work with our Universal.
      </motion.p>
    </motion.div>
  );
};

export default SupportedGames;
