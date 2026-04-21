import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "@/App.css";

// Layout components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";

// Pages
import Home from "@/pages/Home";
import CaseStudies from "@/pages/CaseStudies";
import About from "@/pages/About";
import FreeResources from "@/pages/FreeResources";
import Products from "@/pages/Products";
import Policy from "@/pages/Policy";
import Community from "@/pages/Community";
import AIAssessment from "@/pages/AIAssessment";

function App() {
  return (
    <HelmetProvider>
      <div className="App min-h-screen flex flex-col">
        <BrowserRouter>
          <ScrollToTop />
          <CookieConsent />
          <Routes>
            {/* AI Assessment - standalone page without header/footer */}
            <Route path="/ai-assessment" element={<AIAssessment />} />

            {/* Main pages with header/footer */}
            <Route path="*" element={
              <>
                <Header />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/free_resources" element={<FreeResources />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/policy" element={<Policy />} />
                    <Route path="/community" element={<Community />} />
                    {/* Redirect old text-based policy routes to the new /policy page */}
                    <Route path="/privacy" element={<Navigate to="/policy" replace />} />
                    <Route path="/terms" element={<Navigate to="/policy" replace />} />
                    <Route path="/cookies" element={<Navigate to="/policy" replace />} />
                  </Routes>
                </main>
                <Footer />
              </>
            } />
          </Routes>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
