import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const AdvancedCursor = () => {
  const [cursorType, setCursorType] = useState("default");
  const [isVisible, setIsVisible] = useState(false);
  
  // Position of the mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for the "trailing" effect
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Global listener to detect what we are hovering over
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest('button') || target.closest('a')) {
        setCursorType("pointer");
      } else if (target.closest('img') || target.closest('.service-card')) {
        setCursorType("view");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main Dot (The Point) */}
          <motion.div
            className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[10001]"
            style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
          />

          {/* Inner Trailing Ring (The Follower) */}
          <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[10000] border border-cyan-500/50 flex items-center justify-center overflow-hidden"
            animate={{
              width: cursorType === "pointer" ? 80 : cursorType === "view" ? 100 : 40,
              height: cursorType === "pointer" ? 80 : cursorType === "view" ? 100 : 40,
              backgroundColor: cursorType === "pointer" ? "rgba(34, 211, 238, 0.1)" : "rgba(34, 211, 238, 0)",
              borderWidth: cursorType === "default" ? "1px" : "2px",
            }}
            style={{
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%",
            }}
          >
            {/* Label Reveal for specific sections */}
            {cursorType === "view" && (
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-[10px] font-black uppercase text-cyan-400 tracking-tighter"
              >
                View
              </motion.span>
            )}
          </motion.div>

          {/* Outer Ambient Glow (Subtle) */}
          <motion.div
            className="fixed top-0 left-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none z-[9999]"
            style={{ x: cursorX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default AdvancedCursor;