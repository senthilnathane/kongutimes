import { Link } from "react-router-dom";
import { motion } from "framer-motion";
<<<<<<< HEAD
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import konguMap from "@/assets/kongu-map.png";
=======
import logo from "@/assets/kongu-times-logo.png";
import { NavLink } from "@/components/NavLink";
>>>>>>> 5235170 (Initial commit: Kongu Times with animations and candidates page)

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

const tickerNews = "🔴 கொங்கு நாட்டின் அனைத்து மாவட்ட செய்திகளும் ஒரே இடத்தில் | கோயம்புத்தூரில் தொழிற்பூங்கா திறப்பு | திருப்பூர் ஜவுளி ஏற்றுமதி 20% உயர்வு | ஈரோடு மஞ்சள் விலை சுதந்திரம் | நாமக்கல் முட்டை உற்பத்தி சாதனை | திண்டுக்கல் பூட்டு ஏற்றுமதி வளர்ச்சி | கரூர் பேருந்து நிலையம் | சேலம் எஃகு ஆலையில் விரிவாக்கம்";

const newsTemplates = [
  {
    title: "தமிழகத்தில் AI மற்றும் தொழில்நுட்ப வளர்ச்சி திட்டம் 2026ல் தொடங்குகிறது",
    summary: "மாநில அரசு AI ஆராய்ச்சி மையங்கள் மற்றும் ஸ்டார்ட்-அப் ஆதரவு திட்டங்களை அறிவித்துள்ளது.",
  },
  {
    title: "கோவிட் பிறகு சுற்றுலா துறை மீண்டும் உயிர்ப்பு பெறுகிறது",
    summary: "தமிழகத்தில் புதிய சுற்றுலா தளங்கள் மற்றும் கிராமிய சுற்றுலா திட்டங்கள் விரிவாக்கப்படுகின்றன.",
  },
  {
    title: "நீர் பாதுகாப்பு மற்றும் மழைநீர் சேகரிப்பு திட்டங்கள் விரிவாக்கம்",
    summary: "உலக வங்கியின் உதவியுடன் புதிய நீர் சேமிப்பு திட்டங்கள் செயல் படுத்தப்படுகின்றன.",
  },
  {
    title: "கல்வி துறையில் டிஜிட்டல் மாற்றம்: ஆன்லைன் கல்வி முழுமையாக்கம்",
    summary: "பள்ளிகள் மற்றும் கல்லூரிகளுக்கு இணைய வசதிகள் மற்றும் டிஜிட்டல் கருவிகள் வழங்கப்படுகின்றன.",
  },
  {
    title: "விவசாயத்தில் புதிய தொழில்நுட்பங்கள் மற்றும் உதவித்தொகை",
    summary: "ஆர்கானிக் விவசாயம் மற்றும் ஸ்மார்ட் விவசாய கருவிகளுக்கு அரசு உதவித்தொகை அறிவிக்கப்பட்டது.",
  },
  {
    title: "சுகாதார துறையில் தொலைநோய் கண்காணிப்பு அமைப்பு",
    summary: "மருத்துவமனைகளுக்கு AI அடிப்படையிலான நோய் கண்காணிப்பு மற்றும் தொலைநோய் சிகிச்சை வசதிகள்.",
  },
  {
    title: "பொருளாதார வளர்ச்சியில் தமிழகம் முன்னணியில்",
    summary: "உற்பத்தி மற்றும் ஏற்றுமதி துறைகளில் புதிய முதலீடுகள் மற்றும் வேலைவாய்ப்புகள் உருவாக்கப்படுகின்றன.",
  },
  {
    title: "சுற்றுச்சூழல் பாதுகாப்பு: காடுகள் மற்றும் வனப்பகுதிகள் விரிவாக்கம்",
    summary: "மாநிலத்தில் புதிய காட்டு பகுதிகள் மற்றும் சுற்றுச்சூழல் திட்டங்கள் செயல் படுத்தப்படுகின்றன.",
  },
  {
    title: "போக்குவரத்து துறையில் மின்சார வாகனங்கள் மற்றும் சார்ஜிங் நிலையங்கள்",
    summary: "தமிழகத்தில் மின்சார வாகனங்கள் மற்றும் சார்ஜிங் இன்ப்ராஸ்ட்ரக்சர் விரிவாக்கப்படுகிறது.",
  },
  {
    title: "பண்பாட்டு மற்றும் கலை நிகழ்ச்சிகள்: தமிழ் இலக்கிய விழா",
    summary: "ஆண்டுதோறும் தமிழ் இலக்கிய விழா மற்றும் கலை நிகழ்ச்சிகள் மாநிலம் முழுவதும் நடத்தப்படுகின்றன.",
  },
];

