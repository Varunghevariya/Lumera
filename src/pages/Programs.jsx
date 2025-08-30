import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout/Layout';
import { Button } from '../components/ui/Button';
import { BrainIcon, ClockIcon, FilterIcon, MoonIcon, SearchIcon, SunIcon, UsersIcon, HeartIcon, LightbulbIcon, ActivityIcon, StarIcon } from 'lucide-react';
export function Programs() {
  const [activeFilter, setActiveFilter] = useState('all');
  // Program categories
  const categories = [{
    id: 'all',
    label: 'All Programs'
  }, {
    id: 'mindfulness',
    label: 'Mindfulness',
    icon: <BrainIcon className="w-4 h-4" />
  }, {
    id: 'productivity',
    label: 'Productivity',
    icon: <SunIcon className="w-4 h-4" />
  }, {
    id: 'sleep',
    label: 'Sleep',
    icon: <MoonIcon className="w-4 h-4" />
  }, {
    id: 'stress',
    label: 'Stress Reduction',
    icon: <HeartIcon className="w-4 h-4" />
  }];
  // Program data
  const programs = [{
    id: 1,
    title: 'Mindfulness Fundamentals',
    description: 'Build a solid foundation for your mindfulness practice with daily guided sessions.',
    category: 'mindfulness',
    level: 'Beginner',
    duration: '4 weeks',
    participants: '12,458',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80',
    featured: true
  }, {
    id: 2,
    title: 'Deep Work Protocol',
    description: 'Master the art of distraction-free productivity with science-backed techniques.',
    category: 'productivity',
    level: 'Intermediate',
    duration: '6 weeks',
    participants: '8,742',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: 3,
    title: 'Sleep Restoration',
    description: 'Rebuild healthy sleep patterns and enhance your nightly recovery.',
    category: 'sleep',
    level: 'All Levels',
    duration: '3 weeks',
    participants: '15,321',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    featured: true
  }, {
    id: 4,
    title: 'Anxiety Relief',
    description: 'Practical techniques to reduce anxiety and manage stress in daily life.',
    category: 'stress',
    level: 'All Levels',
    duration: '4 weeks',
    participants: '21,654',
    image: 'https://images.unsplash.com/photo-1520942702018-0862200e6873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: 5,
    title: 'Advanced Meditation',
    description: 'Deepen your practice with advanced meditation techniques for experienced practitioners.',
    category: 'mindfulness',
    level: 'Advanced',
    duration: '8 weeks',
    participants: '5,879',
    image: 'https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: 6,
    title: 'Creativity Boost',
    description: 'Unlock your creative potential through mindfulness and specialized exercises.',
    category: 'productivity',
    level: 'Intermediate',
    duration: '5 weeks',
    participants: '7,432',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    featured: true
  }];
  // Filter programs based on active filter
  const filteredPrograms = activeFilter === 'all' ? programs : programs.filter(program => program.category === activeFilter);
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
                Wellness <span className="text-gold">Programs</span>
              </h1>
              <p className="text-charcoal/60 mt-2">
                Transform your well-being with our curated programs
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="mt-4 md:mt-0 w-full md:w-auto">
              <div className="relative">
                <input type="text" placeholder="Search programs..." className="pl-10 pr-4 py-2 w-full md:w-64 rounded-full border border-sage/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50" />
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-charcoal/40" />
              </div>
            </motion.div>
          </div>

          {/* Featured Program */}
          <motion.div className="mb-12 relative overflow-hidden rounded-2xl" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <div className="relative h-[300px] md:h-[400px]">
              <img src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Featured Program - Emotional Intelligence Mastery" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 to-charcoal/40" />
              <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12">
                <div className="max-w-xl">
                  <div className="bg-gold/20 text-gold inline-block px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Featured Program
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-ivory mb-4">
                    Emotional Intelligence Mastery
                  </h2>
                  <p className="text-ivory/80 mb-6 max-w-lg">
                    Develop your emotional awareness and intelligence with our
                    most comprehensive program. Learn to navigate complex
                    emotions and enhance your relationships.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center bg-charcoal/50 px-3 py-1 rounded-full">
                      <ClockIcon className="w-4 h-4 text-gold mr-2" />
                      <span className="text-ivory/90 text-sm">8 Weeks</span>
                    </div>
                    <div className="flex items-center bg-charcoal/50 px-3 py-1 rounded-full">
                      <StarIcon className="w-4 h-4 text-gold mr-2" />
                      <span className="text-ivory/90 text-sm">All Levels</span>
                    </div>
                    <div className="flex items-center bg-charcoal/50 px-3 py-1 rounded-full">
                      <UsersIcon className="w-4 h-4 text-gold mr-2" />
                      <span className="text-ivory/90 text-sm">
                        32,547 Participants
                      </span>
                    </div>
                  </div>
                  <Button variant="primary" size="lg" glowing>
                    Start Program
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div className="flex flex-wrap gap-2 mb-8" initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }}>
            {categories.map(category => <button key={category.id} className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === category.id ? 'bg-gold text-charcoal' : 'bg-white text-charcoal/70 hover:bg-sage/10'}`} onClick={() => setActiveFilter(category.id)}>
                {category.icon && <span className="mr-2">{category.icon}</span>}
                {category.label}
              </button>)}
            <button className="flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white text-charcoal/70 hover:bg-sage/10 transition-colors">
              <FilterIcon className="w-4 h-4 mr-2" />
              Filters
            </button>
          </motion.div>

          {/* Programs Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" animate="visible">
            {filteredPrograms.map(program => <motion.div key={program.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow" variants={itemVariants}>
                <div className="relative h-48 overflow-hidden">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  {program.featured && <div className="absolute top-3 right-3 bg-gold/90 text-charcoal text-xs px-2 py-1 rounded-full font-medium">
                      Featured
                    </div>}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent h-16" />
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-3">
                    {program.category === 'mindfulness' && <BrainIcon className="w-4 h-4 text-gold mr-2" />}
                    {program.category === 'productivity' && <SunIcon className="w-4 h-4 text-gold mr-2" />}
                    {program.category === 'sleep' && <MoonIcon className="w-4 h-4 text-gold mr-2" />}
                    {program.category === 'stress' && <HeartIcon className="w-4 h-4 text-gold mr-2" />}
                    <span className="text-xs text-charcoal/60 uppercase tracking-wider">
                      {program.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                    {program.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4">
                    {program.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="bg-sage/10 text-charcoal/70 text-xs px-2 py-1 rounded-full flex items-center">
                      <StarIcon className="w-3 h-3 mr-1" />
                      {program.level}
                    </div>
                    <div className="bg-sage/10 text-charcoal/70 text-xs px-2 py-1 rounded-full flex items-center">
                      <ClockIcon className="w-3 h-3 mr-1" />
                      {program.duration}
                    </div>
                    <div className="bg-sage/10 text-charcoal/70 text-xs px-2 py-1 rounded-full flex items-center">
                      <UsersIcon className="w-3 h-3 mr-1" />
                      {program.participants}
                    </div>
                  </div>
                  <Button variant="outline" size="md" className="w-full">
                    View Program
                  </Button>
                </div>
              </motion.div>)}
          </motion.div>

          {/* No Results */}
          {filteredPrograms.length === 0 && <motion.div className="text-center py-12" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5
        }}>
              <LightbulbIcon className="w-16 h-16 text-gold/50 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                No programs found
              </h3>
              <p className="text-charcoal/60 max-w-md mx-auto">
                We couldn't find any programs matching your current filters. Try
                adjusting your search or check back soon for new programs.
              </p>
            </motion.div>}

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-1">
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-charcoal border border-sage/20">
                1
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-charcoal/60 hover:bg-white hover:text-charcoal transition-colors">
                2
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-charcoal/60 hover:bg-white hover:text-charcoal transition-colors">
                3
              </button>
              <span className="w-10 h-10 flex items-center justify-center text-charcoal/60">
                ...
              </span>
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-charcoal/60 hover:bg-white hover:text-charcoal transition-colors">
                8
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
}