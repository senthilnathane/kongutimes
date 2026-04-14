import { useParams, Navigate } from "react-router-dom";
import NewsArticlePage from "@/components/NewsArticlePage";
import { tiruppurNews } from "./index";

const TiruppurArticle = () => {
  const { id } = useParams();
  const article = tiruppurNews.find((n) => n.id === id);
  if (!article) return <Navigate to="/tiruppur" replace />;
  return <NewsArticlePage districtId="tiruppur" districtName="திருப்பூர்" districtNameEn="Tiruppur" article={article} />;
};

export default TiruppurArticle;