const newsTimes = [
  "1 மணி நேரம் முன்",
  "2 மணி நேரம் முன்",
  "3 மணி நேரம் முன்",
  "4 மணி நேரம் முன்",
  "5 மணி நேரம் முன்",
  "6 மணி நேரம் முன்",
  "7 மணி நேரம் முன்",
  "8 மணி நேரம் முன்",
  "9 மணி நேரம் முன்",
  "10 மணி நேரம் முன்",
  "11 மணி நேரம் முன்",
  "12 மணி நேரம் முன்",
  "13 மணி நேரம் முன்",
  "14 மணி நேரம் முன்",
  "15 மணி நேரம் முன்",
  "16 மணி நேரம் முன்",
  "17 மணி நேரம் முன்",
  "18 மணி நேரம் முன்",
  "19 மணி நேரம் முன்",
  "20 மணி நேரம் முன்",
];

const tamilNaduNews = Array.from({ length: 100 }, (_, index) => {
  const template = newsTemplates[index % newsTemplates.length];
  const position = index + 1;
  return {
    id: `tn-${position}`,
    title: template.title.replace("{n}", String(position)),
    summary: template.summary,
    time: newsTimes[index % newsTimes.length],
  };
});

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <SiteHeader />

      {/* District quick links */}
      <section className="border-b border-border bg-surface">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap py-3">
            <NavLink
              to="/candidates"
              className="inline-flex whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground transition hover:bg-primary/10"
              activeClassName="border-primary bg-primary/10 text-primary-foreground shadow-sm"
            >
              🗳️ வேட்பாளர்கள்
            </NavLink>
            {districts.map((district) => (
              <NavLink
                key={district.id}
                to={`/${district.id}`}
                className="inline-flex whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground transition hover:bg-primary/10"
                activeClassName="border-primary bg-primary/10 text-primary-foreground shadow-sm"
              >
                {district.name}
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="bg-foreground text-white py-2 ticker-wrap">
        <span className="ticker-text text-sm">{tickerNews}</span>
      </div>

<<<<<<< HEAD
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
=======
      {/* Tamil Nadu Overall News */}
      <section className="container mx-auto px-4 pb-10">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">தமிழ்நாடு செய்திகள்</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">
            முழு தமிழ்நாட்டை தொடுக்கும் முக்கிய செய்திகள் மற்றும் வளர்ச்சித் திட்டங்களை இங்கே படியுங்கள்.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {tamilNaduNews.map((item, index) => (
            <motion.article
              key={item.id}
              className="news-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="h-1.5 bg-primary rounded-t-md" />
              <div className="p-5">
                <h3 className="font-bold text-card-foreground mb-2 leading-relaxed">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{item.summary}</p>
                <span className="text-xs text-muted-foreground">🕐 {item.time}</span>
              </div>
            </motion.article>
>>>>>>> 5235170 (Initial commit: Kongu Times with animations and candidates page)
          ))}
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* Footer */}
      <footer className="gradient-header py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <p className="font-semibold">© 2026 The Kongu Times</p>
          <p className="text-sm opacity-80 mt-1">கொங்கு நாட்டின் குரல்</p>
          <div className="mt-4 pt-4 border-t border-primary-foreground/20">
            <p className="text-xs opacity-70">
              🌐 Live on GitHub Pages
            </p>
            <p className="text-xs opacity-60 font-mono mt-1">
              https://yourusername.github.io/kongutimes
            </p>
          </div>
>>>>>>> 5235170 (Initial commit: Kongu Times with animations and candidates page)
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
