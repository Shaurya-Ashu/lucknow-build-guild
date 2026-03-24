import React from 'react'

const Herosec = () => {
  return (
    <div className="w-full h-full bg-[#0A365D] text-[#FACC15] px-6 md:px-10 flex items-center">
      <div className="w-full md:w-2/3 flex flex-col pt-16">
        <p className="text-white text-xs md:text-sm font-semibold mb-4 tracking-[0.2em] uppercase">
          April 19, 2026 · Lucknow · Free Event
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-2 leading-tight">
          Wanna hangout with awesome guys?
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 leading-tight">
          Come to Build-Guild Lucknow<br />
          Learn hardware and get food
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold">
          For free!
        </h1>
        <a href="https://blueprint.hackclub.com/guilds/invite/lucknow"
          className="inline-block bg-[#FACC15] text-[#0A365D] font-bold text-base md:text-xl px-8 py-4 rounded mt-8 hover:bg-yellow-300 transition-colors w-fit">
          Join Us →
        </a>
      </div>
    </div>
  )
}

export default Herosec