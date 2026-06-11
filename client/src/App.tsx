import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Impact from "./pages/Impact";
import RescueStories from "./pages/RescueStories";
import RescueStoryDetail from "./pages/RescueStoryDetail";
import Adopt from "./pages/Adopt";
import Volunteer from "./pages/Volunteer";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

// Page transition wrapper
function PageTransition({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [phase, setPhase] = useState<"idle" | "out" | "in">("idle");

  useEffect(() => {
    if (location === displayLocation) return;
    setPhase("out");
    const t1 = setTimeout(() => {
      setDisplayLocation(location);
      setPhase("in");
    }, 220);
    const t2 = setTimeout(() => setPhase("idle"), 600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [location]);

  const style: React.CSSProperties = {
    opacity: phase === "out" ? 0 : 1,
    transform: phase === "out" ? "translateY(12px)" : "translateY(0)",
    transition: phase === "out"
      ? "opacity 0.2s ease, transform 0.2s ease"
      : "opacity 0.45s cubic-bezier(0.22,1,0.36,1), transform 0.45s cubic-bezier(0.22,1,0.36,1)",
  };

  return <div style={style}>{children}</div>;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <PageTransition>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/our-work" component={OurWork} />
          <Route path="/impact" component={Impact} />
          <Route path="/rescue-stories" component={RescueStories} />
          <Route path="/rescue-stories/:id" component={RescueStoryDetail} />
          <Route path="/adopt" component={Adopt} />
          <Route path="/volunteer" component={Volunteer} />
          <Route path="/donate" component={Donate} />
          <Route path="/contact" component={Contact} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </PageTransition>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <FloatingWhatsApp />
          <div className="flex flex-col min-h-screen">
            <Router />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
