import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout/Layout';
import { Button } from '../components/ui/Button';
import { BarChartIcon, BrainIcon, CalendarIcon, ClockIcon, HeartIcon, LineChartIcon, MoonIcon, SunIcon, TrendingUpIcon, BarChart2Icon, ActivityIcon } from 'lucide-react';
export function Dashboard() {
  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    })
  };
  // Stats data
  const statsData = [{
    label: 'Mindfulness Minutes',
    value: '127',
    icon: <BrainIcon className="w-5 h-5" />,
    color: 'bg-gold/10'
  }, {
    label: 'Avg. Sleep Quality',
    value: '86%',
    icon: <MoonIcon className="w-5 h-5" />,
    color: 'bg-sage/20'
  }, {
    label: 'Focus Sessions',
    value: '8',
    icon: <SunIcon className="w-5 h-5" />,
    color: 'bg-gold/10'
  }, {
    label: 'Stress Level',
    value: 'Low',
    icon: <HeartIcon className="w-5 h-5" />,
    color: 'bg-sage/20'
  }];
  // Upcoming sessions
  const upcomingSessions = [{
    title: 'Morning Meditation',
    time: '8:00 AM',
    duration: '15 min',
    type: 'Mindfulness',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
  }, {
    title: 'Deep Work Focus',
    time: '10:30 AM',
    duration: '90 min',
    type: 'Productivity',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    title: 'Evening Wind Down',
    time: '9:00 PM',
    duration: '20 min',
    type: 'Sleep',
    image: 'https://images.unsplash.com/photo-1511295742362-92c96b7d3a8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }];
  return <Layout>
      <div className="pt-24 pb-16 bg-ivory">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }}>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
                Welcome Back, <span className="text-gold">Sarah</span>
              </h1>
              <p className="text-charcoal/60 mt-2">
                Tuesday, 16 May • Let's find your balance today
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="mt-4 md:mt-0">
              <Button variant="primary" size="md">
                <CalendarIcon className="w-4 h-4 mr-2" /> Schedule Session
              </Button>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {statsData.map((stat, index) => <motion.div key={stat.label} className="bg-white rounded-xl shadow-md p-4" custom={index} initial="hidden" animate="visible" variants={fadeInVariants}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-charcoal/60 text-sm">{stat.label}</p>
                    <p className="text-charcoal font-serif text-2xl font-semibold mt-1">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`${stat.color} p-2 rounded-full`}>
                    {stat.icon}
                  </div>
                </div>
              </motion.div>)}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <motion.div className="lg:col-span-2 space-y-8" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }}>
              {/* Wellness Progress */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-serif text-xl font-semibold text-charcoal">
                    Weekly Wellness Progress
                  </h2>
                  <div className="flex space-x-2">
                    <button className="text-xs px-3 py-1 rounded-full bg-sage/10 text-charcoal">
                      Week
                    </button>
                    <button className="text-xs px-3 py-1 rounded-full bg-charcoal/5 text-charcoal/60">
                      Month
                    </button>
                  </div>
                </div>
                <div className="relative h-64 mb-4">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Weekly wellness chart visualization" className="w-full h-full object-cover rounded-lg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent rounded-lg flex items-end justify-center pb-4">
                    <div className="text-center">
                      <p className="text-charcoal font-medium">
                        Progress Trending Upward
                      </p>
                      <p className="text-charcoal/60 text-sm">
                        +12% from last week
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="flex justify-center">
                      <BrainIcon className="w-5 h-5 text-gold" />
                    </div>
                    <p className="text-charcoal font-medium mt-1">
                      Mindfulness
                    </p>
                    <p className="text-charcoal/60 text-sm">+15%</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center">
                      <ActivityIcon className="w-5 h-5 text-sage" />
                    </div>
                    <p className="text-charcoal font-medium mt-1">
                      Productivity
                    </p>
                    <p className="text-charcoal/60 text-sm">+8%</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center">
                      <MoonIcon className="w-5 h-5 text-charcoal" />
                    </div>
                    <p className="text-charcoal font-medium mt-1">Sleep</p>
                    <p className="text-charcoal/60 text-sm">+4%</p>
                  </div>
                </div>
              </div>

              {/* Recommended Programs */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="font-serif text-xl font-semibold text-charcoal mb-4">
                  Recommended for You
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden border border-sage/20 group hover:shadow-md transition-shadow">
                    <div className="relative h-36">
                      <img src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Deep Work Mastery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute top-2 right-2 bg-charcoal/80 text-ivory text-xs px-2 py-1 rounded-full">
                        4 Weeks
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-medium text-charcoal">
                        Deep Work Mastery
                      </h3>
                      <p className="text-charcoal/60 text-sm mt-1">
                        Enhance focus and productivity
                      </p>
                      <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center">
                          <SunIcon className="w-4 h-4 text-gold mr-1" />
                          <span className="text-xs text-charcoal/60">
                            Intermediate
                          </span>
                        </div>
                        <Button variant="outline" size="sm">
                          Start
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-sage/20 group hover:shadow-md transition-shadow">
                    <div className="relative h-36">
                      <img src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="Sleep Restoration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute top-2 right-2 bg-charcoal/80 text-ivory text-xs px-2 py-1 rounded-full">
                        2 Weeks
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-medium text-charcoal">
                        Sleep Restoration
                      </h3>
                      <p className="text-charcoal/60 text-sm mt-1">
                        Rebuild healthy sleep patterns
                      </p>
                      <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center">
                          <MoonIcon className="w-4 h-4 text-gold mr-1" />
                          <span className="text-xs text-charcoal/60">
                            All Levels
                          </span>
                        </div>
                        <Button variant="outline" size="sm">
                          Start
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div className="space-y-8" initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }}>
              {/* Today's Schedule */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-serif text-xl font-semibold text-charcoal">
                    Today's Schedule
                  </h2>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
                <div className="space-y-4">
                  {upcomingSessions.map((session, index) => <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-sage/5 transition-colors">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <img src={session.image} alt={session.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-charcoal">
                          {session.title}
                        </h3>
                        <div className="flex items-center text-charcoal/60 text-xs mt-1">
                          <ClockIcon className="w-3 h-3 mr-1" />
                          <span>
                            {session.time} • {session.duration}
                          </span>
                        </div>
                      </div>
                      <div className="bg-sage/10 text-charcoal/80 text-xs px-2 py-1 rounded-full">
                        {session.type}
                      </div>
                    </div>)}
                </div>
                <div className="mt-4 pt-4 border-t border-sage/10">
                  <Button to="/sessions" variant="secondary" size="sm" className="w-full">
                    Schedule New Session
                  </Button>
                </div>
              </div>

              {/* Mood Tracker */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="font-serif text-xl font-semibold text-charcoal mb-4">
                  Mood Tracker
                </h2>
                <div className="relative h-40 mb-4">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Mood tracking chart" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-charcoal font-medium">Current Mood</p>
                    <p className="text-gold font-serif text-lg">Balanced</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Update
                  </Button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-charcoal rounded-xl shadow-md p-6 text-ivory">
                <h2 className="font-serif text-xl font-semibold mb-4">
                  Quick Actions
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex flex-col items-center justify-center bg-charcoal/50 hover:bg-gold/20 transition-colors p-4 rounded-lg">
                    <BrainIcon className="w-6 h-6 text-gold mb-2" />
                    <span className="text-sm">Meditate</span>
                  </button>
                  <button className="flex flex-col items-center justify-center bg-charcoal/50 hover:bg-gold/20 transition-colors p-4 rounded-lg">
                    <SunIcon className="w-6 h-6 text-gold mb-2" />
                    <span className="text-sm">Focus</span>
                  </button>
                  <button className="flex flex-col items-center justify-center bg-charcoal/50 hover:bg-gold/20 transition-colors p-4 rounded-lg">
                    <HeartIcon className="w-6 h-6 text-gold mb-2" />
                    <span className="text-sm">Journal</span>
                  </button>
                  <button className="flex flex-col items-center justify-center bg-charcoal/50 hover:bg-gold/20 transition-colors p-4 rounded-lg">
                    <LineChartIcon className="w-6 h-6 text-gold mb-2" />
                    <span className="text-sm">Progress</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>;
}