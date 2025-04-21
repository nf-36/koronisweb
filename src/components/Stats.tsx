
import { useEffect, useState } from 'react';

const Stats = () => {
  const [counts, setCounts] = useState({
    users: 0,
    executions: 0,
    rating: 0
  });

  const targetCounts = {
    users: 15000,
    executions: 100000,
    rating: 4.9
  };

  useEffect(() => {
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
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-12">
      {[
        { label: "Active Users", value: counts.users.toLocaleString() },
        { label: "Total Executions", value: counts.executions.toLocaleString() },
        { label: "User Rating", value: counts.rating.toFixed(1) }
      ].map((stat, index) => (
        <div
          key={index}
          className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 border border-primary/20 text-center"
        >
          <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
          <p className="text-gray-400 font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
