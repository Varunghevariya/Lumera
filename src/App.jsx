import React, { useEffect, createElement } from 'react';
import { AppRouter } from './AppRouter';
// Import Google Fonts
const fontLinks = ['https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'];
export function App() {
  // Add Google Fonts to document
  useEffect(() => {
    fontLinks.forEach(href => {
      const link = document.createElement('link');
      link.href = href;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
      return () => {
        document.head.removeChild(link);
      };
    });
  }, []);
  return <AppRouter />;
}