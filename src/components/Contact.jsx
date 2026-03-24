import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faSlack } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="w-full bg-[#0F172A] rounded-tl-3xl px-6 md:px-16 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">CONTACT US</h1>
      <div className="border-t border-white/20 pt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-[#FACC15] text-xs font-bold tracking-widest uppercase mb-4">Social</h2>
          <a href="https://instagram.com/lucknow_build_guild" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 text-white hover:text-[#FACC15] mb-3 transition-colors">
            <FontAwesomeIcon icon={faInstagram} />
            <span>@lucknow_build_guild</span>
          </a>
          <a href="https://app.slack.com/client/E09V59WQY1E/C0AM3G39X3M" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 text-white hover:text-[#FACC15] transition-colors">
            <FontAwesomeIcon icon={faSlack} />
            <span>#build-guild-lucknow</span>
          </a>
        </div>
        <div>
          <h2 className="text-[#FACC15] text-xs font-bold tracking-widest uppercase mb-4">Email</h2>
          {["lucknowguild@gmail.com", "kuratus89@gmail.com", "atharvshukla466@gmail.com"].map(email => (
            <a key={email} href={`mailto:${email}`}
              className="flex items-center gap-3 text-white hover:text-[#FACC15] mb-3 transition-colors">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>{email}</span>
            </a>
          ))}
        </div>
      </div>
      <p className="text-white/30 text-xs mt-10">© 2026 Blueprint Lucknow Guild · Sponsored by Hack Club</p>
    </div>
  )
}

export default Contact