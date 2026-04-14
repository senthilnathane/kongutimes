import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  time: string;
  category?: string;
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
    <div className="min-h-screen bg-background font-body">
      <SiteHeader />

      {/* Hero Banner */}
      <div className="gradient-hero py-8 md:py-12 border-b-[3px] border-accent-orange">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <p className="text-xs text-white/40 mb-2">
            <Link to="/" className="text-accent-orange hover:underline">Home</Link> › {districtNameEn}
          </p>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
            {districtNameEn} <span className="text-accent-orange">News</span>
          </h1>
          <p className="text-white/60 font-tamil-serif mt-2 text-lg">{districtName} செய்திகள்</p>
        </div>
      </div>

      {/* News Grid */}
      <main className="max-w-[1280px] mx-auto px-4 md:px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={`/${districtId}/${item.id}`} className="block">
                <article className="news-card group">
                  {item.image && (
                    <img src={item.image} alt={item.title} className="w-full h-44 object-cover" loading="lazy" />
                  )}
                  <div className="p-5">
                    {item.category && (
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-accent-orange mb-2">
                        {item.category}
                      </span>
                    )}
                    <h3 className="font-display font-bold text-card-foreground mb-2 leading-relaxed text-lg group-hover:text-accent-orange transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-2">{item.summary}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">🕐 {item.time}</span>
                      <span className="text-xs font-semibold text-accent-orange">{districtNameEn}</span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

<<<<<<< HEAD
      <SiteFooter />
=======
      {/* Footer */}
      <footer className="gradient-header py-6">
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
        </div>
      </footer>
>>>>>>> 5235170 (Initial commit: Kongu Times with animations and candidates page)
    </div>
  );
};

export default DistrictLayout;
