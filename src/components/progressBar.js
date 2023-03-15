import React, { useState, useEffect } from 'react';

const ProgressBar = ({ duration, className, progress, setProgress }) => {
  // const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(progress)
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

  return<div>

  <div className={'bg-gray-300 w-full h-[3px] '+className}>

    <div style={{ width: `${progress}%`, backgroundColor: '#bc8028', height: 3 }} >

    </div>
  </div>
  </div>
};

export default ProgressBar;