import DistrictLayout, { type NewsItem } from "@/components/DistrictLayout";

// =============================================
// 📝 EDIT YOUR TIRUPPUR NEWS BELOW
// =============================================

export const tiruppurNews: NewsItem[] = [
  {
    id: "tiruppur-1",
    title: "திருப்பூர் ஜவுளி ஏற்றுமதி அதிகரிப்பு",
    summary: "இந்த ஆண்டு ஜவுளி ஏற்றுமதி 20% அதிகரித்துள்ளது.",
    time: "2 மணி நேரம் முன்",
    content: `திருப்பூரிலிருந்து ஜவுளி ஏற்றுமதி இந்த ஆண்டு 20% அதிகரித்துள்ளது. ஐரோப்பிய நாடுகளுக்கான ஏற்றுமதி குறிப்பிடத்தக்க அளவில் வளர்ந்துள்ளது.`,
  },
  {
    id: "tiruppur-2",
    title: "நூல் ஆலை தொழிலாளர்கள் போராட்டம்",
    summary: "ஊதிய உயர்வு கோரி தொழிலாளர்கள் அமைதியான போராட்டம்.",
    time: "5 மணி நேரம் முன்",
    content: `திருப்பூர் நூல் ஆலை தொழிலாளர்கள் ஊதிய உயர்வு கோரி அமைதியான போராட்டத்தில் ஈடுபட்டனர்.`,
  },
];

const TiruppurPage = () => (
  <DistrictLayout districtId="tiruppur" districtName="திருப்பூர்" districtNameEn="Tiruppur" news={tiruppurNews} />
);

export default TiruppurPage;
