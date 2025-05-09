
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Background from "./components/Background";
import Index from "./pages/Index";
import Script from "./pages/Script";
import GetKey from "./pages/GetKey";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Purchase from "./pages/Purchase";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen bg-transparent text-foreground font-sans relative">
        <Background />
        <Router>
          <Toaster />
          <Sonner />
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/script" element={<Script />} />
            <Route path="/get-key" element={<GetKey />} />
            <Route path="/about" element={<About />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
