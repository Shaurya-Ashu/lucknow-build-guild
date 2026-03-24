import React, { useEffect, useState } from 'react';

const Robo = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let angle = Math.atan2(
        e.clientY - window.innerHeight / 2,
        e.clientX - window.innerWidth / 2
      ) * 180 / Math.PI;
      setRotate(angle);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className='w-full min-h-screen grid-bg border-t border-[#657795]/30'>
      <div className='relative w-full h-full min-h-screen text-white flex flex-col items-center justify-center py-20 px-6'>
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center mb-4">
          Worried about travel?
        </h1>
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center text-[#FACC15] mb-10">
          We got you covered.
        </h1>

        {/* Eyes */}
        <div className='flex gap-6 sm:gap-10 mb-10'>
          {[1, 2].map(i => (
            <div key={i} className="flex items-center justify-center rounded-full bg-zinc-100 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44">
              <div className='h-1/2 w-1/2 flex items-center justify-center rounded-full bg-zinc-900'>
                <div style={{ transform: `rotate(${rotate}deg)` }} className='w-full h-1/4'>
                  <div className='h-full w-1/4 rounded-full bg-zinc-100'></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <a href="https://gas.hackclub.com/"
          className='bg-[#FACC15] text-[#15294D] font-bold text-lg px-10 py-4 rounded hover:bg-yellow-300 transition-colors'>
          Apply for Gas Fund →
        </a>
      </div>
    </div>
  );
};

export default Robo;