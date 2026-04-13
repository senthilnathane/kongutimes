import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/kongu-times-logo.png";
import type { NewsItem } from "./DistrictLayout";

interface NewsArticlePageProps {
  districtId: string;
  districtName: string;
  article: NewsItem;
}

const NewsArticlePage = ({ districtId, districtName, article }: NewsArticlePageProps) => {
  return (
    <div className="min-h-screen bg-background font-tamil">
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

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <Link
          to={`/${districtId}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          ← {districtName} செய்திகள்
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-xl border border-border overflow-hidden"
        >
          <div className={`h-2 bg-district-${districtId}`} />
          {article.image && (
            <img src={article.image} alt={article.title} className="w-full h-64 object-cover" />
          )}
          <div className="p-6 md:p-8">
            <span className="text-xs text-muted-foreground">🕐 {article.time}</span>
            <h1 className="text-2xl md:text-3xl font-bold text-card-foreground mt-2 mb-4 leading-relaxed">
              {article.title}
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-6">{article.summary}</p>
            {article.content && (
              <div className="text-foreground leading-loose whitespace-pre-line">
                {article.content}
              </div>
            )}
          </div>
        </motion.article>
      </main>

      <footer className="gradient-header py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <p className="font-semibold">© 2026 The Kongu Times</p>
          <p className="text-sm opacity-80 mt-1">கொங்கு நாட்டின் குரல்</p>
        </div>
      </footer>
    </div>
  );
};

export default NewsArticlePage;
