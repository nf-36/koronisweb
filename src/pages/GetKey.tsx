import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Gift, Clock, ArrowRight, ExternalLink, Link as LinkIcon } from 'lucide-react';

const GetKey = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const keyOptions = [
    {
      id: 'linkvertise',
      title: 'Linkvertise',
      description: 'Get your key through Linkvertise',
      icon: <ExternalLink className="w-6 h-6" />,
      buttonText: 'Get Key (Linkvertise)',
      url: 'https://ads.luarmor.net/get_key?for=Free_Linkvertise-VCrPMxzUQEDq',
      popular: true,
      estimatedTime: '1-2 minutes'
    },
    {
      id: 'lootlabs',
      title: 'LootLabs',
      description: 'Complete LootLabs tasks for access',
      icon: <Gift className="w-6 h-6" />,
      buttonText: 'Get Key (LootLabs)',
      url: 'https://ads.luarmor.net/get_key?for=Free_72H-oCmVwmZqQgsE',
      popular: false,
      estimatedTime: '2-3 minutes'
    },
    {
      id: 'workink',
      title: 'Work.ink',
      description: 'Quick access through Work.ink',
      icon: <LinkIcon className="w-6 h-6" />,
      buttonText: 'Get Key (Work.ink)',
      url: 'https://ads.luarmor.net/get_key?for=WorkInk-osqZmHsdsZVE',
      popular: false,
      estimatedTime: '1 minute'
    },
    {
      id: 'arcstore',
      title: 'Lifetime Arcstore',
      description: 'Get lifetime access through Arcstore',
      icon: <Lock className="w-6 h-6" />,
      buttonText: 'Get Key (Arcstore)',
      url: 'https://arcstore.mysellauth.com/',
      popular: false,
      estimatedTime: 'Permanent'
    }
  ];

  return (
    <div className="relative min-h-screen pt-24 px-4">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460]"></div>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get Access Key</h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">Choose your preferred key type to access our Roblox script hub</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {keyOptions.map((option) => (
          <div 
            key={option.id}
            onClick={() => setSelectedOption(option.id)}
            className={`relative overflow-hidden rounded-xl p-6 transition-all duration-300 cursor-pointer ${
              selectedOption === option.id 
                ? 'border-2 border-primary bg-secondary/70 scale-[1.02]' 
                : 'border border-primary/20 bg-secondary/40 hover:bg-secondary/60'
            }`}
          >
            {option.popular && (
              <div className="absolute top-4 right-4">
                <div className="bg-primary/90 text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
              </div>
            )}
            
            <div className="flex flex-col items-center text-center">
              <div className={`rounded-full p-3 mb-4 ${
                selectedOption === option.id ? 'bg-primary text-background' : 'bg-secondary text-primary'
              }`}>
                {option.icon}
              </div>
              
              <h2 className="text-xl font-bold mb-2 text-white">{option.title}</h2>
              <p className="text-gray-400 mb-4">{option.description}</p>
              <div className="bg-background/30 px-4 py-1 rounded-full text-sm mb-6 text-white/70">
                Duration: {option.estimatedTime}
              </div>
              
              <a 
                href={option.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-bold transition-all ${
                  selectedOption === option.id
                    ? 'bg-primary text-background hover:bg-primary/90'
                    : 'bg-secondary/80 text-white hover:bg-secondary'
                }`}
              >
                <span>{option.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-left">
            <h3 className="text-xl font-bold mb-4 text-white">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Discord Server</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              </li>
            </ul>
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/script" className="text-gray-400 hover:text-white transition-colors">Get Script</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetKey;
