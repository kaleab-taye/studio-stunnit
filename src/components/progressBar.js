import React, { useState, useEffect } from 'react';

const ProgressBar = ({ duration, className }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return 0;
        } else {
          return prevProgress + 1;
        }
      });
    }, duration / 100);


    
    return () => clearInterval(interval);
  }, [duration]);

  return <div className={className} style={{ width: `${progress}%`, backgroundColor: 'blue', height: 10 }} />;
};

export default ProgressBar;