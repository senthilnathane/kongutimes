import { useParams, Navigate } from "react-router-dom";
import NewsArticlePage from "@/components/NewsArticlePage";
import { salemNews } from "./index";

const SalemArticle = () => {
  const { id } = useParams();
  const article = salemNews.find((n) => n.id === id);
  if (!article) return <Navigate to="/salem" replace />;
  return <NewsArticlePage districtId="salem" districtName="சேலம்" article={article} />;
};

export default SalemArticle;
