import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/App.css";

// Layout components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Pages
import Home from "@/pages/Home";
import CaseStudies from "@/pages/CaseStudies";
import About from "@/pages/About";
import Newsletter from "@/pages/Newsletter";
import Contact from "@/pages/Contact";
import Community from "@/pages/Community";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Cookies from "@/pages/Cookies";
import AIAssessment from "@/pages/AIAssessment";

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <BrowserRouter>
        <ScrollToTop />
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
                  <Route path="/newsletter" element={<Newsletter />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/cookies" element={<Cookies />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
