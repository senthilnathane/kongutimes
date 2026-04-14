import { useState } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { candidatesData } from "@/data/candidatesData";

const Candidates2026 = () => {
  const [search, setSearch] = useState("");

  const filtered = candidatesData.filter(
    (c) =>
      c.constituency.toLowerCase().includes(search.toLowerCase()) ||
      c.dmk.toLowerCase().includes(search.toLowerCase()) ||
      c.aiadmk.toLowerCase().includes(search.toLowerCase()) ||
      c.tvk.toLowerCase().includes(search.toLowerCase()) ||
      c.ntk.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background font-body">
      <SiteHeader />

      {/* Hero */}
      <div className="gradient-hero py-8 md:py-12 border-b-[3px] border-accent-orange">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <p className="text-xs text-white/40 mb-2">
            <Link to="/" className="text-accent-orange hover:underline">Home</Link> › Candidates 2026
          </p>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white">
            🗳 Candidates <span className="text-accent-orange">2026</span>
          </h1>
          <p className="text-white/60 font-tamil-serif mt-2">2026 தமிழ்நாடு சட்டமன்றத் தேர்தல் — வேட்பாளர்கள் பட்டியல்</p>
          <p className="text-xs text-white/40 mt-2">All 234 constituencies · Polling: April 23, 2026 · Results: May 4, 2026</p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-5">
        <div className="flex gap-3 flex-wrap">
          <div className="bg-card border border-border rounded-lg px-5 py-3 text-center border-t-4 border-t-accent-orange flex-1 min-w-[100px]">
            <div className="text-2xl font-bold text-foreground">234</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Constituencies</div>
          </div>
          <div className="bg-card border border-border rounded-lg px-5 py-3 text-center border-t-4 flex-1 min-w-[100px]" style={{borderTopColor:"#CC0000"}}>
            <div className="text-xl font-bold" style={{color:"#CC0000"}}>DMK</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">SPA Alliance</div>
          </div>
          <div className="bg-card border border-border rounded-lg px-5 py-3 text-center border-t-4 flex-1 min-w-[100px]" style={{borderTopColor:"#1a7a2e"}}>
            <div className="text-xl font-bold" style={{color:"#1a7a2e"}}>AIADMK</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">NDA Alliance</div>
          </div>
          <div className="bg-card border border-border rounded-lg px-5 py-3 text-center border-t-4 flex-1 min-w-[100px]" style={{borderTopColor:"#B8860B"}}>
            <div className="text-xl font-bold" style={{color:"#B8860B"}}>TVK</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Vijay's Party</div>
          </div>
          <div className="bg-card border border-border rounded-lg px-5 py-3 text-center border-t-4 flex-1 min-w-[100px]" style={{borderTopColor:"#8B0000"}}>
            <div className="text-xl font-bold" style={{color:"#8B0000"}}>NTK</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Seeman</div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 pb-4 flex gap-4 flex-wrap items-center">
        <span className="pill-dmk text-[11px] font-bold px-3 py-1 rounded-full">DMK (SPA)</span>
        <span className="pill-aiadmk text-[11px] font-bold px-3 py-1 rounded-full">AIADMK (NDA)</span>
        <span className="pill-tvk text-[11px] font-bold px-3 py-1 rounded-full">TVK</span>
        <span className="pill-ntk text-[11px] font-bold px-3 py-1 rounded-full">NTK</span>
      </div>

      {/* Search */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 pb-4">
        <input
          type="text"
          placeholder="Search constituency or candidate..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-lg border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange"
          style={{ borderColor: "hsl(var(--border))" }}
        />
      </div>

      {/* Table */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 pb-12 overflow-x-auto">
        <table className="w-full border-collapse bg-card border rounded-lg overflow-hidden text-sm shadow-md" style={{borderColor:"hsl(var(--border))"}}>
          <thead>
            <tr>
              <th className="bg-[#0d0d0d] text-white/60 px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider">AC</th>
              <th className="bg-[#0d0d0d] text-white/60 px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider">Constituency · தொகுதி</th>
              <th className="px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider" style={{background:"linear-gradient(135deg,#1a0000,#8B0000)",color:"#FFB3B3"}}>DMK (SPA)</th>
              <th className="px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider" style={{background:"linear-gradient(135deg,#0a2e14,#1a7a2e)",color:"#B8FFD0"}}>AIADMK (NDA)</th>
              <th className="px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider" style={{background:"linear-gradient(135deg,#5c0000,#cc6600)",color:"#FFD700"}}>TVK</th>
              <th className="px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider" style={{background:"linear-gradient(135deg,#3d0008,#8B0000)",color:"#FFB3B3"}}>NTK</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr key={row.ac} className={`hover:bg-accent-orange/5 transition-colors ${i % 2 === 1 ? "bg-background/50" : ""}`}>
                <td className="px-3 py-2 text-muted-foreground font-bold text-xs">{row.ac}</td>
                <td className="px-3 py-2 font-bold text-foreground text-sm min-w-[150px]">{row.constituency}</td>
                <td className="px-3 py-2"><span className="candidate-pill candidate-pill-dmk">{row.dmk}</span></td>
                <td className="px-3 py-2"><span className="candidate-pill candidate-pill-aiadmk">{row.aiadmk}</span></td>
                <td className="px-3 py-2"><span className="candidate-pill candidate-pill-tvk">{row.tvk}</span></td>
                <td className="px-3 py-2"><span className="candidate-pill candidate-pill-ntk">{row.ntk}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SiteFooter />
    </div>
  );
};

export default Candidates2026;
