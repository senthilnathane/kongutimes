import { useParams, Navigate } from "react-router-dom";
import NewsArticlePage from "@/components/NewsArticlePage";
import { erodeNews } from "./index";

const ErodeArticle = () => {
  const { id } = useParams();
  const article = erodeNews.find((n) => n.id === id);
  if (!article) return <Navigate to="/erode" replace />;
  return <NewsArticlePage districtId="erode" districtName="ஈரோடு" districtNameEn="Erode" article={article} />;
};
export default ErodeArticle;
