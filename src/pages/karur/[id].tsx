import { useParams, Navigate } from "react-router-dom";
import NewsArticlePage from "@/components/NewsArticlePage";
import { karurNews } from "./index";

const KarurArticle = () => {
  const { id } = useParams();
  const article = karurNews.find((n) => n.id === id);
  if (!article) return <Navigate to="/karur" replace />;
  return <NewsArticlePage districtId="karur" districtName="கரூர்" article={article} />;
};

export default KarurArticle;
