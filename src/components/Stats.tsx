import { useEffect, useState, useRef } from 'react';
import { Users, PlayCircle, Star } from 'lucide-react';

const Stats = () => {
  const [counts, setCounts] = useState({
    users: 0,
    executions: 0,
    rating: 0
  });

  const targetCounts = {
    users: 5000,
    executions: 25000,
    rating: 4.8
  };

  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;

    const counter = setInterval(() => {
      setCounts(prev => ({
        users: Math.min(prev.users + Math.ceil(targetCounts.users / steps), targetCounts.users),
        executions: Math.min(prev.executions + Math.ceil(targetCounts.executions / steps), targetCounts.executions),
        rating: Math.min(prev.rating + (targetCounts.rating / steps), targetCounts.rating)
      }));
    }, interval);

    return () => clearInterval(counter);
  }, [isVisible]);

  const stats = [
    { 
      icon: <Users className="w-8 h-8 text-primary" />,
      label: "Active Users", 
      value: counts.users.toLocaleString(),
      bgClass: "bg-gradient-to-br from-secondary/60 to-secondary/40"
    },
    { 
      icon: <PlayCircle className="w-8 h-8 text-primary" />,
      label: "Total Executions", 
      value: counts.executions.toLocaleString(),
      bgClass: "bg-gradient-to-br from-secondary/60 to-background/60" 
    },
    { 
      icon: <Star className="w-8 h-8 text-primary" />,
      label: "User Rating", 
      value: counts.rating.toFixed(1),
      bgClass: "bg-gradient-to-br from-secondary/40 to-secondary/60" 
    }
  ];

  return (
    <div 
      ref={statsRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-20"
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.bgClass} backdrop-blur-lg rounded-xl p-8 border border-primary/20 text-center transform transition-all duration-500 hover:scale-105 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          <div className="flex justify-center mb-4">{stat.icon}</div>
          <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary mb-2">{stat.value}</h3>
          <p className="text-gray-400 font-medium text-lg">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
