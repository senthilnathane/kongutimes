import DistrictLayout, { type NewsItem } from "@/components/DistrictLayout";

// =============================================
// 📝 EDIT YOUR KARUR NEWS BELOW
// =============================================

export const karurNews: NewsItem[] = [
  {
    id: "karur-1",
    title: "கரூரில் புதிய பேருந்து நிலையம்",
    summary: "நவீன வசதிகளுடன் புதிய பேருந்து நிலையம் அமைக்கப்படுகிறது.",
    time: "3 மணி நேரம் முன்",
    content: `கரூரில் நவீன வசதிகளுடன் புதிய பேருந்து நிலையம் அமைக்கப்படுகிறது. இது ₹50 கோடி செலவில் கட்டப்படுகிறது.`,
  },
  {
    id: "karur-2",
    title: "கரூர் கைத்தறி நெசவாளர்களுக்கு உதவி",
    summary: "அரசு புதிய நிதி உதவி திட்டத்தை அறிவித்துள்ளது.",
    time: "6 மணி நேரம் முன்",
    content: `கரூர் கைத்தறி நெசவாளர்களுக்கு அரசு புதிய நிதி உதவி திட்டத்தை அறிவித்துள்ளது. ஒவ்வொரு நெசவாளருக்கும் ₹25,000 நிதி உதவி வழங்கப்படும்.`,
  },
];

const KarurPage = () => (
  <DistrictLayout districtId="karur" districtName="கரூர்" districtNameEn="Karur" news={karurNews} />
);

export default KarurPage;
