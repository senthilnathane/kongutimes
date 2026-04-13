import DistrictLayout, { type NewsItem } from "@/components/DistrictLayout";

// =============================================
// 📝 EDIT YOUR ERODE NEWS BELOW
// =============================================

export const erodeNews: NewsItem[] = [
  {
    id: "erode-1",
    title: "ஈரோட்டில் மஞ்சள் விலை உயர்வு",
    summary: "மஞ்சள் சந்தையில் விலை கணிசமாக உயர்ந்துள்ளது.",
    time: "1 மணி நேரம் முன்",
    content: `ஈரோடு மஞ்சள் சந்தையில் விலை கணிசமாக உயர்ந்துள்ளது. ஒரு குவிண்டால் மஞ்சள் ₹15,000 என விற்பனை ஆகிறது.

கடந்த ஆண்டை விட 30% விலை அதிகரித்துள்ளதால் விவசாயிகள் மகிழ்ச்சி அடைந்துள்ளனர்.`,
  },
  {
    id: "erode-2",
    title: "காவிரி ஆற்றில் நீர்மட்டம் அதிகரிப்பு",
    summary: "தொடர் மழையால் காவிரி ஆற்றில் நீர் வரத்து அதிகரித்துள்ளது.",
    time: "3 மணி நேரம் முன்",
    content: `தொடர் மழையால் காவிரி ஆற்றில் நீர் வரத்து அதிகரித்துள்ளது. விவசாயிகளுக்கு இது நல்ல செய்தியாக அமைந்துள்ளது.`,
  },
];

const ErodePage = () => (
  <DistrictLayout districtId="erode" districtName="ஈரோடு" districtNameEn="Erode" news={erodeNews} />
);

export default ErodePage;
