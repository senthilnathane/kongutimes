# The Kongu Times - 2026 News Website

A modern, animated news website featuring Tamil Nadu and Kongu districts news with interactive candidates 2026 section.

## 🚀 Features

- **100+ Tamil Nadu News Entries** - Latest news with smooth animations
- **District News Pages** - Dedicated pages for all 7 Kongu districts
- **Animated UI** - Framer Motion animations throughout
- **2026 Candidates Page** - Interactive candidates table with party information
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Fast & Optimized** - Built with Vite for instant page loads
- **Dark Mode Support** - Easy on the eyes

## 📍 Kongu Districts Covered

1. **கோயம்புத்தூர்** (Coimbatore)
2. **ஈரோடு** (Erode)
3. **திருப்பூர்** (Tiruppur)
4. **கரூர்** (Karur)
5. **சேலம்** (Salem)
6. **நாமக்கல்** (Namakkal)
7. **திண்டுக்கல்** (Dindigul)

## 🌐 Live Deployment on GitHub Pages

### Quick Start (GitHub Pages Deployment)

1. **Create New GitHub Repository**
   - Go to [github.com](https://github.com) and create a new public repository named `kongutimes`

2. **Initialize and Push Code**
   ```bash
   cd c:\Users\PC\kongutimes\kongutimes
   git init
   git add .
   git commit -m "Initial commit: The Kongu Times news website"
   git remote add origin https://github.com/YOUR_USERNAME/kongutimes.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose branch: `main`, folder: `/ (root)`
   - GitHub Actions will automatically build and deploy

4. **Wait for Deployment**
   - Go to Actions tab and wait for the workflow to complete
   - Your site will be live at: `https://YOUR_USERNAME.github.io/kongutimes`

### Update the URL in the App

Once deployed, update `yourusername` with your actual GitHub username:

1. **In `src/lib/deployment.tsx`:**
   ```typescript
   export const GITHUB_PAGES_URL = "https://YOUR_USERNAME.github.io/kongutimes";
   ```

2. **In all footer sections, update:**
   ```
   https://yourusername.github.io/kongutimes
   →
   https://YOUR_USERNAME.github.io/kongutimes
   ```

3. **Rebuild and push:**
   ```bash
   npm run build
   git add .
   git commit -m "Update GitHub Pages URL"
   git push
   ```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Visit: http://localhost:5173/

# Build for production
npm run build

# Preview production build
npm run preview
# Visit: http://localhost:4175/
```

## 📱 Live Links (After Deployment)

Replace `YOUR_USERNAME` with your actual GitHub username:

- **Home:** `https://YOUR_USERNAME.github.io/kongutimes/`
- **Candidates 2026:** `https://YOUR_USERNAME.github.io/kongutimes/candidates`
- **Coimbatore:** `https://YOUR_USERNAME.github.io/kongutimes/coimbatore`
- **Erode:** `https://YOUR_USERNAME.github.io/kongutimes/erode`
- **Tiruppur:** `https://YOUR_USERNAME.github.io/kongutimes/tiruppur`
- **Karur:** `https://YOUR_USERNAME.github.io/kongutimes/karur`
- **Salem:** `https://YOUR_USERNAME.github.io/kongutimes/salem`
- **Namakkal:** `https://YOUR_USERNAME.github.io/kongutimes/namakkal`
- **Dindigul:** `https://YOUR_USERNAME.github.io/kongutimes/dindigul`

## 🛠️ Technology Stack

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Animations:** Framer Motion
- **Build:** Vite
- **Routing:** React Router DOM
- **State Management:** TanStack React Query
- **Deployment:** GitHub Pages with GitHub Actions

## 📝 Project Structure

```
src/
├── pages/
│   ├── Index.tsx (Home page)
│   ├── Candidates.tsx (2026 Candidates)
│   ├── coimbatore/
│   ├── erode/
│   ├── tiruppur/
│   ├── karur/
│   ├── salem/
│   ├── namakkal/
│   └── dindigul/
├── components/
│   ├── DistrictLayout.tsx
│   ├── NavLink.tsx
│   └── ui/ (shadcn components)
├── lib/
│   ├── utils.ts
│   └── deployment.tsx
└── App.tsx
```

## 🔄 Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
1. Builds the project on every push to `main`
2. Deploys to GitHub Pages
3. Makes your site live automatically

## 📞 Support

For issues or questions, check:
- [GitHub Discussions](https://github.com)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ for the Kongu region | April 2026**
