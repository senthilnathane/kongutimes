import DistrictLayout, { type NewsItem } from "@/components/DistrictLayout";

// =============================================
// 📝 EDIT YOUR DINDIGUL NEWS BELOW
// =============================================

export const dindigulNews: NewsItem[] = [
  {
    id: "dindigul-1",
    title: "திண்டுக்கல் பூட்டு தொழிலுக்கு புதிய வாய்ப்பு",
    summary: "ஏற்றுமதி சந்தையில் திண்டுக்கல் பூட்டுகளுக்கு தேவை அதிகரிப்பு.",
    time: "3 மணி நேரம் முன்",
    content: `ஏற்றுமதி சந்தையில் திண்டுக்கல் பூட்டுகளுக்கு தேவை அதிகரித்துள்ளது. ஆப்பிரிக்க நாடுகளுக்கான ஏற்றுமதி இரட்டிப்பாகியுள்ளது.`,
  },
  {
    id: "dindigul-2",
    title: "கொடைக்கானலில் பூக்கள் கண்காட்சி",
    summary: "ஆண்டு பூக்கள் கண்காட்சி மே மாதம் தொடங்குகிறது.",
    time: "7 மணி நேரம் முன்",
    content: `கொடைக்கானலில் ஆண்டு பூக்கள் கண்காட்சி மே மாதம் 1ம் தேதி தொடங்குகிறது. இந்த ஆண்டு 200க்கும் மேற்பட்ட வகை பூக்கள் காட்சிக்கு வைக்கப்படும்.`,
  },
];

const DindigulPage = () => (
  <DistrictLayout districtId="dindigul" districtName="திண்டுக்கல்" districtNameEn="Dindigul" news={dindigulNews} />
);

export default DindigulPage;
