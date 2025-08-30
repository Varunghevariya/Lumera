import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout/Layout';
import { Button } from '../components/ui/Button';
import { BellIcon, BrainIcon, CalendarIcon, CreditCardIcon, EditIcon, LineChartIcon, LogOutIcon, MoonIcon, SettingsIcon, SunIcon, UserIcon, HeartIcon, CheckIcon, StarIcon, BadgeIcon, TrophyIcon } from 'lucide-react';
export function Profile() {
  const [activeTab, setActiveTab] = useState('overview');
  // User data
  const userData = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    joinDate: 'May 2023',
    plan: 'Premium Annual',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  };
  // Stats data
  const statsData = [{
    label: 'Mindfulness Minutes',
    value: '1,248',
    icon: <BrainIcon className="w-5 h-5 text-gold" />
  }, {
    label: 'Focus Sessions',
    value: '37',
    icon: <SunIcon className="w-5 h-5 text-gold" />
  }, {
    label: 'Sleep Quality',
    value: '86%',
    icon: <MoonIcon className="w-5 h-5 text-gold" />
  }, {
    label: 'Stress Level',
    value: 'Low',
    icon: <HeartIcon className="w-5 h-5 text-gold" />
  }];
  // Progress data
  const progressData = [{
    program: 'Mindfulness Fundamentals',
    progress: 85,
    total: 14,
    completed: 12
  }, {
    program: 'Deep Work Protocol',
    progress: 60,
    total: 10,
    completed: 6
  }, {
    program: 'Sleep Restoration',
    progress: 40,
    total: 12,
    completed: 5
  }];
  // Achievements data
  const achievementsData = [{
    title: 'Mindfulness Master',
    description: 'Completed 30 consecutive days of meditation',
    icon: <BrainIcon className="w-6 h-6 text-gold" />,
    date: 'June 15, 2023',
    unlocked: true
  }, {
    title: 'Focus Champion',
    description: 'Achieved 10 deep work sessions in a week',
    icon: <SunIcon className="w-6 h-6 text-gold" />,
    date: 'July 3, 2023',
    unlocked: true
  }, {
    title: 'Sleep Optimizer',
    description: 'Maintained consistent sleep schedule for 14 days',
    icon: <MoonIcon className="w-6 h-6 text-gold" />,
    date: 'Not yet unlocked',
    unlocked: false
  }, {
    title: 'Stress Warrior',
    description: 'Reduced stress levels by 30% over 30 days',
    icon: <HeartIcon className="w-6 h-6 text-gold" />,
    date: 'Not yet unlocked',
    unlocked: false
  }];
  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return <Layout>
      <div className="pt-24 pb-16 bg-ivory">
        <div className="container mx-auto px-4 md:px-6">
          {/* Profile Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <motion.div className="flex items-center" initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5
            }}>
                <div className="relative mr-4">
                  <img src={userData.profileImage} alt={userData.name} className="w-20 h-20 rounded-full object-cover border-2 border-gold" />
                  <button className="absolute bottom-0 right-0 bg-white p-1 rounded-full border border-sage/20 shadow-sm">
                    <EditIcon className="w-3 h-3 text-charcoal/70" />
                  </button>
                </div>
                <div>
                  <h1 className="font-serif text-2xl md:text-3xl font-bold text-charcoal">
                    {userData.name}
                  </h1>
                  <p className="text-charcoal/60">{userData.email}</p>
                  <div className="flex items-center mt-1 text-sm text-charcoal/60">
                    <span className="flex items-center">
                      <BadgeIcon className="w-3 h-3 mr-1" />
                      {userData.plan}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <CalendarIcon className="w-3 h-3 mr-1" />
                      Member since {userData.joinDate}
                    </span>
                  </div>
                </div>
              </motion.div>
              <motion.div className="mt-4 md:mt-0 flex space-x-2" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }}>
                <Button variant="outline" size="sm">
                  <SettingsIcon className="w-4 h-4 mr-2" /> Settings
                </Button>
                <Button variant="secondary" size="sm">
                  <LogOutIcon className="w-4 h-4 mr-2" /> Sign Out
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Stats Overview */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8" variants={containerVariants} initial="hidden" animate="visible">
            {statsData.map((stat, index) => <motion.div key={stat.label} className="bg-white rounded-xl shadow-md p-5" variants={itemVariants}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-charcoal/70 text-sm">{stat.label}</h3>
                  {stat.icon}
                </div>
                <p className="font-serif text-2xl font-semibold text-charcoal">
                  {stat.value}
                </p>
              </motion.div>)}
          </motion.div>

          {/* Tabs Navigation */}
          <div className="flex border-b border-sage/30 mb-8 overflow-x-auto pb-1">
            <button className={`py-2 px-4 font-medium text-sm border-b-2 transition-colors whitespace-nowrap ${activeTab === 'overview' ? 'border-gold text-charcoal' : 'border-transparent text-charcoal/60 hover:text-charcoal'}`} onClick={() => setActiveTab('overview')}>
              Overview
            </button>
            <button className={`py-2 px-4 font-medium text-sm border-b-2 transition-colors whitespace-nowrap ${activeTab === 'progress' ? 'border-gold text-charcoal' : 'border-transparent text-charcoal/60 hover:text-charcoal'}`} onClick={() => setActiveTab('progress')}>
              Progress & Goals
            </button>
            <button className={`py-2 px-4 font-medium text-sm border-b-2 transition-colors whitespace-nowrap ${activeTab === 'achievements' ? 'border-gold text-charcoal' : 'border-transparent text-charcoal/60 hover:text-charcoal'}`} onClick={() => setActiveTab('achievements')}>
              Achievements
            </button>
            <button className={`py-2 px-4 font-medium text-sm border-b-2 transition-colors whitespace-nowrap ${activeTab === 'account' ? 'border-gold text-charcoal' : 'border-transparent text-charcoal/60 hover:text-charcoal'}`} onClick={() => setActiveTab('account')}>
              Account Settings
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[500px]">
            {/* Overview Tab */}
            {activeTab === 'overview' && <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5
          }}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Weekly Summary */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="font-serif text-xl font-semibold text-charcoal">
                          Weekly Summary
                        </h2>
                        <div className="flex space-x-2">
                          <button className="text-xs px-3 py-1 rounded-full bg-sage/10 text-charcoal">
                            This Week
                          </button>
                          <button className="text-xs px-3 py-1 rounded-full bg-charcoal/5 text-charcoal/60">
                            Last Week
                          </button>
                        </div>
                      </div>
                      <div className="relative h-64 mb-4">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Weekly wellness chart visualization" className="w-full h-full object-cover rounded-lg" />
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
                            <SunIcon className="w-5 h-5 text-gold" />
                          </div>
                          <p className="text-charcoal font-medium mt-1">
                            Focus
                          </p>
                          <p className="text-charcoal/60 text-sm">+8%</p>
                        </div>
                        <div className="text-center">
                          <div className="flex justify-center">
                            <MoonIcon className="w-5 h-5 text-gold" />
                          </div>
                          <p className="text-charcoal font-medium mt-1">
                            Sleep
                          </p>
                          <p className="text-charcoal/60 text-sm">+4%</p>
                        </div>
                      </div>
                    </div>
                    {/* Current Programs */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="font-serif text-xl font-semibold text-charcoal">
                          Current Programs
                        </h2>
                        <Button variant="outline" size="sm">
                          View All
                        </Button>
                      </div>
                      <div className="space-y-6">
                        {progressData.map((program, index) => <div key={index} className="border-b border-sage/10 last:border-b-0 pb-6 last:pb-0">
                            <div className="flex justify-between items-center mb-2">
                              <h3 className="font-medium text-charcoal">
                                {program.program}
                              </h3>
                              <span className="text-sm text-charcoal/60">
                                {program.completed}/{program.total} Sessions
                              </span>
                            </div>
                            <div className="w-full bg-sage/10 rounded-full h-2 mb-2">
                              <div className="bg-gold h-2 rounded-full" style={{
                          width: `${program.progress}%`
                        }}></div>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-charcoal/60">
                                {program.progress}% Complete
                              </span>
                              <Button variant="outline" size="sm">
                                Continue
                              </Button>
                            </div>
                          </div>)}
                      </div>
                    </div>
                  </div>
                  {/* Right Column */}
                  <div className="space-y-8">
                    {/* Upcoming Sessions */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="font-serif text-xl font-semibold text-charcoal">
                          Upcoming Sessions
                        </h2>
                        <Button variant="outline" size="sm">
                          <CalendarIcon className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="space-y-4">
                        <div className="p-3 rounded-lg hover:bg-sage/5 transition-colors">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-medium text-charcoal">
                              Morning Meditation
                            </h3>
                            <span className="text-xs bg-sage/10 text-charcoal/80 px-2 py-1 rounded-full">
                              Today
                            </span>
                          </div>
                          <div className="flex items-center text-charcoal/60 text-xs">
                            <CalendarIcon className="w-3 h-3 mr-1" />
                            <span>8:00 AM • 15 min</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg hover:bg-sage/5 transition-colors">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-medium text-charcoal">
                              Deep Work Focus
                            </h3>
                            <span className="text-xs bg-sage/10 text-charcoal/80 px-2 py-1 rounded-full">
                              Today
                            </span>
                          </div>
                          <div className="flex items-center text-charcoal/60 text-xs">
                            <CalendarIcon className="w-3 h-3 mr-1" />
                            <span>10:30 AM • 90 min</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg hover:bg-sage/5 transition-colors">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-medium text-charcoal">
                              Evening Wind Down
                            </h3>
                            <span className="text-xs bg-sage/10 text-charcoal/80 px-2 py-1 rounded-full">
                              Today
                            </span>
                          </div>
                          <div className="flex items-center text-charcoal/60 text-xs">
                            <CalendarIcon className="w-3 h-3 mr-1" />
                            <span>9:00 PM • 20 min</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-sage/10">
                        <Button variant="secondary" size="sm" className="w-full">
                          Schedule New Session
                        </Button>
                      </div>
                    </div>
                    {/* Recent Achievements */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="font-serif text-xl font-semibold text-charcoal">
                          Recent Achievements
                        </h2>
                        <Button variant="outline" size="sm">
                          View All
                        </Button>
                      </div>
                      <div className="space-y-4">
                        {achievementsData.filter(a => a.unlocked).slice(0, 2).map((achievement, index) => <div key={index} className="flex items-center p-3 rounded-lg bg-sage/5">
                              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mr-3">
                                {achievement.icon}
                              </div>
                              <div>
                                <h3 className="font-medium text-charcoal text-sm">
                                  {achievement.title}
                                </h3>
                                <p className="text-charcoal/60 text-xs">
                                  {achievement.date}
                                </p>
                              </div>
                            </div>)}
                      </div>
                    </div>
                    {/* Wellness Tip */}
                    <div className="bg-charcoal rounded-xl shadow-md p-6 text-ivory">
                      <h2 className="font-serif text-xl font-semibold mb-3">
                        Daily Wellness Tip
                      </h2>
                      <p className="text-ivory/80 text-sm mb-4">
                        "Take a 5-minute break every hour during focused work
                        sessions. Stand up, stretch, and look at something in
                        the distance to reduce eye strain and maintain
                        productivity."
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-ivory/60">
                          May 16, 2023
                        </span>
                        <button className="text-gold hover:text-gold/80 transition-colors text-sm">
                          Next Tip →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>}

            {/* Progress & Goals Tab */}
            {activeTab === 'progress' && <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5
          }} className="bg-white rounded-xl shadow-md p-8">
                <h2 className="font-serif text-2xl font-semibold text-charcoal mb-6">
                  Your Progress & Goals
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-charcoal mb-4">
                      Monthly Progress
                    </h3>
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Monthly progress chart" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-charcoal mb-4">
                      Current Goals
                    </h3>
                    <div className="space-y-4">
                      <div className="border border-sage/20 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-charcoal">
                            Daily Meditation
                          </h4>
                          <span className="text-xs bg-gold/10 text-charcoal px-2 py-1 rounded-full">
                            In Progress
                          </span>
                        </div>
                        <p className="text-sm text-charcoal/70 mb-3">
                          Meditate for at least 10 minutes every day
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-charcoal/60">
                            18/30 days completed
                          </span>
                          <div className="w-24 bg-sage/10 rounded-full h-2">
                            <div className="bg-gold h-2 rounded-full" style={{
                          width: '60%'
                        }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="border border-sage/20 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-charcoal">
                            Reduce Screen Time
                          </h4>
                          <span className="text-xs bg-gold/10 text-charcoal px-2 py-1 rounded-full">
                            In Progress
                          </span>
                        </div>
                        <p className="text-sm text-charcoal/70 mb-3">
                          Limit screen time to under 6 hours daily
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-charcoal/60">
                            12/30 days completed
                          </span>
                          <div className="w-24 bg-sage/10 rounded-full h-2">
                            <div className="bg-gold h-2 rounded-full" style={{
                          width: '40%'
                        }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="border border-sage/20 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-charcoal">
                            Regular Sleep Schedule
                          </h4>
                          <span className="text-xs bg-sage/10 text-charcoal/80 px-2 py-1 rounded-full">
                            Not Started
                          </span>
                        </div>
                        <p className="text-sm text-charcoal/70 mb-3">
                          Maintain consistent sleep/wake times
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-charcoal/60">
                            0/14 days completed
                          </span>
                          <div className="w-24 bg-sage/10 rounded-full h-2">
                            <div className="bg-gold h-2 rounded-full" style={{
                          width: '0%'
                        }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-sage/20 pt-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-serif text-lg font-semibold text-charcoal">
                      Wellness Insights
                    </h3>
                    <div className="flex space-x-2">
                      <button className="text-xs px-3 py-1 rounded-full bg-sage/10 text-charcoal">
                        Month
                      </button>
                      <button className="text-xs px-3 py-1 rounded-full bg-charcoal/5 text-charcoal/60">
                        Quarter
                      </button>
                      <button className="text-xs px-3 py-1 rounded-full bg-charcoal/5 text-charcoal/60">
                        Year
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-sage/5 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-charcoal">
                          Mindfulness Growth
                        </h4>
                        <BrainIcon className="w-5 h-5 text-gold" />
                      </div>
                      <p className="text-3xl font-serif font-semibold text-charcoal mb-1">
                        +42%
                      </p>
                      <p className="text-sm text-charcoal/70">
                        Your mindfulness practice has grown significantly over
                        the past month.
                      </p>
                    </div>
                    <div className="bg-sage/5 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-charcoal">
                          Focus Improvement
                        </h4>
                        <SunIcon className="w-5 h-5 text-gold" />
                      </div>
                      <p className="text-3xl font-serif font-semibold text-charcoal mb-1">
                        +28%
                      </p>
                      <p className="text-sm text-charcoal/70">
                        Your ability to maintain focus has improved this month.
                      </p>
                    </div>
                    <div className="bg-sage/5 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-charcoal">
                          Stress Reduction
                        </h4>
                        <HeartIcon className="w-5 h-5 text-gold" />
                      </div>
                      <p className="text-3xl font-serif font-semibold text-charcoal mb-1">
                        -35%
                      </p>
                      <p className="text-sm text-charcoal/70">
                        Your reported stress levels have decreased since last
                        month.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button variant="primary" size="md">
                    <LineChartIcon className="w-4 h-4 mr-2" /> View Detailed
                    Analytics
                  </Button>
                </div>
              </motion.div>}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5
          }}>
                <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-serif text-2xl font-semibold text-charcoal">
                      Your Achievements
                    </h2>
                    <div className="flex items-center text-charcoal/60 text-sm">
                      <TrophyIcon className="w-4 h-4 mr-2 text-gold" />
                      <span>2/8 Unlocked</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievementsData.map((achievement, index) => <div key={index} className={`border rounded-lg p-5 ${achievement.unlocked ? 'border-gold/30 bg-gold/5' : 'border-sage/20 bg-sage/5 opacity-70'}`}>
                        <div className="flex items-start">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${achievement.unlocked ? 'bg-gold/20' : 'bg-charcoal/10'}`}>
                            {achievement.icon}
                          </div>
                          <div>
                            <div className="flex items-center mb-1">
                              <h3 className="font-serif font-semibold text-charcoal mr-2">
                                {achievement.title}
                              </h3>
                              {achievement.unlocked && <div className="bg-gold/20 p-1 rounded-full">
                                  <CheckIcon className="w-3 h-3 text-gold" />
                                </div>}
                            </div>
                            <p className="text-sm text-charcoal/70 mb-2">
                              {achievement.description}
                            </p>
                            <p className="text-xs text-charcoal/60">
                              {achievement.unlocked ? `Unlocked: ${achievement.date}` : achievement.date}
                            </p>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </div>
                <div className="bg-charcoal rounded-xl shadow-md p-8 text-ivory">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0">
                      <h3 className="font-serif text-xl font-semibold mb-2">
                        Upcoming Achievements
                      </h3>
                      <p className="text-ivory/70 max-w-xl">
                        Continue your wellness journey to unlock more
                        achievements and track your progress.
                      </p>
                    </div>
                    <Button variant="primary" size="md">
                      <StarIcon className="w-4 h-4 mr-2" /> View All
                      Achievements
                    </Button>
                  </div>
                </div>
              </motion.div>}

            {/* Account Settings Tab */}
            {activeTab === 'account' && <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5
          }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Profile Settings */}
                <div className="md:col-span-2 bg-white rounded-xl shadow-md p-8">
                  <h2 className="font-serif text-2xl font-semibold text-charcoal mb-6">
                    Profile Settings
                  </h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-charcoal/70 mb-1">
                          First Name
                        </label>
                        <input type="text" id="firstName" defaultValue="Sarah" className="w-full px-4 py-2 rounded-lg border border-sage/30 focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-charcoal/70 mb-1">
                          Last Name
                        </label>
                        <input type="text" id="lastName" defaultValue="Johnson" className="w-full px-4 py-2 rounded-lg border border-sage/30 focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal/70 mb-1">
                        Email Address
                      </label>
                      <input type="email" id="email" defaultValue="sarah.johnson@example.com" className="w-full px-4 py-2 rounded-lg border border-sage/30 focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50" />
                    </div>
                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium text-charcoal/70 mb-1">
                        Bio
                      </label>
                      <textarea id="bio" rows={3} defaultValue="Marketing professional and wellness enthusiast. Working on building better digital habits and finding balance in a connected world." className="w-full px-4 py-2 rounded-lg border border-sage/30 focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50"></textarea>
                    </div>
                    <div>
                      <label htmlFor="timezone" className="block text-sm font-medium text-charcoal/70 mb-1">
                        Timezone
                      </label>
                      <select id="timezone" className="w-full px-4 py-2 rounded-lg border border-sage/30 focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50">
                        <option>Pacific Time (PT)</option>
                        <option>Mountain Time (MT)</option>
                        <option>Central Time (CT)</option>
                        <option>Eastern Time (ET)</option>
                      </select>
                    </div>
                    <div className="pt-4 border-t border-sage/20 flex justify-end">
                      <Button variant="primary" size="md">
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </div>
                {/* Sidebar Settings */}
                <div className="space-y-6">
                  {/* Subscription */}
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="font-serif text-lg font-semibold text-charcoal mb-4">
                      Subscription
                    </h3>
                    <div className="bg-gold/10 border border-gold/20 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-charcoal">
                          Premium Annual
                        </h4>
                        <span className="text-xs bg-gold/20 text-charcoal px-2 py-1 rounded-full">
                          Active
                        </span>
                      </div>
                      <p className="text-sm text-charcoal/70 mb-1">
                        $99.99/year
                      </p>
                      <p className="text-xs text-charcoal/60">
                        Renews on May 16, 2024
                      </p>
                    </div>
                    <div className="space-y-3">
                      <Button variant="outline" size="sm" className="w-full">
                        <CreditCardIcon className="w-4 h-4 mr-2" /> Manage
                        Payment
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        Change Plan
                      </Button>
                    </div>
                  </div>
                  {/* Notifications */}
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-serif text-lg font-semibold text-charcoal">
                        Notifications
                      </h3>
                      <BellIcon className="w-5 h-5 text-charcoal/70" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-charcoal">
                            Session Reminders
                          </p>
                          <p className="text-xs text-charcoal/60">
                            Get notified before scheduled sessions
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" checked className="sr-only peer" />
                          <div className="w-9 h-5 bg-sage/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-sage/30 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gold"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-charcoal">
                            Weekly Summary
                          </p>
                          <p className="text-xs text-charcoal/60">
                            Receive weekly progress reports
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" checked className="sr-only peer" />
                          <div className="w-9 h-5 bg-sage/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-sage/30 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gold"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-charcoal">
                            New Content
                          </p>
                          <p className="text-xs text-charcoal/60">
                            Be notified about new programs and sessions
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-9 h-5 bg-sage/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-sage/30 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gold"></div>
                        </label>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-sage/10">
                      <Button variant="outline" size="sm" className="w-full">
                        Notification Settings
                      </Button>
                    </div>
                  </div>
                  {/* Security */}
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="font-serif text-lg font-semibold text-charcoal mb-4">
                      Security
                    </h3>
                    <div className="space-y-3">
                      <Button variant="outline" size="sm" className="w-full">
                        Change Password
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        Two-Factor Authentication
                      </Button>
                      <Button variant="secondary" size="sm" className="w-full">
                        <LogOutIcon className="w-4 h-4 mr-2" /> Sign Out
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>}
          </div>
        </div>
      </div>
    </Layout>;
}