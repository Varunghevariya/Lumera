import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout/Layout';
import { Button } from '../components/ui/Button';
import { MailIcon, MapPinIcon, PhoneIcon, SendIcon, ClockIcon, MessageSquareIcon, InstagramIcon, TwitterIcon, FacebookIcon, LinkedinIcon } from 'lucide-react';
export function Contact() {
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
          {/* Header */}
          <motion.div className="text-center max-w-3xl mx-auto mb-12" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Get in <span className="text-gold">Touch</span>
            </h1>
            <p className="text-charcoal/70">
              Have questions about Luméra? We're here to help you on your
              wellness journey. Our team is ready to assist with any inquiries
              or support you might need.
            </p>
          </motion.div>
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div className="bg-white rounded-xl shadow-md p-8" initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              <h2 className="font-serif text-2xl font-semibold text-charcoal mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal/70 mb-1">
                      Full Name
                    </label>
                    <input type="text" id="name" className="w-full px-4 py-2 rounded-lg border border-sage/30 focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal/70 mb-1">
                      Email Address
                    </label>
                    <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-sage/30 focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal/70 mb-1">
                    Subject
                  </label>
                  <input type="text" id="subject" className="w-full px-4 py-2 rounded-lg border border-sage/30 focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50" placeholder="How can we help you?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal/70 mb-1">
                    Message
                  </label>
                  <textarea id="message" rows={5} className="w-full px-4 py-2 rounded-lg border border-sage/30 focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50" placeholder="Tell us more about your inquiry..."></textarea>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="privacy" className="w-4 h-4 text-gold border-sage/30 rounded focus:ring-gold/50" />
                  <label htmlFor="privacy" className="ml-2 text-sm text-charcoal/70">
                    I agree to the{' '}
                    <a href="#" className="text-gold hover:underline">
                      Privacy Policy
                    </a>{' '}
                    and consent to being contacted.
                  </label>
                </div>
                <Button variant="primary" size="lg" className="w-full">
                  Send Message <SendIcon className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </motion.div>
            {/* Contact Information */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.div className="bg-white p-6 rounded-xl shadow-md" variants={itemVariants}>
                  <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mb-4">
                    <MailIcon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">
                    Email Us
                  </h3>
                  <p className="text-charcoal/70 mb-1">General Inquiries:</p>
                  <p className="text-charcoal font-medium mb-2">
                    hello@lumera.com
                  </p>
                  <p className="text-charcoal/70 mb-1">Support:</p>
                  <p className="text-charcoal font-medium">
                    support@lumera.com
                  </p>
                </motion.div>
                <motion.div className="bg-white p-6 rounded-xl shadow-md" variants={itemVariants}>
                  <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mb-4">
                    <PhoneIcon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">
                    Call Us
                  </h3>
                  <p className="text-charcoal/70 mb-1">Main Office:</p>
                  <p className="text-charcoal font-medium mb-2">
                    +1 (555) 123-4567
                  </p>
                  <p className="text-charcoal/70 mb-1">Support Hotline:</p>
                  <p className="text-charcoal font-medium">+1 (555) 987-6543</p>
                </motion.div>
                <motion.div className="bg-white p-6 rounded-xl shadow-md" variants={itemVariants}>
                  <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mb-4">
                    <MapPinIcon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">
                    Visit Us
                  </h3>
                  <p className="text-charcoal/70 mb-1">Headquarters:</p>
                  <p className="text-charcoal font-medium">
                    123 Wellness Avenue
                    <br />
                    San Francisco, CA 94103
                    <br />
                    United States
                  </p>
                </motion.div>
                <motion.div className="bg-white p-6 rounded-xl shadow-md" variants={itemVariants}>
                  <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mb-4">
                    <ClockIcon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">
                    Hours
                  </h3>
                  <p className="text-charcoal/70 mb-1">Monday - Friday:</p>
                  <p className="text-charcoal font-medium mb-2">
                    9:00 AM - 6:00 PM PST
                  </p>
                  <p className="text-charcoal/70 mb-1">Saturday - Sunday:</p>
                  <p className="text-charcoal font-medium">Closed</p>
                </motion.div>
              </div>
              {/* Map */}
              <motion.div className="bg-white rounded-xl shadow-md overflow-hidden h-[300px] mb-8" variants={itemVariants}>
                <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80" alt="Luméra office location map" className="w-full h-full object-cover" />
              </motion.div>
              {/* Social Media */}
              <motion.div className="bg-charcoal rounded-xl shadow-md p-6 text-ivory" variants={itemVariants}>
                <h3 className="font-serif text-lg font-semibold mb-4">
                  Connect With Us
                </h3>
                <p className="text-ivory/70 mb-4">
                  Follow us on social media for wellness tips, updates, and
                  inspiration.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-charcoal/50 flex items-center justify-center text-ivory/80 hover:text-gold transition-colors" aria-label="Instagram">
                    <InstagramIcon size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-charcoal/50 flex items-center justify-center text-ivory/80 hover:text-gold transition-colors" aria-label="Twitter">
                    <TwitterIcon size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-charcoal/50 flex items-center justify-center text-ivory/80 hover:text-gold transition-colors" aria-label="Facebook">
                    <FacebookIcon size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-charcoal/50 flex items-center justify-center text-ivory/80 hover:text-gold transition-colors" aria-label="LinkedIn">
                    <LinkedinIcon size={20} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
          {/* FAQ Section */}
          <motion.section className="mt-16" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Frequently Asked <span className="text-gold">Questions</span>
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Find quick answers to common questions about Luméra and our
                services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-3">
                  How do I get started with Luméra?
                </h3>
                <p className="text-charcoal/70">
                  Getting started is easy! Simply create an account, complete
                  our wellness assessment, and we'll recommend personalized
                  programs based on your goals and preferences.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-3">
                  Is Luméra available on mobile devices?
                </h3>
                <p className="text-charcoal/70">
                  Yes, Luméra is available on iOS and Android devices. You can
                  download our app from the App Store or Google Play Store to
                  access your wellness programs on the go.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-3">
                  Do you offer corporate wellness programs?
                </h3>
                <p className="text-charcoal/70">
                  Yes, we offer customized wellness solutions for organizations
                  of all sizes. Contact our enterprise team to learn how Luméra
                  can support your team's wellbeing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-3">
                  What if I need help with my account?
                </h3>
                <p className="text-charcoal/70">
                  Our support team is available Monday through Friday from 9 AM
                  to 6 PM PST. You can reach us via email at support@lumera.com
                  or through the in-app chat feature.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" size="md">
                <MessageSquareIcon className="w-4 h-4 mr-2" /> View All FAQs
              </Button>
            </div>
          </motion.section>
          {/* CTA Section */}
          <motion.section className="mt-16 bg-sage/20 rounded-2xl p-8 md:p-12" initial={{
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
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-3">
                  Ready to transform your digital wellness?
                </h2>
                <p className="text-charcoal/70 max-w-xl">
                  Join thousands of individuals who have found balance and
                  clarity with Luméra's science-backed approach.
                </p>
              </div>
              <Button variant="primary" size="lg" glowing>
                Start Free Trial
              </Button>
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>;
}