import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
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

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/exam" element={<ProtectedRoute><Index /></ProtectedRoute>} />
          <Route path="/notes" element={<ProtectedRoute><Notes /></ProtectedRoute>} />
          <Route path="/syllabus" element={<ProtectedRoute><Syllabus /></ProtectedRoute>} />
          <Route path="/notes/set-theory" element={<ProtectedRoute><SetTheoryAlgebra /></ProtectedRoute>} />
          <Route path="/notes/theory-of-computations" element={<ProtectedRoute><TheoryOfComputations /></ProtectedRoute>} />
          <Route path="/notes/digital-logic" element={<ProtectedRoute><DigitalLogic /></ProtectedRoute>} />
          <Route path="/notes/computer-organization" element={<ProtectedRoute><ComputerOrganization /></ProtectedRoute>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
