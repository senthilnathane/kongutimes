import { motion } from "framer-motion";

interface Candidate {
  id: string;
  acNumber: string;
  constituency: string;
  dmk: string;
  aiadmk: string;
  tvk: string;
  ntk: string;
}

const candidatesData: Candidate[] = [
  {
    id: "1",
    acNumber: "001",
    constituency: "கோவை தெற்கு",
    dmk: "இராம்சாமி",
    aiadmk: "சுந்தர்மதி",
    tvk: "வடிவேலு",
    ntk: "மணிகாந்தன்",
  },
  {
    id: "2",
    acNumber: "002",
    constituency: "கோவை உत்தரம்",
    dmk: "பரமேசுவரன்",
    aiadmk: "ஆதிரயா",
    tvk: "நாராயணசாமி",
    ntk: "சுரேஷ்",
  },
  {
    id: "3",
    acNumber: "003",
    constituency: "ஈரோடு",
    dmk: "ப்ரசாதன்",
    aiadmk: "பக்தவத்சலம்",
    tvk: "பிரபு",
    ntk: "செல்வன்",
  },
  {
    id: "4",
    acNumber: "004",
    constituency: "திருப்பூர்",
    dmk: "கபிலன்",
    aiadmk: "வசந்தன்",
    tvk: "மோகன்",
    ntk: "அருண்",
  },
  {
    id: "5",
    acNumber: "005",
    constituency: "கரூர்",
    dmk: "வசுதேவன்",
    aiadmk: "சிவ குணகர",
    tvk: "மகேந்திரன்",
    ntk: "நரசிம்மன்",
  },
  {
    id: "6",
    acNumber: "006",
    constituency: "சேலம்",
    dmk: "ஜயபாரதன்",
    aiadmk: "விஜயராக்ஷி",
    tvk: "ராமகிருஷ்ணன்",
    ntk: "விக்ரம்",
  },
  {
    id: "7",
    acNumber: "007",
    constituency: "நாமக்கல்",
    dmk: "சேன்",
    aiadmk: "கார்த்திக",
    tvk: "பூபதி",
    ntk: "ஹரிஹரன்",
  },
  {
    id: "8",
    acNumber: "008",
    constituency: "திண்டுக்கல்",
    dmk: "ரமேசன்",
    aiadmk: "பிரমிலா",
    tvk: "சுரேந்திரன்",
    ntk: "கிரண்",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Candidates = () => {
  return (
    <div className="min-h-screen bg-background font-tamil">
      {/* Header */}
      <header className="gradient-header">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">
              2026 தேர்தல் வேட்பாளர்கள்
            </h1>
            <p className="text-sm text-primary-foreground/80">
              கொங்கு மாவட்ட வேட்பாளர் தகவல்
            </p>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <motion.section
        className="container mx-auto px-4 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          <motion.div
            variants={itemVariants}
            className="news-card"
          >
            <div className="h-1.5 bg-primary rounded-t-md" />
            <div className="p-5 text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">8</h3>
              <p className="text-sm text-muted-foreground">
                தொகுதிகள்
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="news-card bg-red-50 dark:bg-red-950/20"
          >
            <div className="h-1.5 bg-red-600 rounded-t-md" />
            <div className="p-5 text-center">
              <h3 className="text-3xl font-bold text-red-600 mb-2">32</h3>
              <p className="text-sm text-muted-foreground">
                மொத்த வேட்பாளர்கள்
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="news-card bg-green-50 dark:bg-green-950/20"
          >
            <div className="h-1.5 bg-green-600 rounded-t-md" />
            <div className="p-5 text-center">
              <h3 className="text-3xl font-bold text-green-600 mb-2">4</h3>
              <p className="text-sm text-muted-foreground">
                முக்கிய கட்சிகள்
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="news-card bg-blue-50 dark:bg-blue-950/20"
          >
            <div className="h-1.5 bg-blue-600 rounded-t-md" />
            <div className="p-5 text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">4</h3>
              <p className="text-sm text-muted-foreground">
                வேட்பாளர்கள்/தொகுதி
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Party Legend */}
      <motion.section
        className="container mx-auto px-4 py-6 border-b border-border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-r from-red-900 to-red-700" />
            <span className="text-sm font-semibold">DMK</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-r from-green-900 to-green-700" />
            <span className="text-sm font-semibold">AIADMK</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-r from-yellow-700 to-yellow-500" />
            <span className="text-sm font-semibold">TVK</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-r from-red-800 to-red-600" />
            <span className="text-sm font-semibold">NTK</span>
          </div>
        </div>
      </motion.section>

      {/* Candidates Table */}
      <section className="container mx-auto px-4 py-10 pb-20">
        <motion.div
          className="overflow-x-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-foreground text-background">
                <th className="px-4 py-3 text-left text-xs font-bold tracking-wider">
                  தொகுதி எண்
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold tracking-wider">
                  தொகுதி
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold tracking-wider">
                  <span className="inline-block px-2 py-1 rounded bg-red-700 text-white">
                    DMK
                  </span>
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold tracking-wider">
                  <span className="inline-block px-2 py-1 rounded bg-green-700 text-white">
                    AIADMK
                  </span>
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold tracking-wider">
                  <span className="inline-block px-2 py-1 rounded bg-yellow-600 text-white">
                    TVK
                  </span>
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold tracking-wider">
                  <span className="inline-block px-2 py-1 rounded bg-red-800 text-white">
                    NTK
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {candidatesData.map((candidate, index) => (
                <motion.tr
                  key={candidate.id}
                  variants={itemVariants}
                  className="border-b border-border hover:bg-muted/50 transition-colors"
                >
                  <td className="px-4 py-3 text-sm font-semibold text-muted-foreground">
                    {candidate.acNumber}
                  </td>
                  <td className="px-4 py-3 text-sm font-bold">
                    {candidate.constituency}
                  </td>
                  <td className="px-4 py-3">
                    <motion.span
                      className="inline-block px-3 py-1 rounded bg-red-900/20 text-red-700 dark:text-red-400 text-xs font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      {candidate.dmk}
                    </motion.span>
                  </td>
                  <td className="px-4 py-3">
                    <motion.span
                      className="inline-block px-3 py-1 rounded bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      {candidate.aiadmk}
                    </motion.span>
                  </td>
                  <td className="px-4 py-3">
                    <motion.span
                      className="inline-block px-3 py-1 rounded bg-yellow-600/20 text-yellow-700 dark:text-yellow-400 text-xs font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      {candidate.tvk}
                    </motion.span>
                  </td>
                  <td className="px-4 py-3">
                    <motion.span
                      className="inline-block px-3 py-1 rounded bg-red-800/20 text-red-800 dark:text-red-400 text-xs font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      {candidate.ntk}
                    </motion.span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="gradient-header py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <p className="font-semibold">© 2026 The Kongu Times</p>
          <p className="text-sm opacity-80 mt-1">தேர்தல் தகவல்</p>
          <div className="mt-4 pt-4 border-t border-primary-foreground/20">
            <p className="text-xs opacity-70">
              🌐 Live on GitHub Pages
            </p>
            <p className="text-xs opacity-60 font-mono mt-1">
              https://yourusername.github.io/kongutimes
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Candidates;
