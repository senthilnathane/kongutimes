import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import konguMap from "@/assets/kongu-map.png";

const districts = [
  { id: "coimbatore", name: "கோயம்புத்தூர்", nameEn: "Coimbatore", color: "bg-district-coimbatore" },
  { id: "erode", name: "ஈரோடு", nameEn: "Erode", color: "bg-district-erode" },
  { id: "tiruppur", name: "திருப்பூர்", nameEn: "Tiruppur", color: "bg-district-tiruppur" },
  { id: "salem", name: "சேலம்", nameEn: "Salem", color: "bg-district-salem" },
  { id: "namakkal", name: "நாமக்கல்", nameEn: "Namakkal", color: "bg-district-namakkal" },
  { id: "karur", name: "கரூர்", nameEn: "Karur", color: "bg-district-karur" },
  { id: "dindigul", name: "திண்டுக்கல்", nameEn: "Dindigul", color: "bg-district-dindigul" },
  { id: "dharmapuri", name: "தர்மபுரி", nameEn: "Dharmapuri", color: "bg-district-dharmapuri" },
];

const featuredStory = {
  title: "2026 தமிழ்நாடு சட்டமன்றத் தேர்தல்: கொங்கு மண்டலத்தில் கடும் போட்டி",
  summary: "கொங்கு மண்டலத்தில் உள்ள 8 மாவட்டங்களிலும் அனைத்து கட்சிகளும் தீவிர பிரச்சாரம் மேற்கொண்டு வருகின்றன. DMK, AIADMK, TVK மற்றும் NTK கட்சிகள் வேட்பாளர்களை அறிவித்துள்ளன.",
  category: "Election 2026",
  time: "1 மணி நேரம் முன்",
};

const latestNews = [
  { title: "கோயம்புத்தூரில் புதிய தொழிற்பூங்கா திறப்பு", district: "Coimbatore", time: "2 மணி நேரம் முன்", link: "/coimbatore" },
  { title: "திருப்பூர் ஜவுளி ஏற்றுமதி 20% அதிகரிப்பு", district: "Tiruppur", time: "3 மணி நேரம் முன்", link: "/tiruppur" },
  { title: "நாமக்கல் முட்டை உற்பத்தி சாதனை", district: "Namakkal", time: "4 மணி நேரம் முன்", link: "/namakkal" },
  { title: "சேலம் எஃகு ஆலை விரிவாக்கம்", district: "Salem", time: "5 மணி நேரம் முன்", link: "/salem" },
  { title: "ஈரோடு மஞ்சள் சந்தையில் விலை உயர்வு", district: "Erode", time: "6 மணி நேரம் முன்", link: "/erode" },
];

const tickerNews = "🔴 கொங்கு நாட்டின் அனைத்து மாவட்ட செய்திகளும் ஒரே இடத்தில் | கோயம்புத்தூரில் புதிய தொழிற்பூங்கா திறப்பு | திருப்பூர் ஜவுளி ஏற்றுமதி 20% அதிகரிப்பு | நாமக்கல் முட்டை உற்பத்தி சாதனை | சேலம் எஃகு ஆலை விரிவாக்கம்";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <SiteHeader />

      {/* Ticker */}
      <div className="bg-foreground text-white py-2 ticker-wrap">
        <span className="ticker-text text-sm">{tickerNews}</span>
      </div>

      {/* Hero Section */}
      <section className="gradient-hero py-10 md:py-16 border-b-[3px] border-accent-orange">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="election-badge bg-accent-orange/20 text-accent-orange mb-4 inline-block">
                🗳 Election 2026
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-4">
                {featuredStory.title}
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">{featuredStory.summary}</p>
              <div className="flex gap-3">
                <Link to="/candidates-2026" className="inline-flex items-center gap-2 bg-accent-orange text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:brightness-110 transition-all">
                  🗳 View Candidates
                </Link>
                <span className="text-xs text-white/40 self-center">🕐 {featuredStory.time}</span>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img src={konguMap} alt="Kongu Region Map" className="w-64 md:w-80 lg:w-96 drop-shadow-2xl rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* District Grid */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-6 py-10">
        <h2 className="text-2xl font-display font-bold text-foreground mb-6">
          மாவட்ட செய்திகள் · <span className="text-accent-orange">District News</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
          {districts.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <Link to={`/${d.id}`} className="district-card text-center block group">
                <div className={`w-3 h-3 rounded-full ${d.color} mx-auto mb-2`} />
                <span className="font-bold text-sm text-card-foreground group-hover:text-accent-orange transition-colors">{d.name}</span>
                <span className="block text-xs text-muted-foreground mt-0.5">{d.nameEn}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-6 pb-10">
        <h2 className="text-2xl font-display font-bold text-foreground mb-6">
          சமீபத்திய செய்திகள் · <span className="text-accent-orange">Latest</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {latestNews.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={item.link} className="block">
                <article className="news-card p-5 group">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent-orange">{item.district}</span>
                  <h3 className="font-display font-bold text-card-foreground mt-1 mb-2 leading-relaxed group-hover:text-accent-orange transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">🕐 {item.time}</span>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Election Highlights */}
      <section className="bg-foreground/5 py-10">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">
            🗳 தேர்தல் 2026 · <span className="text-accent-orange">Election Highlights</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-card rounded-xl p-5 border border-border text-center border-t-4 border-t-accent-orange">
              <div className="text-3xl font-bold text-foreground">234</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Constituencies</div>
            </div>
            <div className="bg-card rounded-xl p-5 border border-border text-center border-t-4" style={{borderTopColor: "#CC0000"}}>
              <div className="text-2xl font-bold" style={{color: "#CC0000"}}>DMK</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">SPA Alliance</div>
            </div>
            <div className="bg-card rounded-xl p-5 border border-border text-center border-t-4" style={{borderTopColor: "#1a7a2e"}}>
              <div className="text-2xl font-bold" style={{color: "#1a7a2e"}}>AIADMK</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">NDA Alliance</div>
            </div>
            <div className="bg-card rounded-xl p-5 border border-border text-center border-t-4" style={{borderTopColor: "#B8860B"}}>
              <div className="text-2xl font-bold" style={{color: "#B8860B"}}>TVK</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Vijay's Party</div>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link to="/candidates-2026" className="inline-flex items-center gap-2 bg-accent-orange text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:brightness-110 transition-all">
              View All 234 Candidates →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
