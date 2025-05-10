import { motion } from "framer-motion";
import { Gamepad, Flame, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const games = [
  {
    name: "Grow a Garden",
    features: [
      "Auto Plant", 
      "Auto Sell", 
      "Auto Harvest",
      "Harvest Aura",
      "Fly Hack",
      "Auto Eggs",
      "Auto Seeds",
      "Anti AFK",
      "More"
    ],
  },
  {
    name: "Beaks",
    features: [
      "Auto Catch", 
      "Auto Sell", 
      "Auto Darts",
      "Auto Wishing Well",
      "Spoof Region",
      "Teleports"
    ],
  },
  {
    name: "Grow a Tree",
    features: [
      "Auto Chop", 
      "Auto Pickup",
      "Auto Seeds",
      "Auto Plant",
      "Auto Sell"
    ],
  },
  {
    name: "Jailbreak",
    features: [
      "Speed", 
      "Gravity", 
      "No Ragdoll",
      "No Fall Damage",
      "No Parachute",
      "Noclip",
      "Give Gun",
      "Silent Aim"
    ],
  },
  {
    name: "Murder Mystery 2",
    features: [
      "Auto Collect Coins", 
      "Auto Kill Murderer", 
      "Walkspeed",
      "Jump Power",
      "Lock Position"
    ],
  },
  {
    name: "Collect all Pets",
    features: [
      "Auto Collect Drops", 
      "Auto Egg", 
      "Instant Mythical",
      "Auto Upgrades",
      "Auto Quests",
      "Auto Rebirth",
      "Auto Rejoin",
      "Anti AFK",
      "Webhooks",
    ],
  },
  {
    name: "Zombies RNG",
    features: [
      "Godmode (Semi)", 
      "Auto Kill", 
      "Fly Hack",
      "Auto Roll",
      "Auto Buy Potions",
      "Auto Use Potions"
    ],
  },
];

const fireGames = ["Beaks", "Grow a Garden"];

const SupportedGames = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
        {games.map((game, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className="rounded bg-transparent backdrop-blur-sm border border-sky-300/10 transition-all duration-300 p-3"
            >
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-white">
                  {game.name}
                  {fireGames.includes(game.name) && (
                    <Flame className="w-4 h-4 text-orange-500" />
                  )}
                </span>
                <button
                  onClick={() => toggle(index)}
                  className="flex items-center text-sm text-blue-300 hover:underline"
                >
                  {isOpen ? (
                    <ChevronUp size={16} className="mr-1" />
                  ) : (
                    <ChevronDown size={16} className="mr-1" />
                  )}
                  {isOpen ? "Hide Features" : "More Info"}
                </button>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mt-2 text-sm text-gray-300 space-y-1"
                  >
                    <ul className="list-disc list-inside">
                      {game.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

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
