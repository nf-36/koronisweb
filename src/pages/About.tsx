
import { Users, Shield, Code, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      title: "Our Team",
      icon: <Users className="w-6 h-6 text-blue-300/90" />,
      description: "We are a dedicated group of developers passionate about creating the most reliable and feature-rich Roblox script hub available."
    },
    {
      title: "Security First",
      icon: <Shield className="w-6 h-6 text-blue-300/90" />,
      description: "All our scripts undergo rigorous testing to ensure they are secure, stable, and undetectable during gameplay."
    },
    {
      title: "Constant Updates",
      icon: <Code className="w-6 h-6 text-blue-300/90" />,
      description: "We pride ourselves on maintaining our scripts with regular updates to keep up with Roblox patches and security changes."
    },
    {
      title: "Community Driven",
      icon: <Heart className="w-6 h-6 text-blue-300/90" />,
      description: "Our features and improvements are guided by feedback from our active and growing community of users."
    }
  ];

  return (
    <div className="relative pt-24 px-4 pb-24 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">About Us</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Dedicated to providing the highest quality Roblox scripts with professional support and regular updates
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.7 }}
            className="p-8 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-lg border border-primary/15 transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-lg bg-background/30">
                {feature.icon}
              </div>
              <h2 className="text-2xl font-bold">{feature.title}</h2>
            </div>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
