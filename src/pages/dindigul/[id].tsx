import { useParams, Navigate } from "react-router-dom";
import NewsArticlePage from "@/components/NewsArticlePage";
import { dindigulNews } from "./index";

const DindigulArticle = () => {
  const { id } = useParams();
  const article = dindigulNews.find((n) => n.id === id);
  if (!article) return <Navigate to="/dindigul" replace />;
  return <NewsArticlePage districtId="dindigul" districtName="திண்டுக்கல்" article={article} />;
};

export default DindigulArticle;
