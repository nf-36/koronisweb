
import { useState } from 'react';
import { Lock, Gift, Clock, ArrowRight, ExternalLink } from 'lucide-react';

const GetKey = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const keyOptions = [
    {
      id: 'linkvertise',
      title: 'Linkvertise',
      description: 'Get your key through Linkvertise',
      icon: <ExternalLink className="w-6 h-6" />,
      buttonText: 'Get Key (Linkvertise)',
      url: '#',
      popular: true
    },
    {
      id: 'lootlabs',
      title: 'LootLabs',
      description: 'Complete LootLabs tasks for access',
      icon: <Gift className="w-6 h-6" />,
      buttonText: 'Get Key (LootLabs)',
      url: '#',
      popular: false
    },
    {
      id: 'workink',
      title: 'Work.ink',
      description: 'Quick access through Work.ink',
      icon: <Link className="w-6 h-6" />,
      buttonText: 'Get Key (Work.ink)',
      url: '#',
      popular: false
    }
  ];

  return (
    <div className="pt-24 px-4 max-w-6xl mx-auto min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white/70">Get Access Key</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">Choose your preferred key type to access our Roblox script hub</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {keyOptions.map((option) => (
          <div 
            key={option.id}
            onClick={() => setSelectedOption(option.id)}
            className={`relative overflow-hidden rounded-xl p-6 transition-all duration-300 cursor-pointer ${
              selectedOption === option.id 
                ? 'border-2 border-primary bg-secondary/70 scale-105' 
                : 'border border-primary/20 bg-secondary/40 hover:bg-secondary/60'
            }`}
          >
            {option.popular && (
              <div className="absolute top-0 right-0">
                <div className="bg-primary text-background text-xs font-bold px-3 py-1 transform rotate-0 translate-x-[30%] translate-y-[30%]">
                  POPULAR
                </div>
              </div>
            )}
            
            <div className="flex flex-col items-center text-center">
              <div className={`rounded-full p-3 mb-4 ${
                selectedOption === option.id ? 'bg-primary text-white' : 'bg-secondary text-primary'
              }`}>
                {option.icon}
              </div>
              
              <h2 className="text-xl font-bold mb-2">{option.title}</h2>
              <p className="text-gray-400 mb-4">{option.description}</p>
              <div className="bg-background/30 px-4 py-1 rounded-full text-sm mb-6">
                Duration: {option.duration}
              </div>
              
              <button 
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-bold transition-all ${
                  selectedOption === option.id
                    ? 'bg-primary text-white'
                    : 'bg-secondary/80 text-white hover:bg-secondary'
                }`}
              >
                <span>{option.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-6">Need Help?</h3>
        <div className="p-6 rounded-xl bg-secondary/40 border border-primary/20 max-w-2xl mx-auto">
          <p className="text-gray-300 mb-4">
            Have questions about our key system? Visit our tutorials or join our Discord server for assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 rounded-lg border border-primary/30 hover:bg-secondary/80 transition-colors"
            >
              <span className="mr-2">Video Tutorials</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              <span className="mr-2">Join Discord</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetKey;
