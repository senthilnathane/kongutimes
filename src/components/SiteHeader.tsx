import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/kongu-times-logo.png";

const navItems = [
  { path: "/", label: "🏠 Home" },
  { path: "/candidates-2026", label: "🗳 Candidates 2026", special: true },
  { path: "/erode", label: "Erode · ஈரோடு" },
  { path: "/coimbatore", label: "Coimbatore · கோயம்புத்தூர்" },
  { path: "/tiruppur", label: "Tiruppur · திருப்பூர்" },
  { path: "/salem", label: "Salem · சேலம்" },
  { path: "/namakkal", label: "Namakkal · நாமக்கல்" },
  { path: "/karur", label: "Karur · கரூர்" },
  { path: "/dharmapuri", label: "Dharmapuri · தர்மபுரி" },
  { path: "/dindigul", label: "Dindigul · திண்டுக்கல்" },
];

const SiteHeader = () => {
  const location = useLocation();

  return (
    <>
      {/* Main Header */}
      <header className="gradient-header sticky top-0 z-50 border-b-[3px] border-accent-orange">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-4 md:px-6 py-2.5 gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="The Kongu Times" className="h-10 md:h-12 rounded-lg" />
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-white font-display leading-tight">The Kongu Times</h1>
              <p className="text-[11px] text-white/50 font-tamil-serif">கொங்கு மண்டலத்தின் குரல்</p>
            </div>
          </Link>
          <div className="hidden md:block text-center">
            <p className="text-xs text-white/50 font-tamil-serif">கொங்கு மண்டலத்தின் குரல் · Voice of the Kongu Region</p>
          </div>
          <div className="flex gap-0.5 bg-white/10 rounded-md p-0.5">
            <button className="text-[11px] font-semibold px-3 py-1 rounded bg-accent-orange text-white font-body">தமிழ்</button>
            <button className="text-[11px] font-semibold px-3 py-1 rounded text-white/50 font-body">English</button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-header-mid border-b border-white/10">
        <div className="max-w-[1280px] mx-auto flex items-center px-4 md:px-6 overflow-x-auto scrollbar-hide">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${item.special ? "nav-link-special" : ""} ${
                location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path))
                  ? "active"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Election Banner */}
      <div className="gradient-accent py-1.5 text-center">
        <div className="flex items-center justify-center gap-2 flex-wrap px-4 text-white text-xs font-semibold font-body">
          <span className="election-badge">🗳 ELECTION 2026</span>
          <span>தமிழ்நாடு சட்டமன்றத் தேர்தல் · April 23, 2026 · Counting: May 4</span>
          <span className="election-badge">234 தொகுதிகள்</span>
        </div>
      </div>
    </>
  );
};

export default SiteHeader;
