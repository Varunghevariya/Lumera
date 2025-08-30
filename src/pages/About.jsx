import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout/Layout';
import { Button } from '../components/ui/Button';
import { ArrowRightIcon, HeartIcon, BrainIcon, SunIcon, MoonIcon, StarIcon } from 'lucide-react';
export function About() {
  // Team members data
  const teamMembers = [{
    name: 'Dr. Emma Chen',
    role: 'Founder & CEO',
    bio: 'Neuroscientist and meditation practitioner with 15+ years of experience in mindfulness research.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
  }, {
    name: 'Alex Rivera',
    role: 'Chief Product Officer',
    bio: 'Former tech executive with a passion for creating digital tools that enhance rather than detract from wellbeing.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }, {
    name: 'Dr. Michael Torres',
    role: 'Head of Sleep Science',
    bio: 'Sleep researcher and clinician specializing in the relationship between rest and cognitive performance.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    name: 'Sarah Johnson',
    role: 'Mindfulness Director',
    bio: 'Certified mindfulness instructor with expertise in stress reduction and emotional intelligence.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80'
  }];
  // Values data
  const values = [{
    icon: <BrainIcon className="w-6 h-6 text-gold" />,
    title: 'Evidence-Based',
    description: 'We ground all our practices and recommendations in rigorous scientific research.'
  }, {
    icon: <HeartIcon className="w-6 h-6 text-gold" />,
    title: 'Compassionate',
    description: "We approach wellness with kindness, understanding that each person's journey is unique."
  }, {
    icon: <SunIcon className="w-6 h-6 text-gold" />,
    title: 'Empowering',
    description: 'We provide tools and knowledge that enable individuals to take control of their wellbeing.'
  }, {
    icon: <MoonIcon className="w-6 h-6 text-gold" />,
    title: 'Balanced',
    description: 'We promote harmony between productivity and rest, technology and human connection.'
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
        {/* Hero Section */}
        <section className="relative mb-16">
          <div className="absolute inset-0 bg-charcoal opacity-10 z-0"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center py-12 md:py-20">
              <motion.h1 className="font-serif text-3xl md:text-5xl font-bold text-charcoal mb-6" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5
            }}>
                Our <span className="text-gold">Mission</span> & Story
              </motion.h1>
              <motion.p className="text-charcoal/80 text-lg md:text-xl mb-8" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }}>
                Luméra was founded with a clear purpose: to create a digital
                wellness platform that helps people find balance in an
                increasingly connected world.
              </motion.p>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.3
            }}>
                <Button variant="primary" size="lg">
                  Join Our Community
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="container mx-auto px-4 md:px-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.6
          }} className="order-2 md:order-1">
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-6">
                The Luméra <span className="text-gold">Story</span>
              </h2>
              <div className="space-y-4 text-charcoal/80">
                <p>
                  Luméra began in 2019 when Dr. Emma Chen, a neuroscientist
                  specializing in attention and mindfulness, recognized a
                  growing crisis in digital wellbeing. After years of research
                  on how technology affects our brains, she envisioned a
                  solution that would use technology as part of the remedy
                  rather than just the problem.
                </p>
                <p>
                  Teaming up with Alex Rivera, a former tech executive who had
                  experienced burnout firsthand, they assembled a team of
                  scientists, designers, and wellness practitioners to create a
                  platform that would blend cutting-edge neuroscience with
                  ancient mindfulness practices.
                </p>
                <p>
                  The name "Luméra" comes from the Latin word for light,
                  representing our mission to illuminate the path to digital
                  wellness and balanced living in the modern world.
                </p>
                <p>
                  Today, Luméra serves thousands of individuals and
                  organizations worldwide, helping them navigate the challenges
                  of digital life with greater awareness, focus, and emotional
                  balance.
                </p>
              </div>
            </motion.div>
            <motion.div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden order-1 md:order-2" initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.6
          }}>
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="The Luméra team collaborating" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="bg-charcoal py-16">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div className="text-center mb-12" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }}>
              <h2 className="font-serif text-3xl font-bold text-ivory mb-4">
                Our <span className="text-gold">Values</span>
              </h2>
              <p className="text-ivory/70 max-w-2xl mx-auto">
                These core principles guide everything we do at Luméra, from
                product development to customer interactions.
              </p>
            </motion.div>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true
          }}>
              {values.map((value, index) => <motion.div key={index} className="bg-charcoal/50 p-6 rounded-xl border border-gold/20" variants={itemVariants}>
                  <div className="bg-charcoal/70 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-ivory mb-3">
                    {value.title}
                  </h3>
                  <p className="text-ivory/70">{value.description}</p>
                </motion.div>)}
            </motion.div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <motion.div className="text-center mb-12" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
              Meet Our <span className="text-gold">Team</span>
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              The passionate individuals behind Luméra, bringing together
              expertise in neuroscience, technology, and wellness.
            </p>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            {teamMembers.map((member, index) => <motion.div key={index} className="bg-white rounded-xl overflow-hidden shadow-md group" variants={itemVariants}>
                <div className="h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl font-semibold text-charcoal">
                    {member.name}
                  </h3>
                  <p className="text-gold font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-charcoal/70 text-sm">{member.bio}</p>
                </div>
              </motion.div>)}
          </motion.div>
          <div className="text-center mt-10">
            <Button variant="outline" size="md">
              View Full Team
            </Button>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="bg-sage/10 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true,
              margin: '-100px'
            }} transition={{
              duration: 0.6
            }}>
                <h2 className="font-serif text-3xl font-bold text-charcoal mb-6">
                  Our <span className="text-gold">Approach</span>
                </h2>
                <div className="space-y-4 text-charcoal/80">
                  <p>
                    At Luméra, we believe that true digital wellness requires a
                    holistic approach that addresses the mind, body, and
                    environment. Our methodology is grounded in three key
                    pillars:
                  </p>
                  <div className="pl-4 border-l-2 border-gold">
                    <h3 className="font-serif text-lg font-semibold text-charcoal mb-1">
                      Mindfulness Practice
                    </h3>
                    <p className="text-charcoal/70">
                      Training attention and awareness to navigate digital
                      distractions and cultivate presence.
                    </p>
                  </div>
                  <div className="pl-4 border-l-2 border-gold">
                    <h3 className="font-serif text-lg font-semibold text-charcoal mb-1">
                      Cognitive Enhancement
                    </h3>
                    <p className="text-charcoal/70">
                      Science-backed techniques to optimize focus, creativity,
                      and mental clarity.
                    </p>
                  </div>
                  <div className="pl-4 border-l-2 border-gold">
                    <h3 className="font-serif text-lg font-semibold text-charcoal mb-1">
                      Emotional Intelligence
                    </h3>
                    <p className="text-charcoal/70">
                      Developing awareness and regulation of emotions in the
                      digital context.
                    </p>
                  </div>
                  <p>
                    This integrated approach allows us to address the unique
                    challenges of digital life while honoring the complexity of
                    human experience.
                  </p>
                </div>
              </motion.div>
              <motion.div className="relative h-[400px] rounded-2xl overflow-hidden" initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true,
              margin: '-100px'
            }} transition={{
              duration: 0.6
            }}>
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Luméra's approach to digital wellness" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <motion.div className="text-center mb-12" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
              What Our <span className="text-gold">Community Says</span>
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Hear from individuals who have transformed their relationship with
              technology through Luméra.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div className="bg-white p-6 rounded-xl shadow-md" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }}>
              <div className="flex items-center mb-4">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4" />)}
                </div>
              </div>
              <p className="text-charcoal/80 italic mb-4">
                "Luméra has completely transformed how I work. The focus
                sessions have doubled my productivity while actually reducing my
                screen time. It's like having a mindfulness coach and
                productivity expert in my pocket."
              </p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Jennifer K." className="w-10 h-10 rounded-full object-cover mr-3" />
                <div>
                  <p className="font-medium text-charcoal">Jennifer K.</p>
                  <p className="text-xs text-charcoal/60">Marketing Director</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="bg-white p-6 rounded-xl shadow-md" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              <div className="flex items-center mb-4">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4" />)}
                </div>
              </div>
              <p className="text-charcoal/80 italic mb-4">
                "As someone who struggled with insomnia for years, the sleep
                program on Luméra has been life-changing. I'm now getting
                consistent, quality rest for the first time in a decade. The
                science-backed approach makes all the difference."
              </p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Robert M." className="w-10 h-10 rounded-full object-cover mr-3" />
                <div>
                  <p className="font-medium text-charcoal">Robert M.</p>
                  <p className="text-xs text-charcoal/60">Software Engineer</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="bg-white p-6 rounded-xl shadow-md" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }}>
              <div className="flex items-center mb-4">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4" />)}
                </div>
              </div>
              <p className="text-charcoal/80 italic mb-4">
                "Our entire team has benefited from implementing Luméra in our
                workplace. Stress levels are down, communication has improved,
                and we've seen a measurable increase in both employee
                satisfaction and output quality."
              </p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Maya T." className="w-10 h-10 rounded-full object-cover mr-3" />
                <div>
                  <p className="font-medium text-charcoal">Maya T.</p>
                  <p className="text-xs text-charcoal/60">HR Director</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-charcoal py-16">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div className="max-w-3xl mx-auto text-center" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ivory mb-6">
                Ready to Transform Your{' '}
                <span className="text-gold">Digital Wellness</span>?
              </h2>
              <p className="text-ivory/80 mb-8">
                Join thousands of individuals who have found balance, focus, and
                peace in their digital lives with Luméra.
              </p>
              <Button variant="primary" size="lg" glowing>
                Begin Your Journey <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>;
}