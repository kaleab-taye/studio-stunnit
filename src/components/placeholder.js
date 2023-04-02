import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Placeholder({ isLoading, children }) {
    useEffect(()=>{
console.log('is',isLoading)
    },[isLoading])
  return (
    <div className="relative">
      {isLoading ? (
        <div className=" absolute w-full h-full grid">
          <span class="m-auto animate-pulse inline-flex h-full w-full bg-surface"></span>
        </div>
      ) : null}
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ duration: 1 }}
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}