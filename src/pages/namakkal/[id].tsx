import { useParams, Navigate } from "react-router-dom";
import NewsArticlePage from "@/components/NewsArticlePage";
import { namakkalNews } from "./index";

const NamakkalArticle = () => {
  const { id } = useParams();
  const article = namakkalNews.find((n) => n.id === id);
  if (!article) return <Navigate to="/namakkal" replace />;
  return <NewsArticlePage districtId="namakkal" districtName="நாமக்கல்" article={article} />;
};

export default NamakkalArticle;
