
import { motion } from "framer-motion";

const games = [
  "Murder Mystery 2",
  "Reborn as Swordsman",
  "Collect All Pets",
  "Grow a Garden",
  "Beak"
];

const SupportedGames = () => {
  return (
    <div className="p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10">
      <h2 className="text-2xl font-bold mb-4 text-white">Supported Games</h2>
      <div className="grid gap-3">
        {games.map((game, index) => (
          <motion.div
            key={game}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-3 rounded bg-white/5 backdrop-blur-sm border border-white/10"
          >
            {game}
          </motion.div>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-400">Use The Universal Script to load these games</p>
    </div>
  );
};

export default SupportedGames;
