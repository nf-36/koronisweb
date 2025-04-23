
import { Link } from 'react-router-dom';

const Navigation = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Script', path: '/script' },
    { name: 'Get Key', path: '/get-key' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/481d6f3d-4eae-4f17-97c1-29a328b4c60f.png" 
              alt="Koronis" 
              className="h-8 w-8"
            />
            <span className="text-white font-bold text-xl">Koronis</span>
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
