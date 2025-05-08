
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const navLinks = [
    { name: 'Script', path: '/script' },
    { name: 'Premium', path: '/premium' },
    { name: 'Get Key', path: '/get-key' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/b2b01f92-6e2a-46b9-b356-9656abef7c8c.png" 
              alt="Koronis" 
              className="h-8 w-8 rounded-md"
            />
            <span className="text-white font-bold text-xl">Koronis</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className="text-gray-300 hover:text-white font-medium transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
