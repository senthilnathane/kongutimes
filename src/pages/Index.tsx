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

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-tamil">
      {/* Header */}
      <header className="gradient-header">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <img src={logo} alt="The Kongu Times" className="h-14 md:h-20 rounded-lg" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">The Kongu Times</h1>
            <p className="text-sm text-primary-foreground/80">கொங்கு நாட்டின் நம்பகமான செய்தி</p>
          </div>
        </div>
      </header>

      {/* Ticker */}
      <div className="bg-foreground text-primary-foreground py-2 ticker-wrap">
        <span className="ticker-text text-sm">{tickerNews}</span>
      </div>

      {/* District Navigation */}
      <main className="container mx-auto px-4 py-10">
        <h2 className="text-xl font-bold mb-6 text-foreground text-center">மாவட்டத்தை தேர்வு செய்யவும்</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {districts.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/${d.id}`}
                className="district-card text-center block hover:shadow-xl"
              >
                <div className={`w-4 h-4 rounded-full bg-district-${d.id} mx-auto mb-3`} />
                <span className="font-bold text-base text-card-foreground">{d.name}</span>
                <span className="block text-xs text-muted-foreground mt-1">{d.nameEn}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="gradient-header py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <p className="font-semibold">© 2026 The Kongu Times</p>
          <p className="text-sm opacity-80 mt-1">கொங்கு நாட்டின் குரல்</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
