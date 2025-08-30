import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout/Layout';
import { Button } from '../components/ui/Button';
import { ArrowRightIcon, BookmarkIcon, CalendarIcon, ClockIcon, SearchIcon, TagIcon, UserIcon, BookOpenIcon, HeadphonesIcon, VideoIcon, EyeIcon } from 'lucide-react';
export function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');
  // Categories
  const categories = [{
    id: 'all',
    label: 'All'
  }, {
    id: 'mindfulness',
    label: 'Mindfulness'
  }, {
    id: 'productivity',
    label: 'Productivity'
  }, {
    id: 'sleep',
    label: 'Sleep'
  }, {
    id: 'stress',
    label: 'Stress Management'
  }, {
    id: 'wellness',
    label: 'Digital Wellness'
  }];
  // Featured article
  const featuredArticle = {
    id: 1,
    title: 'The Science of Digital Mindfulness: Finding Balance in a Connected World',
    excerpt: 'Discover how mindfulness practices can help you navigate the challenges of digital overwhelm and find balance in your connected life.',
    category: 'mindfulness',
    author: 'Dr. Emma Chen',
    date: 'May 12, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  };
  // Blog posts data
  const blogPosts = [{
    id: 2,
    title: 'Deep Work: Achieving Flow State in a Distracted World',
    excerpt: 'Learn practical techniques to enter and maintain a flow state for maximum productivity and creativity.',
    category: 'productivity',
    author: 'Alex Rivera',
    date: 'May 8, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    type: 'article'
  }, {
    id: 3,
    title: 'The Neuroscience of Sleep: Why Quality Rest Matters',
    excerpt: 'Explore the latest research on how sleep affects cognitive function, emotional regulation, and overall wellbeing.',
    category: 'sleep',
    author: 'Dr. Michael Torres',
    date: 'May 5, 2023',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    type: 'article'
  }, {
    id: 4,
    title: 'Breathwork for Anxiety: Simple Techniques for Immediate Relief',
    excerpt: 'Discover science-backed breathing exercises that can help reduce anxiety and stress in just minutes.',
    category: 'stress',
    author: 'Sarah Johnson',
    date: 'May 1, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80',
    type: 'article'
  }, {
    id: 5,
    title: 'Digital Detox: Creating Healthy Boundaries with Technology',
    excerpt: 'Learn how to establish a healthier relationship with your devices without sacrificing productivity.',
    category: 'wellness',
    author: 'Dr. Emma Chen',
    date: 'April 28, 2023',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    type: 'article'
  }, {
    id: 6,
    title: 'Mindful Leadership: Bringing Presence to Your Professional Life',
    excerpt: 'Discover how mindfulness practices can enhance your leadership skills and workplace wellbeing.',
    category: 'mindfulness',
    author: 'Alex Rivera',
    date: 'April 25, 2023',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    type: 'article'
  }, {
    id: 7,
    title: 'The Power of Micro-Breaks: Boosting Focus in Small Moments',
    excerpt: 'Learn how strategic short breaks throughout your workday can dramatically improve productivity and mental clarity.',
    category: 'productivity',
    author: 'Sarah Johnson',
    date: 'April 22, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    type: 'video'
  }, {
    id: 8,
    title: 'Meditation Myths Debunked: What Science Really Says',
    excerpt: 'Separate fact from fiction as we explore common misconceptions about meditation and mindfulness practices.',
    category: 'mindfulness',
    author: 'Dr. Michael Torres',
    date: 'April 18, 2023',
    readTime: '25 min listen',
    image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    type: 'podcast'
  }];
  // Filter posts based on active category
  const filteredPosts = activeCategory === 'all' ? blogPosts : blogPosts.filter(post => post.category === activeCategory);
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
  // Get content type icon
  const getContentTypeIcon = (type) => {
    switch (type) {
      case 'video':
        return <VideoIcon className="w-4 h-4" />;
      case 'podcast':
        return <HeadphonesIcon className="w-4 h-4" />;
      default:
        return <BookOpenIcon className="w-4 h-4" />;
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
                Blog & <span className="text-gold">Resources</span>
              </h1>
              <p className="text-charcoal/60 mt-2">
                Insights and guidance for your wellness journey
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
                <input type="text" placeholder="Search articles..." className="pl-10 pr-4 py-2 w-full md:w-64 rounded-full border border-sage/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50" />
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-charcoal/40" />
              </div>
            </motion.div>
          </div>

          {/* Featured Article */}
          <motion.div className="mb-12 relative overflow-hidden rounded-2xl" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <div className="relative h-[400px] md:h-[500px]">
              <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
                <div className="max-w-3xl">
                  <div className="bg-gold/20 text-gold inline-block px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Featured Article
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-ivory mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-ivory/80 mb-6 max-w-2xl">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-ivory/80">
                      <UserIcon className="w-4 h-4 mr-2" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center text-ivory/80">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <div className="flex items-center text-ivory/80">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                  <Button variant="primary" size="lg">
                    Read Article <ArrowRightIcon className="ml-2 w-4 h-4" />
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
            {categories.map(category => <button key={category.id} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id ? 'bg-gold text-charcoal' : 'bg-white text-charcoal/70 hover:bg-sage/10'}`} onClick={() => setActiveCategory(category.id)}>
                {category.label}
              </button>)}
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" animate="visible">
            {filteredPosts.map(post => <motion.div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow" variants={itemVariants}>
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  {post.type && <div className="absolute top-3 right-3 bg-charcoal/80 text-ivory text-xs px-3 py-1 rounded-full flex items-center">
                      {getContentTypeIcon(post.type)}
                      <span className="ml-1 capitalize">{post.type}</span>
                    </div>}
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-3">
                    <TagIcon className="w-4 h-4 text-gold mr-2" />
                    <span className="text-xs text-charcoal/60 uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-sage/10">
                    <div className="flex items-center space-x-4 text-xs text-charcoal/60">
                      <div className="flex items-center">
                        <UserIcon className="w-3 h-3 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="w-3 h-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <button className="text-gold hover:text-gold/80 transition-colors">
                      <BookmarkIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>)}
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div className="mt-16 bg-charcoal rounded-2xl p-8 md:p-12 text-ivory" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }}>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
                  Stay Inspired & Informed
                </h3>
                <p className="text-ivory/70 max-w-xl">
                  Subscribe to our newsletter for the latest articles,
                  resources, and exclusive content to support your wellness
                  journey.
                </p>
              </div>
              <div className="w-full md:w-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input type="email" placeholder="Enter your email" className="px-4 py-3 rounded-full bg-charcoal/50 border border-ivory/20 text-ivory placeholder:text-ivory/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 w-full sm:w-64" />
                  <Button variant="primary" size="md">
                    Subscribe
                  </Button>
                </div>
                <p className="text-ivory/50 text-xs mt-2">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Popular Resources */}
          <motion.div className="mt-16" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.5
        }}>
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-6">
              Popular Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpenIcon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                  Wellness Guides
                </h3>
                <p className="text-charcoal/70 text-sm mb-4">
                  Comprehensive guides on various aspects of digital wellness
                  and mindfulness.
                </p>
                <Button variant="outline" size="sm">
                  Browse Guides
                </Button>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mb-4">
                  <HeadphonesIcon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                  Podcast Episodes
                </h3>
                <p className="text-charcoal/70 text-sm mb-4">
                  Listen to our podcast featuring conversations with wellness
                  experts and thought leaders.
                </p>
                <Button variant="outline" size="sm">
                  Listen Now
                </Button>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mb-4">
                  <VideoIcon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                  Video Library
                </h3>
                <p className="text-charcoal/70 text-sm mb-4">
                  Watch tutorials, expert interviews, and guided practice
                  sessions in our video collection.
                </p>
                <Button variant="outline" size="sm">
                  Watch Videos
                </Button>
              </div>
            </div>
          </motion.div>

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