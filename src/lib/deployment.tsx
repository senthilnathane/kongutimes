export const GITHUB_PAGES_URL = "https://yourusername.github.io/kongutimes";

export const LIVE_LINKS = {
  home: `${GITHUB_PAGES_URL}/`,
  candidates: `${GITHUB_PAGES_URL}/candidates`,
  coimbatore: `${GITHUB_PAGES_URL}/coimbatore`,
  erode: `${GITHUB_PAGES_URL}/erode`,
  tiruppur: `${GITHUB_PAGES_URL}/tiruppur`,
  karur: `${GITHUB_PAGES_URL}/karur`,
  salem: `${GITHUB_PAGES_URL}/salem`,
  namakkal: `${GITHUB_PAGES_URL}/namakkal`,
  dindigul: `${GITHUB_PAGES_URL}/dindigul`,
};

export const DeploymentInfo = () => (
  <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 my-4">
    <p className="text-sm font-semibold text-blue-900 dark:text-blue-200 mb-2">
      🌐 Live on GitHub Pages
    </p>
    <p className="text-xs text-blue-700 dark:text-blue-300">
      Visit: <span className="font-mono">{GITHUB_PAGES_URL}</span>
    </p>
  </div>
);
