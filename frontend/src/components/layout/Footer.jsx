import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-100" data-testid="main-footer">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/" data-testid="footer-logo">
            <img
              src="https://customer-assets.emergentagent.com/job_smb-workflow/artifacts/4r8sz9s2_logo_otobrothers-03.png"
              alt="otobrothers"
              className="h-8"
            />
          </Link>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-gray-900 transition-colors" data-testid="footer-link-privacy">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-gray-900 transition-colors" data-testid="footer-link-terms">
              Terms
            </Link>
            <Link to="/cookies" className="hover:text-gray-900 transition-colors" data-testid="footer-link-cookies">
              Cookies
            </Link>
          </nav>
          <p className="text-sm text-gray-400" data-testid="footer-copyright">
            © {new Date().getFullYear()} OTOBROTHERS LTD
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
