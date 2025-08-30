import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, TwitterIcon, FacebookIcon, LinkedinIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-charcoal text-ivory pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">
              Luméra<span className="text-gold">.</span>
            </h3>
            <p className="text-sm text-ivory/80 mb-6 max-w-xs">
              A luxury-grade digital wellness platform blending mindfulness,
              productivity, and emotional intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-ivory/80 hover:text-gold transition-colors" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-ivory/80 hover:text-gold transition-colors" aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-ivory/80 hover:text-gold transition-colors" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-ivory/80 hover:text-gold transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-sm text-ivory/80 hover:text-gold transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm text-ivory/80 hover:text-gold transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/sessions" className="text-sm text-ivory/80 hover:text-gold transition-colors">
                  Sessions
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-ivory/80 hover:text-gold transition-colors">
                  Blog & Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-ivory/80 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-ivory/80 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-ivory/80 hover:text-gold transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-sm text-ivory/80 hover:text-gold transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-ivory/80 hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-ivory/80 hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-ivory/80 hover:text-gold transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-ivory/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} Luméra. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-sm text-ivory/60 hover:text-gold transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="text-sm text-ivory/60 hover:text-gold transition-colors">
              Privacy
            </Link>
            <Link to="/cookies" className="text-sm text-ivory/60 hover:text-gold transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>;
}