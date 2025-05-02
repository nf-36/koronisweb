
import { motion } from "framer-motion";
import { Gamepad } from "lucide-react";

const games = [
  "Murder Mystery 2",
  "Reborn as Swordsman",
  "Collect All Pets",
  "Grow a Garden",
  "Beak"
];

const SupportedGames = () => {
  return (
    <motion.div 
      className="p-6 rounded-lg glass-panel border border-primary/20"
      whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
    >
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Gamepad className="w-6 h-6 text-primary" />
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
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
            className="p-3 rounded bg-transparent backdrop-blur-sm border border-white/10 transition-all duration-300"
          >
            {game}
          </motion.div>
        ))}
      </div>
      <motion.p 
        className="mt-4 text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Use The Universal Script to load these games
      </motion.p>
    </motion.div>
  );
};

export default SupportedGames;
