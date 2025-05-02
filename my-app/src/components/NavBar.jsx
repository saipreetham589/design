import { useEffect, useState } from 'react';
import { FaUser,FaSun, FaMoon } from 'react-icons/fa';
import { ChevronDown } from 'lucide-react';

const personalities = [
  "Henry George", "Albert Einstein", "Mahatma Gandhi", "Nikola Tesla",
  "Steve Jobs", "Marie Curie", "Leonardo da Vinci", "Ada Lovelace",
  "Socrates", "Confucius"
];

export default function NavBar() {
  const [isDark, setIsDark] = useState(false);
  const [personality, setPersonality] = useState("Henry George");

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <header className="z-50 fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-full bg-white/80 backdrop-blur-md px-6 py-3 rounded-3xl shadow-lg flex items-center justify-between font-body">
      
      {/* Logo */}
      <div className="text-2xl font-heading font-semibold text-black">PastPort</div>

      {/* Right-side controls */}
      <div className="flex items-center gap-4 text-sm text-white">
        {/* Links */}
        <a href="#" className="font-heading font-semibold text-black">Timeline</a>

        {/* Personality Dropdown */}
        <div className="relative">
          <select
            value={personality}
            onChange={(e) => setPersonality(e.target.value)}
            className="bg-transparent appearance-none pl-3 pr-6 py-1 rounded-md font-heading font-semibold text-black focus:outline-none focus:ring-0"
          >
            {personalities.map((p, i) => (
              <option key={i} value={p} className="text-black">{p}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
        </div>


        {/* Theme Toggle Button */}
        <button
            onClick={() => setIsDark(!isDark)}
            className="w-6 h-8 items-center font-semibold hover:opacity-90 text-black"
        >
            {isDark ? <FaSun /> : <FaMoon />}
        </button>

        <button className="bg-ppYellow text-black font-heading font-semibold px-4 py-1 rounded-full hover:opacity-90">
            Sign up
        </button>

        <div className="w-8 h-8 bg-ppYellow rounded-full flex items-center justify-center text-black">
          <FaUser />
        </div>
      </div>
    </header>
  );
}
