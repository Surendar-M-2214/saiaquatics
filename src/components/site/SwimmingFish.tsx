import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export function SwimmingFish() {
  const { scrollYProgress } = useScroll();
  
  // Make the scroll values buttery smooth for fluid swimming
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    mass: 0.8,
  });

  // Transform mapping for X position (swimming left and right across the screen)
  // Assumes the image faces LEFT by default.
  const x = useTransform(smoothProgress, 
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1], 
    ['120vw', '10vw', '80vw', '20vw', '90vw', '15vw', '70vw', '50vw']
  );

  // Transform mapping for Y position (swimming down the screen as we scroll deeper)
  const y = useTransform(smoothProgress, 
    [0, 1], 
    ['10vh', '90vh']
  );

  // Rotate slightly to simulate pitching up/down while swimming
  const rotate = useTransform(smoothProgress, 
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 
    [10, -5, 10, -5, 10, -5, 10, -5, 10, -5, 0]
  );

  // Flip the fish horizontally depending on direction (facing left or right)
  const scaleX = useTransform(smoothProgress, 
    [0, 0.14, 0.16, 0.29, 0.31, 0.44, 0.46, 0.59, 0.61, 0.74, 0.76, 0.89, 0.91, 1], 
    [1, 1, -1, -1, 1, 1, -1, -1, 1, 1, -1, -1, 1, 1]
  );

  return (
    <motion.div
      className="fixed top-0 left-0 z-0 pointer-events-none"
      style={{
        x,
        y,
      }}
    >
      <motion.div style={{ scaleX, rotate }}>
        {/* Continuous swimming bobbing animation */}
        <motion.img 
          src="/nemo.png" 
          alt="Swimming Nemo"
          className="w-48 md:w-64 h-auto opacity-70 drop-shadow-[0_0_15px_rgba(255,165,0,0.4)]"
          style={{ mixBlendMode: 'screen' }}
          animate={{
            y: [0, -20, 0],
            rotateZ: [0, 5, -2, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
}
