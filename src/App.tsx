import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
<<<<<<< HEAD
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Candidates2026 from "./pages/candidates-2026/index";
import CoimbatorePage from "./pages/coimbatore/index";
import CoimbatoreArticle from "./pages/coimbatore/[id]";
import ErodePage from "./pages/erode/index";
import ErodeArticle from "./pages/erode/[id]";
import TiruppurPage from "./pages/tiruppur/index";
import TiruppurArticle from "./pages/tiruppur/[id]";
import KarurPage from "./pages/karur/index";
import KarurArticle from "./pages/karur/[id]";
import SalemPage from "./pages/salem/index";
import SalemArticle from "./pages/salem/[id]";
import NamakkalPage from "./pages/namakkal/index";
import NamakkalArticle from "./pages/namakkal/[id]";
import DindigulPage from "./pages/dindigul/index";
import DindigulArticle from "./pages/dindigul/[id]";
import DharmapuriPage from "./pages/dharmapuri/index";
import DharmapuriArticle from "./pages/dharmapuri/[id]";
=======
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Candidates from "./pages/Candidates.tsx";
import CoimbatorePage from "./pages/coimbatore/index.tsx";
import CoimbatoreArticle from "./pages/coimbatore/[id].tsx";
import ErodePage from "./pages/erode/index.tsx";
import ErodeArticle from "./pages/erode/[id].tsx";
import TiruppurPage from "./pages/tiruppur/index.tsx";
import TiruppurArticle from "./pages/tiruppur/[id].tsx";
import KarurPage from "./pages/karur/index.tsx";
import KarurArticle from "./pages/karur/[id].tsx";
import SalemPage from "./pages/salem/index.tsx";
import SalemArticle from "./pages/salem/[id].tsx";
import NamakkalPage from "./pages/namakkal/index.tsx";
import NamakkalArticle from "./pages/namakkal/[id].tsx";
import DindigulPage from "./pages/dindigul/index.tsx";
import DindigulArticle from "./pages/dindigul/[id].tsx";
>>>>>>> 5235170 (Initial commit: Kongu Times with animations and candidates page)

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
<<<<<<< HEAD
          <Route path="/candidates-2026" element={<Candidates2026 />} />
=======
          <Route path="/candidates" element={<Candidates />} />
>>>>>>> 5235170 (Initial commit: Kongu Times with animations and candidates page)
          <Route path="/coimbatore" element={<CoimbatorePage />} />
          <Route path="/coimbatore/:id" element={<CoimbatoreArticle />} />
          <Route path="/erode" element={<ErodePage />} />
          <Route path="/erode/:id" element={<ErodeArticle />} />
          <Route path="/tiruppur" element={<TiruppurPage />} />
          <Route path="/tiruppur/:id" element={<TiruppurArticle />} />
          <Route path="/karur" element={<KarurPage />} />
          <Route path="/karur/:id" element={<KarurArticle />} />
          <Route path="/salem" element={<SalemPage />} />
          <Route path="/salem/:id" element={<SalemArticle />} />
          <Route path="/namakkal" element={<NamakkalPage />} />
          <Route path="/namakkal/:id" element={<NamakkalArticle />} />
          <Route path="/dindigul" element={<DindigulPage />} />
          <Route path="/dindigul/:id" element={<DindigulArticle />} />
          <Route path="/dharmapuri" element={<DharmapuriPage />} />
          <Route path="/dharmapuri/:id" element={<DharmapuriArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
