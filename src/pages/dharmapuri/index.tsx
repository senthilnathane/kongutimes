import DistrictLayout, { type NewsItem } from "@/components/DistrictLayout";

// =============================================
// 📝 EDIT YOUR DHARMAPURI NEWS BELOW
// =============================================
export const dharmapuriNews: NewsItem[] = [
  {
    id: "dharmapuri-1",
    title: "தர்மபுரியில் மாம்பழ ஏற்றுமதி மையம்",
    summary: "தர்மபுரி மாவட்டத்தில் புதிய மாம்பழ ஏற்றுமதி மையம் திறப்பு.",
    time: "2 மணி நேரம் முன்",
    category: "Agriculture",
    content: `தர்மபுரி மாவட்டத்தில் புதிய மாம்பழ ஏற்றுமதி மையம் திறக்கப்பட்டுள்ளது. மாம்பழ பருவத்தில் ஏற்றுமதி எளிதாகும்.`,
  },
  {
    id: "dharmapuri-2",
    title: "தர்மபுரி தேசிய நெடுஞ்சாலை மேம்பாடு",
    summary: "தர்மபுரி-கிருஷ்ணகிரி தேசிய நெடுஞ்சாலை 4 வழியாக மாற்றப்படுகிறது.",
    time: "5 மணி நேரம் முன்",
    category: "Infrastructure",
    content: `தர்மபுரி-கிருஷ்ணகிரி தேசிய நெடுஞ்சாலை 4 வழியாக மாற்றும் பணி வேகமாக நடைபெறுகிறது.`,
  },
  {
    id: "dharmapuri-3",
    title: "தர்மபுரியில் புதிய கல்லூரி திறப்பு",
    summary: "அரசு பொறியியல் கல்லூரி தர்மபுரியில் திறக்கப்பட்டுள்ளது.",
    time: "7 மணி நேரம் முன்",
    category: "Education",
    content: `தர்மபுரி மாவட்டத்தில் புதிய அரசு பொறியியல் கல்லூரி திறக்கப்பட்டுள்ளது. 500 மாணவர்கள் சேர்க்கை நடைபெறும்.`,
  },
];

const DharmapuriPage = () => (
  <DistrictLayout districtId="dharmapuri" districtName="தர்மபுரி" districtNameEn="Dharmapuri" news={dharmapuriNews} />
);
export default DharmapuriPage;
