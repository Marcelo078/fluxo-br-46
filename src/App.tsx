import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FabricaComissoes from "./pages/FabricaComissoes";
import FormulaNegocioOnline from "./pages/FormulaNegocioOnline";
import ShortsVirais from "./pages/ShortsVirais";
import LovableIA from "./pages/LovableIA";
import TodosProdutos from "./pages/TodosProdutos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fabrica-comissoes" element={<FabricaComissoes />} />
          <Route path="/formula-negocio-online" element={<FormulaNegocioOnline />} />
          <Route path="/shorts-virais" element={<ShortsVirais />} />
          <Route path="/lovable-ia" element={<LovableIA />} />
          <Route path="/todos-produtos" element={<TodosProdutos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
