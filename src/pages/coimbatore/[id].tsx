import { useParams, Navigate } from "react-router-dom";
import NewsArticlePage from "@/components/NewsArticlePage";
import { coimbatoreNews } from "./index";

const CoimbatoreArticle = () => {
  const { id } = useParams();
  const article = coimbatoreNews.find((n) => n.id === id);
  if (!article) return <Navigate to="/coimbatore" replace />;
  return <NewsArticlePage districtId="coimbatore" districtName="கோயம்புத்தூர்" article={article} />;
};

export default CoimbatoreArticle;
