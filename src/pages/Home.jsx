import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GradientWave } from '../components/animations/GradientWave';
import { Button } from '../components/ui/Button';
import { ArrowRightIcon, SunIcon, MoonIcon, BrainIcon } from 'lucide-react';
export function Home() {
  const targetRef = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start']
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    })
  };
  const features = [{
    icon: <SunIcon className="w-8 h-8 text-gold" />,
    title: 'Mindfulness',
    description: 'Guided meditation sessions tailored to your emotional state and daily goals.'
  }, {
    icon: <BrainIcon className="w-8 h-8 text-gold" />,
    title: 'Productivity',
    description: 'Flow-state tools designed to enhance focus and creative output.'
  }, {
    icon: <MoonIcon className="w-8 h-8 text-gold" />,
    title: 'Rest & Recovery',
    description: 'Science-backed sleep programs and stress reduction techniques.'
  }];
  return <div className="bg-ivory">
      {/* Hero Section */}
      <motion.section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden" style={{
      opacity,
      scale,
      y
    }}>
        <GradientWave />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            Balance Your Digital Life
            <br />
            <span className="text-gold">Find Your Center</span>
          </motion.h1>
          <motion.p className="font-sans text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto mb-10" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            Luméra blends mindfulness, productivity, and emotional intelligence
            into one seamless digital wellness experience.
          </motion.p>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }}>
            <Button to="/dashboard" variant="primary" size="lg" glowing>
              Begin Your Journey <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
        <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 1.2
      }}>
          <div className="flex flex-col items-center">
            <p className="text-sm text-charcoal/60 mb-2">Scroll to discover</p>
            <motion.div className="w-0.5 h-10 bg-gold/50 rounded-full" animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }} />
          </div>
        </motion.div>
      </motion.section>
      {/* Mission Section */}
      <section className="py-20 md:py-32 bg-charcoal text-ivory">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: '-100px'
          }} variants={{
            hidden: {
              opacity: 0,
              x: -50
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8
              }
            }
          }}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-gold">Mission</span>
              </h2>
              <p className="text-ivory/80 mb-6">
                In today's hyper-connected world, finding balance between
                productivity and wellbeing has become increasingly challenging.
                Luméra was created to bridge this gap, offering a sanctuary
                where technology enhances rather than depletes your mental
                resources.
              </p>
              <p className="text-ivory/80 mb-8">
                We've combined cutting-edge neuroscience with ancient
                mindfulness practices to create a platform that adapts to your
                unique needs, helping you achieve clarity, focus, and emotional
                balance.
              </p>
              <Button to="/about" variant="outline" size="md">
                Learn Our Story
              </Button>
            </motion.div>
            <motion.div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden" initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: '-100px'
          }} variants={{
            hidden: {
              opacity: 0,
              scale: 0.9
            },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8
              }
            }
          }}>
              <img src="https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="Person meditating with digital interface" className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 md:py-32 bg-ivory">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: '-100px'
        }} custom={0} variants={fadeInVariants}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Core <span className="text-gold">Features</span>
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Discover the tools that will transform your digital wellness
              journey
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => <motion.div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: '-100px'
          }} custom={index + 1} variants={fadeInVariants}>
                <div className="bg-sage/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-charcoal/70">{feature.description}</p>
              </motion.div>)}
          </div>
          <motion.div className="mt-16 text-center" initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: '-100px'
        }} custom={4} variants={fadeInVariants}>
            <Button to="/programs" variant="primary" size="lg">
              Explore All Features
            </Button>
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-sage/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="bg-charcoal rounded-3xl p-10 md:p-16 text-center" initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-100px'
        }} transition={{
          duration: 0.8
        }}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ivory mb-6">
              Ready to Transform Your{' '}
              <span className="text-gold">Digital Wellness</span>?
            </h2>
            <p className="text-ivory/80 max-w-2xl mx-auto mb-10">
              Join thousands of creatives, entrepreneurs, and professionals who
              have found balance and clarity with Luméra.
            </p>
            <Button to="/dashboard" variant="primary" size="lg" glowing>
              Start Your Free Trial
            </Button>
          </motion.div>
        </div>
      </section>
    </div>;
}