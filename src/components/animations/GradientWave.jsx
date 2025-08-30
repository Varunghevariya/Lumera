import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
export function GradientWave() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId;
    let time = 0;
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.8;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    // Animation function
    const animate = () => {
      time += 0.005;
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(28, 28, 28, 0.8)');
      gradient.addColorStop(0.5, 'rgba(255, 215, 0, 0.2)');
      gradient.addColorStop(1, 'rgba(178, 194, 176, 0.3)');
      ctx.fillStyle = gradient;
      // Draw waves
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 5) {
        // First wave
        const y1 = Math.sin(x * 0.01 + time) * 50 + canvas.height * 0.5;
        // Second wave
        const y2 = Math.sin(x * 0.02 + time * 1.5) * 30 + canvas.height * 0.6;
        // Third wave
        const y3 = Math.sin(x * 0.005 - time * 0.7) * 70 + canvas.height * 0.4;
        // Average the waves
        const y = (y1 + y2 + y3) / 3;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      // Complete the path
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fill();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return <motion.canvas ref={canvasRef} className="absolute inset-0 w-full h-full" initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 1.5
  }} />;
}