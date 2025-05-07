
import { motion } from 'framer-motion';
import { Activity, Calendar, Users } from 'lucide-react';

const stats = [
  { 
    label: 'Monthly Executions', 
    value: '286K+',
    icon: <Activity className="h-6 w-6 text-white" />,
    color: 'bg-gradient-to-br from-green-400 to-green-600',
    detail: '286,947 executions this month'
  },
  { 
    label: 'Up Time', 
    value: '6 Months',
    icon: <Calendar className="h-6 w-6 text-white" />,
    color: 'bg-gradient-to-br from-sky-400 to-sky-600',
    detail: 'Online since December 2024'
  },
  { 
    label: 'Total Users', 
    value: '2,090',
    icon: <Users className="h-6 w-6 text-white" />,
    color: 'bg-gradient-to-br from-blue-400 to-blue-600',
    detail: '2,090 active users'
  },
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
              className="glass-panel rounded-xl overflow-hidden border border-sky-300/10 hover:border-sky-300/20 transition-all duration-300"
            >
              <div className="flex items-start p-6">
                <div className={`${stat.color} p-3 rounded-lg mr-4 flex items-center justify-center shadow-lg animate-pulse-slow`}>
                  {stat.icon}
                </div>
                <div className="flex-1">
                  <div className="text-gray-300 text-sm mb-1">{stat.label}</div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                </div>
              </div>
              <div className="px-6 pb-6 text-sm text-gray-400">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
