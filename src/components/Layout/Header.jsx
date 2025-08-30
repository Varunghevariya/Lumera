import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Dashboard',
    path: '/dashboard'
  }, {
    name: 'Programs',
    path: '/programs'
  }, {
    name: 'Sessions',
    path: '/sessions'
  }, {
    name: 'Blog',
    path: '/blog'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  return <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-charcoal text-ivory py-3 shadow-lg' : 'bg-transparent text-charcoal py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5
        }} className="font-serif text-2xl md:text-3xl font-bold">
            Luméra
            <span className="text-gold">.</span>
          </motion.div>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => <Link key={item.path} to={item.path} className={`relative font-sans text-sm transition-colors duration-300 hover:text-gold ${location.pathname === item.path ? 'text-gold' : ''}`}>
              {item.name}
              {location.pathname === item.path && <motion.div layoutId="navIndicator" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold" initial={false} transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30
          }} />}
            </Link>)}
          <Link to="/profile" className="ml-4 bg-gold text-charcoal px-4 py-2 rounded-full font-sans text-sm font-medium transition-transform duration-300 hover:scale-105">
            My Profile
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-current" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}>
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && <motion.div initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} className="md:hidden bg-charcoal text-ivory">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map(item => <Link key={item.path} to={item.path} className={`py-2 font-sans text-base ${location.pathname === item.path ? 'text-gold' : ''}`}>
                {item.name}
              </Link>)}
            <Link to="/profile" className="bg-gold text-charcoal px-4 py-2 rounded-full font-sans text-base font-medium text-center">
              My Profile
            </Link>
          </div>
        </motion.div>}
    </header>;
}