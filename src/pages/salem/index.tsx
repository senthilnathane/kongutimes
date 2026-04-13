import DistrictLayout, { type NewsItem } from "@/components/DistrictLayout";

// =============================================
// 📝 EDIT YOUR SALEM NEWS BELOW
// =============================================

export const salemNews: NewsItem[] = [
  {
    id: "salem-1",
    title: "சேலம் எஃகு ஆலை விரிவாக்கம்",
    summary: "சேலம் எஃகு ஆலையில் புதிய உற்பத்தி பிரிவு தொடக்கம்.",
    time: "1 மணி நேரம் முன்",
    content: `சேலம் எஃகு ஆலையில் புதிய உற்பத்தி பிரிவு தொடங்கப்பட்டுள்ளது. இதன் மூலம் உற்பத்தி திறன் 50% அதிகரிக்கும்.`,
  },
  {
    id: "salem-2",
    title: "யேற்காடு சுற்றுலா வளர்ச்சி",
    summary: "சுற்றுலாத்துறை புதிய திட்டங்களை அறிவித்துள்ளது.",
    time: "4 மணி நேரம் முன்",
    content: `யேற்காடு சுற்றுலா மேம்பாட்டிற்காக ₹100 கோடி திட்டம் அறிவிக்கப்பட்டுள்ளது. புதிய ரோப்வே, பூங்கா ஆகியவை அமைக்கப்படும்.`,
  },
];

const SalemPage = () => (
  <DistrictLayout districtId="salem" districtName="சேலம்" districtNameEn="Salem" news={salemNews} />
);

export default SalemPage;
