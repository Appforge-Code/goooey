import "./global.css";
import { useEffect, useState } from "react";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Product from "./pages/Product";
import Audition from "./pages/Audition";
import Contact from "./pages/Contact";
import JoinTeam from "./pages/JoinTeam";
import Wholesale from "./pages/Wholesale";
import CorporateCatering from "./pages/CorporateCatering";
import Fundraising from "./pages/Fundraising";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";
import Loading from "./components/Loading";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem("hasLoaded");

    if (hasLoadedBefore) {
      setIsLoading(false);
      setShowContent(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem("hasLoaded", "true");
    setShowContent(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {isLoading && <Loading onComplete={handleLoadingComplete} />}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* <Route path="/packs" element={<Placeholder title="Packs" />} /> */}
            <Route path="/packs" element={<Product />} />
            {/* <Route
              path="/audition"
              element={<Placeholder title="Audition" />}
            /> */}
            <Route path="/audition" element={<Audition />} />
            <Route
              path="/contact"
              // element={<Placeholder title="Contact Us" />}
              element={<Contact />}
            />
            <Route path="/login" element={<Placeholder title="Login" />} />
            {/* <Route path="/about" element={<Placeholder title="About Us" />} /> */}
            <Route path="/about" element={<About />} />
            {/* <Route
              path="/team"
              element={<Placeholder title="Join the Team" />}
            /> */}
            <Route path="/team" element={<JoinTeam />} />
            {/* <Route
              path="/wholesale"
              element={<Placeholder title="Wholesale" />}
            /> */}
            <Route path="/wholesale" element={<Wholesale />} />
            <Route
              path="/franchise"
              element={<Placeholder title="Franchise" />}
            />
            {/* <Route
              path="/catering"
              element={<Placeholder title="Corporate Catering" />}
            /> */}
            <Route path="/catering" element={<CorporateCatering />} />
            {/* <Route
              path="/fundraising"
              element={<Placeholder title="Fundraising" />}
            /> */}
            <Route path="/fundraising" element={<Fundraising />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
