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
            <a href="https://customer-assets.emergentagent.com/job_site-generator-157/artifacts/z2hgeqqi_new_PrivacyPolicy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors" data-testid="footer-link-privacy">
              Privacy
            </a>
            <a href="https://customer-assets.emergentagent.com/job_site-generator-157/artifacts/1613odhf_new_Terms.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors" data-testid="footer-link-terms">
              Terms
            </a>
            <a href="https://customer-assets.emergentagent.com/job_site-generator-157/artifacts/elc9idrm_new_CookiesPolicy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors" data-testid="footer-link-cookies">
              Cookies
            </a>
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
