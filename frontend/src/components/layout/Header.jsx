import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "About", path: "/about" },
    { name: "Free Resources", path: "/newsletter" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
    setMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    setMobileMenuOpen(false);
    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 h-20" data-testid="main-header">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" onClick={handleLogoClick} className="flex items-center" data-testid="header-logo">
          <img
            src="https://customer-assets.emergentagent.com/job_smb-workflow/artifacts/4r8sz9s2_logo_otobrothers-03.png"
            alt="otobrothers"
            className="h-10"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm transition-colors ${
                isActive(link.path)
                  ? "text-black font-medium"
                  : "text-gray-500 hover:text-black"
              }`}
              data-testid={`nav-link-${link.name.toLowerCase().replace(" ", "-")}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button (Desktop) */}
        <button
          onClick={scrollToContact}
          className="hidden md:flex items-center gap-2 bg-[#FF6B2C] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#e55a1f] transition-colors"
          data-testid="header-cta-button"
        >
          Your call
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
          data-testid="mobile-menu-button"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute top-20 left-0 right-0 shadow-lg" data-testid="mobile-menu">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base py-2 ${
                  isActive(link.path)
                    ? "text-black font-medium"
                    : "text-gray-500"
                }`}
                data-testid={`mobile-nav-link-${link.name.toLowerCase().replace(" ", "-")}`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={scrollToContact}
              className="mt-4 bg-[#FF6B2C] text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-[#e55a1f] transition-colors"
              data-testid="mobile-cta-button"
            >
              Your call
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
