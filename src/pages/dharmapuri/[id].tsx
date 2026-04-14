import { useParams, Navigate } from "react-router-dom";
import NewsArticlePage from "@/components/NewsArticlePage";
import { dharmapuriNews } from "./index";

const DharmapuriArticle = () => {
  const { id } = useParams();
  const article = dharmapuriNews.find((n) => n.id === id);
  if (!article) return <Navigate to="/dharmapuri" replace />;
  return <NewsArticlePage districtId="dharmapuri" districtName="தர்மபுரி" districtNameEn="Dharmapuri" article={article} />;
};
export default DharmapuriArticle;
