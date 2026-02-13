import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Syllabus from "./pages/Syllabus";
import SetTheoryAlgebra from "./pages/notes/SetTheoryAlgebra";
import TheoryOfComputations from "./pages/notes/TheoryOfComputations";
import DigitalLogic from "./pages/notes/DigitalLogic";
import ComputerOrganization from "./pages/notes/ComputerOrganization";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exam" element={<Index />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/notes/set-theory" element={<SetTheoryAlgebra />} />
          <Route path="/notes/theory-of-computations" element={<TheoryOfComputations />} />
          <Route path="/notes/digital-logic" element={<DigitalLogic />} />
          <Route path="/notes/computer-organization" element={<ComputerOrganization />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
