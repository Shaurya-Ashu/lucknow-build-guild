import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "HELP US", path: "/helpus" },
    { label: "FAQs", path: "/faqs" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A365D]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/">
          <img src="/img/Blueprint Lucknow Guild.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((item) => (
            <Link key={item.label} to={item.path}
              className="text-white font-semibold text-sm tracking-wide hover:text-[#FACC15] transition-colors">
              {item.label}
            </Link>
          ))}
          <a href="https://blueprint.hackclub.com/guilds/invite/lucknow"
            className="bg-[#FACC15] text-[#0A365D] font-bold px-4 py-2 rounded text-sm hover:bg-yellow-300 transition-colors">
            JOIN US
          </a>
        </div>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setOpen(!open)}>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0A365D] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((item) => (
            <Link key={item.label} to={item.path} onClick={() => setOpen(false)}
              className="text-white font-semibold text-sm tracking-wide hover:text-[#FACC15] transition-colors">
              {item.label}
            </Link>
          ))}
          <a href="https://blueprint.hackclub.com/guilds/invite/lucknow"
            className="bg-[#FACC15] text-[#0A365D] font-bold px-4 py-2 rounded text-sm text-center">
            JOIN US
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;