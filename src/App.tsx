import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Instructions from "./pages/Instructions";
import ExamLive from "./pages/ExamLive";
import Notes from "./pages/Notes";
import Syllabus from "./pages/Syllabus";
import SetTheoryAlgebra from "./pages/notes/SetTheoryAlgebra";
import TheoryOfComputations from "./pages/notes/TheoryOfComputations";
import DigitalLogic from "./pages/notes/DigitalLogic";
import ComputerOrganization from "./pages/notes/ComputerOrganization";
import Microprocessors from "./pages/notes/Microprocessors";
import ProgrammingDataStructures from "./pages/notes/ProgrammingDataStructures";
import Algorithm from "./pages/notes/Algorithm";
import OperatingSystem from "./pages/notes/OperatingSystem";
import ComputerNetworks from "./pages/notes/ComputerNetworks";
import ArtificialIntelligence from "./pages/notes/ArtificialIntelligence";
import CryptographyNetworkSecurity from "./pages/notes/CryptographyNetworkSecurity";
import DataScience from "./pages/notes/DataScience";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/exam" element={<Index />} />
          <Route path="/exam/:paperId/instructions" element={<Instructions />} />
          <Route path="/exam/:paperId/start" element={<ExamLive />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/notes/set-theory" element={<SetTheoryAlgebra />} />
          <Route path="/notes/theory-of-computations" element={<TheoryOfComputations />} />
          <Route path="/notes/digital-logic" element={<DigitalLogic />} />
          <Route path="/notes/computer-organization" element={<ComputerOrganization />} />
          <Route path="/notes/microprocessors" element={<Microprocessors />} />
          <Route path="/notes/programming-data-structures" element={<ProgrammingDataStructures />} />
          <Route path="/notes/algorithm" element={<Algorithm />} />
          <Route path="/notes/operating-system" element={<OperatingSystem />} />
          <Route path="/notes/computer-networks" element={<ComputerNetworks />} />
          <Route path="/notes/artificial-intelligence" element={<ArtificialIntelligence />} />
          <Route path="/notes/cryptography" element={<CryptographyNetworkSecurity />} />
          <Route path="/notes/data-science" element={<DataScience />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
