import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
