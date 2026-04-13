import DistrictLayout, { type NewsItem } from "@/components/DistrictLayout";

// =============================================
// 📝 EDIT YOUR NAMAKKAL NEWS BELOW
// =============================================

export const namakkalNews: NewsItem[] = [
  {
    id: "namakkal-1",
    title: "நாமக்கல் முட்டை உற்பத்தி சாதனை",
    summary: "தினசரி முட்டை உற்பத்தியில் புதிய சாதனை படைக்கப்பட்டுள்ளது.",
    time: "2 மணி நேரம் முன்",
    content: `நாமக்கல் மாவட்டத்தில் தினசரி முட்டை உற்பத்தியில் புதிய சாதனை படைக்கப்பட்டுள்ளது. தினசரி 4 கோடி முட்டைகள் உற்பத்தி செய்யப்படுகின்றன.`,
  },
  {
    id: "namakkal-2",
    title: "கோழி வளர்ப்பு தொழில்நுட்ப கருத்தரங்கு",
    summary: "நவீன கோழி வளர்ப்பு முறைகள் குறித்த கருத்தரங்கு நடைபெற்றது.",
    time: "5 மணி நேரம் முன்",
    content: `நாமக்கல்லில் நவீன கோழி வளர்ப்பு முறைகள் குறித்த கருத்தரங்கு நடைபெற்றது. 500க்கும் மேற்பட்ட விவசாயிகள் பங்கேற்றனர்.`,
  },
];

const NamakkalPage = () => (
  <DistrictLayout districtId="namakkal" districtName="நாமக்கல்" districtNameEn="Namakkal" news={namakkalNews} />
);

export default NamakkalPage;
