import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/kongu-times-logo.png";

const districts = [
  { id: "coimbatore", name: "கோயம்புத்தூர்", nameEn: "Coimbatore" },
  { id: "erode", name: "ஈரோடு", nameEn: "Erode" },
  { id: "tiruppur", name: "திருப்பூர்", nameEn: "Tiruppur" },
  { id: "karur", name: "கரூர்", nameEn: "Karur" },
  { id: "salem", name: "சேலம்", nameEn: "Salem" },
  { id: "namakkal", name: "நாமக்கல்", nameEn: "Namakkal" },
  { id: "dindigul", name: "திண்டுக்கல்", nameEn: "Dindigul" },
];

const tickerNews = "🔴 கொங்கு நாட்டின் அனைத்து மாவட்ட செய்திகளும் ஒரே இடத்தில் | கோயம்புத்தூரில் புதிய தொழிற்பூங்கா திறப்பு | திருப்பூர் ஜவுளி ஏற்றுமதி 20% அதிகரிப்பு | நாமக்கல் முட்டை உற்பத்தி சாதனை | சேலம் எஃகு ஆலை விரிவாக்கம்";

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  time: string;
  content?: string;
  image?: string;
}

interface DistrictLayoutProps {
  districtId: string;
  districtName: string;
  districtNameEn: string;
  news: NewsItem[];
}

const DistrictLayout = ({ districtId, districtName, districtNameEn, news }: DistrictLayoutProps) => {
  return (
    <div className="min-h-screen bg-background font-tamil">
      {/* Header */}
      <header className="gradient-header">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/">
            <img src={logo} alt="The Kongu Times" className="h-14 md:h-20 rounded-lg" />
          </Link>
          <div>
            <Link to="/">
              <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">The Kongu Times</h1>
            </Link>
            <p className="text-sm text-primary-foreground/80">கொங்கு நாட்டின் நம்பகமான செய்தி</p>
          </div>
        </div>
      </header>

      {/* Ticker */}
      <div className="bg-foreground text-primary-foreground py-2 ticker-wrap">
        <span className="ticker-text text-sm">{tickerNews}</span>
      </div>

      {/* District Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <h2 className="text-lg font-bold mb-3 text-muted-foreground">மாவட்டங்கள்</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {districts.map((d) => (
            <Link
              key={d.id}
              to={`/${d.id}`}
              className={`district-card text-center ${districtId === d.id ? "ring-2 ring-primary shadow-md" : ""}`}
            >
              <div className={`w-3 h-3 rounded-full bg-district-${d.id} mx-auto mb-2`} />
              <span className="font-semibold text-sm text-card-foreground">{d.name}</span>
              <span className="block text-xs text-muted-foreground">{d.nameEn}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* News Section */}
      <main className="container mx-auto px-4 pb-12">
        <motion.div
          key={districtId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-4 h-4 rounded-full bg-district-${districtId}`} />
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              {districtName} செய்திகள்
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {news.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/${districtId}/${item.id}`} className="block">
                  <article className="news-card">
                    <div className={`h-1.5 bg-district-${districtId}`} />
                    <div className="p-5">
                      <h3 className="font-bold text-card-foreground mb-2 leading-relaxed">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{item.summary}</p>
                      <span className="text-xs text-muted-foreground">🕐 {item.time}</span>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="gradient-header py-6">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <p className="font-semibold">© 2026 The Kongu Times</p>
          <p className="text-sm opacity-80 mt-1">கொங்கு நாட்டின் குரல்</p>
        </div>
      </footer>
    </div>
  );
};

export default DistrictLayout;
