import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout/Layout';
import { Button } from '../components/ui/Button';
import { BrainIcon, CalendarIcon, CheckIcon, ClockIcon, HeartIcon, MoonIcon, PlayIcon, PlusIcon, SunIcon, StarIcon, UserIcon, UsersIcon } from 'lucide-react';
export function Sessions() {
  const [activeTab, setActiveTab] = useState('upcoming');
  // Upcoming sessions data
  const upcomingSessions = [{
    id: 1,
    title: 'Morning Mindfulness',
    type: 'Meditation',
    category: 'mindfulness',
    duration: '15 min',
    date: 'Today',
    time: '8:00 AM',
    instructor: 'Dr. Emma Chen',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80'
  }, {
    id: 2,
    title: 'Deep Work Focus Block',
    type: 'Productivity',
    category: 'productivity',
    duration: '90 min',
    date: 'Today',
    time: '10:30 AM',
    instructor: 'Self-guided',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: 3,
    title: 'Evening Wind Down',
    type: 'Sleep',
    category: 'sleep',
    duration: '20 min',
    date: 'Today',
    time: '9:00 PM',
    instructor: 'Dr. Michael Torres',
    image: 'https://images.unsplash.com/photo-1511295742362-92c96b7d3a8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }, {
    id: 4,
    title: 'Stress Reduction',
    type: 'Meditation',
    category: 'stress',
    duration: '25 min',
    date: 'Tomorrow',
    time: '12:15 PM',
    instructor: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }];
  // Recommended sessions data
  const recommendedSessions = [{
    id: 101,
    title: 'Body Scan Meditation',
    type: 'Meditation',
    category: 'mindfulness',
    duration: '18 min',
    instructor: 'Dr. Emma Chen',
    rating: 4.9,
    reviewCount: 1248,
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
  }, {
    id: 102,
    title: 'Productivity Power Hour',
    type: 'Focus',
    category: 'productivity',
    duration: '60 min',
    instructor: 'Alex Rivera',
    rating: 4.8,
    reviewCount: 876,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: 103,
    title: 'Sleep Preparation Ritual',
    type: 'Sleep',
    category: 'sleep',
    duration: '30 min',
    instructor: 'Dr. Michael Torres',
    rating: 4.9,
    reviewCount: 2134,
    image: 'https://images.unsplash.com/photo-1511295742362-92c96b7d3a8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }, {
    id: 104,
    title: 'Anxiety Relief Breathing',
    type: 'Breathing',
    category: 'stress',
    duration: '12 min',
    instructor: 'Sarah Johnson',
    rating: 4.7,
    reviewCount: 1587,
    image: 'https://images.unsplash.com/photo-1474418397713-2f1091953f6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1153&q=80'
  }, {
    id: 105,
    title: 'Loving-Kindness Meditation',
    type: 'Meditation',
    category: 'mindfulness',
    duration: '22 min',
    instructor: 'Dr. Emma Chen',
    rating: 4.8,
    reviewCount: 943,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80'
  }, {
    id: 106,
    title: 'Evening Reflection',
    type: 'Journaling',
    category: 'mindfulness',
    duration: '15 min',
    instructor: 'Self-guided',
    rating: 4.6,
    reviewCount: 756,
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }];
  // Live sessions data
  const liveSessions = [{
    id: 201,
    title: 'Group Meditation',
    type: 'Live Session',
    category: 'mindfulness',
    startTime: '2:00 PM',
    duration: '45 min',
    participants: 28,
    maxParticipants: 30,
    instructor: 'Dr. Emma Chen',
    image: 'https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: 202,
    title: 'Stress Management Workshop',
    type: 'Live Session',
    category: 'stress',
    startTime: '4:30 PM',
    duration: '60 min',
    participants: 15,
    maxParticipants: 25,
    instructor: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1573497491765-55d5bce8bc9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
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
  // Category icon mapping
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'mindfulness':
        return <BrainIcon className="w-4 h-4 text-gold" />;
      case 'productivity':
        return <SunIcon className="w-4 h-4 text-gold" />;
      case 'sleep':
        return <MoonIcon className="w-4 h-4 text-gold" />;
      case 'stress':
        return <HeartIcon className="w-4 h-4 text-gold" />;
      default:
        return <BrainIcon className="w-4 h-4 text-gold" />;
    }
  };
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
                Wellness <span className="text-gold">Sessions</span>
              </h1>
              <p className="text-charcoal/60 mt-2">
                Schedule and join guided sessions for your wellness journey
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="mt-4 md:mt-0">
              <Button variant="primary" size="md">
                <PlusIcon className="w-4 h-4 mr-2" /> Schedule Session
              </Button>
            </motion.div>
          </div>

          {/* Session Tabs */}
          <motion.div className="flex border-b border-sage/30 mb-8" initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }}>
            <button className={`py-3 px-5 font-medium text-sm border-b-2 transition-colors ${activeTab === 'upcoming' ? 'border-gold text-charcoal' : 'border-transparent text-charcoal/60 hover:text-charcoal'}`} onClick={() => setActiveTab('upcoming')}>
              Upcoming
            </button>
            <button className={`py-3 px-5 font-medium text-sm border-b-2 transition-colors ${activeTab === 'recommended' ? 'border-gold text-charcoal' : 'border-transparent text-charcoal/60 hover:text-charcoal'}`} onClick={() => setActiveTab('recommended')}>
              Recommended
            </button>
            <button className={`py-3 px-5 font-medium text-sm border-b-2 transition-colors ${activeTab === 'live' ? 'border-gold text-charcoal' : 'border-transparent text-charcoal/60 hover:text-charcoal'}`} onClick={() => setActiveTab('live')}>
              Live Now
            </button>
          </motion.div>

          {/* Upcoming Sessions */}
          {activeTab === 'upcoming' && <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <div className="mb-8 flex justify-between items-center">
                <h2 className="font-serif text-2xl font-semibold text-charcoal">
                  Your Schedule
                </h2>
                <Button variant="outline" size="sm">
                  <CalendarIcon className="w-4 h-4 mr-2" /> View Calendar
                </Button>
              </div>
              <div className="space-y-4">
                {upcomingSessions.map(session => <motion.div key={session.id} className="bg-white rounded-xl shadow-md overflow-hidden" variants={itemVariants}>
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 h-40 md:h-auto relative">
                        <img src={session.image} alt={session.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent md:bg-gradient-to-r" />
                        <div className="absolute bottom-3 left-3 md:bottom-auto md:left-auto md:top-1/2 md:right-3 md:transform md:-translate-y-1/2 bg-charcoal/80 text-ivory text-xs px-2 py-1 rounded-full">
                          {session.type}
                        </div>
                      </div>
                      <div className="p-5 md:w-3/4 flex flex-col md:flex-row justify-between">
                        <div>
                          <div className="flex items-center mb-2">
                            {getCategoryIcon(session.category)}
                            <span className="text-xs text-charcoal/60 ml-2 uppercase tracking-wider">
                              {session.category}
                            </span>
                          </div>
                          <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                            {session.title}
                          </h3>
                          <div className="flex flex-wrap gap-3 mb-3">
                            <div className="flex items-center text-charcoal/70 text-sm">
                              <CalendarIcon className="w-4 h-4 mr-1" />
                              {session.date}
                            </div>
                            <div className="flex items-center text-charcoal/70 text-sm">
                              <ClockIcon className="w-4 h-4 mr-1" />
                              {session.time}
                            </div>
                            <div className="flex items-center text-charcoal/70 text-sm">
                              <UserIcon className="w-4 h-4 mr-1" />
                              {session.instructor}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center mt-4 md:mt-0 space-x-3">
                          <div className="bg-sage/10 text-charcoal/80 px-3 py-1 rounded-full text-sm">
                            {session.duration}
                          </div>
                          <Button variant="primary" size="sm">
                            <PlayIcon className="w-4 h-4 mr-2" /> Join
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>)}
              </div>
              <div className="mt-8 text-center">
                <Button variant="outline" size="md">
                  View All Scheduled Sessions
                </Button>
              </div>
            </motion.div>}

          {/* Recommended Sessions */}
          {activeTab === 'recommended' && <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <div className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-charcoal">
                  Recommended For You
                </h2>
                <p className="text-charcoal/60 mt-1">
                  Based on your preferences and wellness goals
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedSessions.map(session => <motion.div key={session.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow" variants={itemVariants}>
                    <div className="relative h-48 overflow-hidden">
                      <img src={session.image} alt={session.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                      <div className="absolute top-3 right-3 bg-charcoal/80 text-ivory text-xs px-2 py-1 rounded-full">
                        {session.type}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent h-16" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center mb-2">
                        {getCategoryIcon(session.category)}
                        <span className="text-xs text-charcoal/60 ml-2 uppercase tracking-wider">
                          {session.category}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                        {session.title}
                      </h3>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center text-charcoal/70 text-sm">
                          <ClockIcon className="w-4 h-4 mr-1" />
                          {session.duration}
                        </div>
                        <div className="flex items-center">
                          <div className="flex text-gold">
                            <StarIcon className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium ml-1">
                            {session.rating}
                          </span>
                          <span className="text-xs text-charcoal/50 ml-1">
                            ({session.reviewCount})
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-charcoal/70">
                          <UserIcon className="w-4 h-4 inline mr-1" />
                          {session.instructor}
                        </div>
                        <Button variant="outline" size="sm">
                          Schedule
                        </Button>
                      </div>
                    </div>
                  </motion.div>)}
              </div>
              <div className="mt-8 text-center">
                <Button variant="secondary" size="md">
                  View All Sessions
                </Button>
              </div>
            </motion.div>}

          {/* Live Sessions */}
          {activeTab === 'live' && <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <div className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-charcoal">
                  Live Now
                </h2>
                <p className="text-charcoal/60 mt-1">
                  Join these sessions happening in real-time
                </p>
              </div>
              {liveSessions.length > 0 ? <div className="space-y-6">
                  {liveSessions.map(session => <motion.div key={session.id} className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-gold" variants={itemVariants}>
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 h-48 md:h-auto relative">
                          <img src={session.image} alt={session.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-transparent" />
                          <div className="absolute top-3 left-3 flex items-center bg-gold/90 text-charcoal text-xs px-3 py-1 rounded-full font-medium">
                            <span className="w-2 h-2 bg-charcoal rounded-full mr-2 animate-pulse"></span>
                            LIVE NOW
                          </div>
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex items-center mb-2">
                            {getCategoryIcon(session.category)}
                            <span className="text-xs text-charcoal/60 ml-2 uppercase tracking-wider">
                              {session.category}
                            </span>
                          </div>
                          <h3 className="font-serif text-2xl font-semibold text-charcoal mb-3">
                            {session.title}
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div>
                              <p className="text-xs text-charcoal/50">
                                Instructor
                              </p>
                              <p className="text-sm font-medium text-charcoal">
                                {session.instructor}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-charcoal/50">
                                Started At
                              </p>
                              <p className="text-sm font-medium text-charcoal">
                                {session.startTime}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-charcoal/50">
                                Duration
                              </p>
                              <p className="text-sm font-medium text-charcoal">
                                {session.duration}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-charcoal/50">
                                Participants
                              </p>
                              <p className="text-sm font-medium text-charcoal">
                                {session.participants}/{session.maxParticipants}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                            <div className="w-full md:w-1/2 bg-sage/10 rounded-full h-2">
                              <div className="bg-gold h-2 rounded-full" style={{
                        width: `${session.participants / session.maxParticipants * 100}%`
                      }}></div>
                            </div>
                            <Button variant="primary" size="md" glowing>
                              <PlayIcon className="w-4 h-4 mr-2" /> Join Live
                              Session
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>)}
                </div> : <motion.div className="text-center py-16 bg-white rounded-xl shadow-md" variants={itemVariants}>
                  <div className="mx-auto w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mb-4">
                    <ClockIcon className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                    No Live Sessions Right Now
                  </h3>
                  <p className="text-charcoal/60 max-w-md mx-auto mb-6">
                    There are no live sessions currently in progress. Check the
                    schedule for upcoming sessions or browse our on-demand
                    library.
                  </p>
                  <Button variant="outline" size="md">
                    View Schedule
                  </Button>
                </motion.div>}
              <motion.div className="mt-12 bg-charcoal rounded-xl p-8 text-ivory" variants={itemVariants}>
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0">
                    <h3 className="font-serif text-2xl font-semibold mb-2">
                      Host Your Own Session
                    </h3>
                    <p className="text-ivory/70 max-w-xl">
                      Qualified practitioners can apply to host live wellness
                      sessions on our platform.
                    </p>
                  </div>
                  <Button variant="primary" size="md">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </motion.div>}
        </div>
      </div>
    </Layout>;
}