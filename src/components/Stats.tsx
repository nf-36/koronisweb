import { motion } from 'framer-motion';

const stats = [
  { label: 'Active Users', value: '4,000+' },
  { label: 'Scripts Executed', value: '100,000+' },
  { label: 'Games Supported', value: '50+' },
];

const Stats = () => {
  return (
    <div className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-panel p-8 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <dt className="text-lg font-medium text-primary-light mb-2">{stat.label}</dt>
              <dd className="text-4xl font-bold tracking-tight text-white">{stat.value}</dd>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
