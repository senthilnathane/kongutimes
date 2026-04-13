import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/kongu-times-logo.png";

const districts = [
  { id: "coimbatore", name: "கோயம்புத்தூர்", nameEn: "Coimbatore", color: "bg-district-coimbatore" },
  { id: "erode", name: "ஈரோடு", nameEn: "Erode", color: "bg-district-erode" },
  { id: "tiruppur", name: "திருப்பூர்", nameEn: "Tiruppur", color: "bg-district-tiruppur" },
  { id: "karur", name: "கரூர்", nameEn: "Karur", color: "bg-district-karur" },
  { id: "salem", name: "சேலம்", nameEn: "Salem", color: "bg-district-salem" },
  { id: "namakkal", name: "நாமக்கல்", nameEn: "Namakkal", color: "bg-district-namakkal" },
  { id: "dindigul", name: "திண்டுக்கல்", nameEn: "Dindigul", color: "bg-district-dindigul" },
];

const newsData: Record<string, { title: string; summary: string; time: string }[]> = {
  coimbatore: [
    { title: "கோயம்புத்தூரில் புதிய தொழிற்பூங்கா திறப்பு", summary: "மாவட்ட ஆட்சியர் புதிய தொழிற்பூங்காவை திறந்து வைத்தார்.", time: "2 மணி நேரம் முன்" },
    { title: "மாநகராட்சி பள்ளிகளில் சிறப்பு முகாம்", summary: "அனைத்து மாநகராட்சி பள்ளிகளிலும் இலவச மருத்துவ முகாம் நடைபெற்றது.", time: "4 மணி நேரம் முன்" },
    { title: "கோவை விமான நிலையத்தில் புதிய சேவைகள்", summary: "சர்வதேச விமான சேவைகள் விரிவாக்கம் செய்யப்பட உள்ளன.", time: "6 மணி நேரம் முன்" },
  ],
  erode: [
    { title: "ஈரோட்டில் மஞ்சள் விலை உயர்வு", summary: "மஞ்சள் சந்தையில் விலை கணிசமாக உயர்ந்துள்ளது.", time: "1 மணி நேரம் முன்" },
    { title: "காவிரி ஆற்றில் நீர்மட்டம் அதிகரிப்பு", summary: "தொடர் மழையால் காவிரி ஆற்றில் நீர் வரத்து அதிகரித்துள்ளது.", time: "3 மணி நேரம் முன்" },
  ],
  tiruppur: [
    { title: "திருப்பூர் ஜவுளி ஏற்றுமதி அதிகரிப்பு", summary: "இந்த ஆண்டு ஜவுளி ஏற்றுமதி 20% அதிகரித்துள்ளது.", time: "2 மணி நேரம் முன்" },
    { title: "நூல் ஆலை தொழிலாளர்கள் போராட்டம்", summary: "ஊதிய உயர்வு கோரி தொழிலாளர்கள் அமைதியான போராட்டம்.", time: "5 மணி நேரம் முன்" },
  ],
  karur: [
    { title: "கரூரில் புதிய பேருந்து நிலையம்", summary: "நவீன வசதிகளுடன் புதிய பேருந்து நிலையம் அமைக்கப்படுகிறது.", time: "3 மணி நேரம் முன்" },
    { title: "கரூர் கைத்தறி நெசவாளர்களுக்கு உதவி", summary: "அரசு புதிய நிதி உதவி திட்டத்தை அறிவித்துள்ளது.", time: "6 மணி நேரம் முன்" },
  ],
  salem: [
    { title: "சேலம் எஃகு ஆலை விரிவாக்கம்", summary: "சேலம் எஃகு ஆலையில் புதிய உற்பத்தி பிரிவு தொடக்கம்.", time: "1 மணி நேரம் முன்" },
    { title: "யேற்காடு சுற்றுலா வளர்ச்சி", summary: "சுற்றுலாத்துறை புதிய திட்டங்களை அறிவித்துள்ளது.", time: "4 மணி நேரம் முன்" },
  ],
  namakkal: [
    { title: "நாமக்கல் முட்டை உற்பத்தி சாதனை", summary: "தினசரி முட்டை உற்பத்தியில் புதிய சாதனை படைக்கப்பட்டுள்ளது.", time: "2 மணி நேரம் முன்" },
    { title: "கோழி வளர்ப்பு தொழில்நுட்ப கருத்தரங்கு", summary: "நவீன கோழி வளர்ப்பு முறைகள் குறித்த கருத்தரங்கு நடைபெற்றது.", time: "5 மணி நேரம் முன்" },
  ],
  dindigul: [
    { title: "திண்டுக்கல் பூட்டு தொழிலுக்கு புதிய வாய்ப்பு", summary: "ஏற்றுமதி சந்தையில் திண்டுக்கல் பூட்டுகளுக்கு தேவை அதிகரிப்பு.", time: "3 மணி நேரம் முன்" },
    { title: "கொடைக்கானலில் பூக்கள் கண்காட்சி", summary: "ஆண்டு பூக்கள் கண்காட்சி மே மாதம் தொடங்குகிறது.", time: "7 மணி நேரம் முன்" },
  ],
};

const tickerNews = "🔴 கொங்கு நாட்டின் அனைத்து மாவட்ட செய்திகளும் ஒரே இடத்தில் | கோயம்புத்தூரில் புதிய தொழிற்பூங்கா திறப்பு | திருப்பூர் ஜவுளி ஏற்றுமதி 20% அதிகரிப்பு | நாமக்கல் முட்டை உற்பத்தி சாதனை | சேலம் எஃகு ஆலை விரிவாக்கம்";

const Index = () => {
  const [activeDistrict, setActiveDistrict] = useState("coimbatore");
  const activeData = newsData[activeDistrict] || [];
  const activeDistrictInfo = districts.find((d) => d.id === activeDistrict)!;

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
      <nav className="container mx-auto px-4 py-6">
        <h2 className="text-lg font-bold mb-3 text-muted-foreground">மாவட்டங்கள்</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {districts.map((d) => (
            <button
              key={d.id}
              onClick={() => setActiveDistrict(d.id)}
              className={`district-card text-center ${activeDistrict === d.id ? "ring-2 ring-primary shadow-md" : ""}`}
            >
              <div className={`w-3 h-3 rounded-full ${d.color} mx-auto mb-2`} />
              <span className="font-semibold text-sm text-card-foreground">{d.name}</span>
              <span className="block text-xs text-muted-foreground">{d.nameEn}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* News Section */}
      <main className="container mx-auto px-4 pb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDistrict}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-4 h-4 rounded-full ${activeDistrictInfo.color}`} />
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                {activeDistrictInfo.name} செய்திகள்
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {activeData.map((news, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="news-card"
                >
                  <div className={`h-1.5 ${activeDistrictInfo.color}`} />
                  <div className="p-5">
                    <h3 className="font-bold text-card-foreground mb-2 leading-relaxed">{news.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{news.summary}</p>
                    <span className="text-xs text-muted-foreground">🕐 {news.time}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
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

export default Index;
