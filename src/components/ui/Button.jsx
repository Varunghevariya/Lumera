import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export function Button({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  glowing = false,
  disabled = false
}) {
  const baseStyles = 'font-sans rounded-full font-medium inline-flex items-center justify-center transition-all duration-300';
  const variantStyles = {
    primary: 'bg-gold text-charcoal hover:bg-gold/90',
    secondary: 'bg-charcoal text-ivory hover:bg-charcoal/90',
    outline: 'bg-transparent border-2 border-gold text-gold hover:bg-gold/10'
  };
  const sizeStyles = {
    sm: 'text-xs px-4 py-1.5',
    md: 'text-sm px-6 py-2.5',
    lg: 'text-base px-8 py-3'
  };
  const glowStyles = glowing ? 'shadow-[0_0_15px_rgba(255,215,0,0.5)]' : '';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  const allStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${glowStyles} ${disabledStyles} ${className}`;
  const buttonContent = <motion.span className="relative z-10 flex items-center justify-center" whileHover={!disabled ? {
    scale: 1.03
  } : {}} whileTap={!disabled ? {
    scale: 0.98
  } : {}}>
      {children}
    </motion.span>;
  if (to) {
    return <Link to={to} className={allStyles}>
        {buttonContent}
      </Link>;
  }
  return <button onClick={onClick} disabled={disabled} className={allStyles}>
      {buttonContent}
    </button>;
}