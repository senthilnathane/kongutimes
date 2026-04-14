import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import type { NewsItem } from "./DistrictLayout";

interface NewsArticlePageProps {
  districtId: string;
  districtName: string;
  districtNameEn: string;
  article: NewsItem;
}

const NewsArticlePage = ({ districtId, districtName, districtNameEn, article }: NewsArticlePageProps) => {
  return (
    <div className="min-h-screen bg-background font-body">
      <SiteHeader />

      <main className="max-w-[800px] mx-auto px-4 md:px-6 py-8">
        <Link
          to={`/${districtId}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          ← {districtName} செய்திகள்
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-xl border overflow-hidden shadow-sm"
          style={{ borderColor: "hsl(var(--border))" }}
        >
          {article.image && (
            <img src={article.image} alt={article.title} className="w-full h-64 object-cover" />
          )}
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              {article.category && (
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent-orange">{article.category}</span>
              )}
              <span className="text-xs text-muted-foreground">🕐 {article.time}</span>
              <span className="text-xs font-semibold text-accent-orange">{districtNameEn}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-card-foreground mb-4 leading-relaxed">
              {article.title}
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{article.summary}</p>
            {article.content && (
              <div className="text-foreground leading-loose whitespace-pre-line">
                {article.content}
              </div>
            )}
          </div>
        </motion.article>
      </main>

      <SiteFooter />
    </div>
  );
};

export default NewsArticlePage;
