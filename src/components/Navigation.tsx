
import { Link } from 'react-router-dom';

const Navigation = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Script', path: '/script' },
    { name: 'Get Key', path: '/get-key' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#1A1F2C]/80 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white font-bold text-xl">
            Koronis
          </Link>
          
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-white font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
