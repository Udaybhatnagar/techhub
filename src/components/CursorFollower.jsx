import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const CursorFollower = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Different spring physics for the "Lag" effect
  const mainSpring = { damping: 30, stiffness: 200, mass: 0.6 };
  const dotSpring = { damping: 40, stiffness: 800 };

  const x = useSpring(cursorX, mainSpring);
  const y = useSpring(cursorY, mainSpring);
  
  const dotX = useSpring(cursorX, dotSpring);
  const dotY = useSpring(cursorY, dotSpring);

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Check if hovering over interactive elements
      const target = e.target;
      setIsHovering(
        target.closest("button") || 
        target.closest("a") || 
        target.style.cursor === "pointer"
      );
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[10000] hidden md:block">
      {/* Precision Dot */}
      <motion.div
        className="absolute w-1.5 h-1.5 bg-slate-900 rounded-full"
        style={{ 
          x: dotX, 
          y: dotY, 
          translateX: "-50%", 
          translateY: "-50%" 
        }}
      />

      {/* Main Liquid Ring */}
      <motion.div
        className="absolute rounded-full border border-slate-900/10 bg-cyan-500/5 backdrop-blur-[2px]"
        animate={{
          width: isHovering ? 80 : 40,
          height: isHovering ? 80 : 40,
          borderColor: isHovering ? "rgba(6, 182, 212, 0.5)" : "rgba(15, 23, 42, 0.1)",
          backgroundColor: isHovering ? "rgba(6, 182, 212, 0.1)" : "rgba(6, 182, 212, 0.05)",
        }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
        style={{ 
          x, 
          y, 
          translateX: "-50%", 
          translateY: "-50%" 
        }}
      >
        {/* Subtle Glow inside the ring */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_15px_rgba(6,182,212,0.1)]" />
      </motion.div>

      {/* Outer Ambient Trail (Very Subtle) */}
      <motion.div
        className="absolute w-32 h-32 bg-cyan-200/20 blur-3xl rounded-full"
        style={{ 
          x, 
          y, 
          translateX: "-50%", 
          translateY: "-50%",
          opacity: isHovering ? 0.6 : 0.3 
        }}
      />
    </div>
  );
};

export default CursorFollower;