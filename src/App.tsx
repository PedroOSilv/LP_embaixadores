import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Implantes from "./pages/Implantes";
import Alinhadores from "./pages/Alinhadores";
import Facetas from "./pages/Facetas";
import WellenNovato from "./pages/WellenNovato";
import OpenWeek from "./pages/OpenWeek";
import Obrigado from "./pages/Obrigado";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/implantes" element={<Implantes />} />
          <Route path="/alinhadores" element={<Alinhadores />} />
          <Route path="/facetas" element={<Facetas />} />
          <Route path="/wellen-novato" element={<WellenNovato />} />
          <Route path="/open-week" element={<OpenWeek />} />
          <Route path="/obrigado" element={<Obrigado />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
