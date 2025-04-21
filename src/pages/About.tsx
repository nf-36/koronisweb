
import { Users, Shield, Code, Heart, ExternalLink } from 'lucide-react';

const About = () => {
  const features = [
    {
      title: "Our Team",
      icon: <Users className="w-6 h-6 text-primary" />,
      description: "We are a dedicated group of developers passionate about creating the most reliable and feature-rich Roblox script hub available."
    },
    {
      title: "Security First",
      icon: <Shield className="w-6 h-6 text-primary" />,
      description: "All our scripts undergo rigorous testing to ensure they are secure, stable, and undetectable during gameplay."
    },
    {
      title: "Constant Updates",
      icon: <Code className="w-6 h-6 text-primary" />,
      description: "We pride ourselves on maintaining our scripts with regular updates to keep up with Roblox patches and security changes."
    },
    {
      title: "Community Driven",
      icon: <Heart className="w-6 h-6 text-primary" />,
      description: "Our features and improvements are guided by feedback from our active and growing community of users."
    }
  ];

  return (
    <div className="pt-24 px-4 pb-24 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white/70">About Us</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Dedicated to providing the highest quality Roblox scripts with professional support and regular updates
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="p-8 rounded-xl bg-gradient-to-br from-secondary/60 to-secondary/40 backdrop-blur-lg border border-primary/20 transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-lg bg-background/40">
                {feature.icon}
              </div>
              <h2 className="text-2xl font-bold">{feature.title}</h2>
            </div>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-background to-secondary/40 backdrop-blur-lg border border-primary/20">
        <div className="p-10">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto leading-relaxed mb-8">
            We're committed to developing and maintaining the most reliable, feature-rich, and user-friendly Roblox script hub. 
            Our goal is to enhance your gaming experience while providing excellent support and regular updates to adapt to 
            Roblox's evolving environment.
          </p>
          
          <div className="text-center">
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              <span className="mr-2">Join Our Community</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
