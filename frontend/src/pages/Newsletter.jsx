import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className="pt-20" data-testid="newsletter-page">
      {/* Hero / Signup Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="newsletter-title">
            Practical AI automation insights
          </h1>
          <p className="text-lg text-gray-600 mb-8" data-testid="newsletter-subtitle">
            Join business owners and operations managers who receive our bi-weekly newsletter with actionable AI automation tips.
          </p>
          
          {/* Badges */}
          <div className="flex justify-center gap-4 mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Bi-weekly
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              No spam
            </span>
          </div>

          {/* Beehiiv Embed */}
          <div className="max-w-xl mx-auto" data-testid="newsletter-form">
            <iframe 
              src="https://subscribe-forms.beehiiv.com/98522bf8-1300-4d44-841f-36c9d9ea2cfb" 
              className="beehiiv-embed" 
              data-test-id="beehiiv-embed" 
              frameBorder="0" 
              scrolling="no" 
              style={{ width: '100%', maxWidth: '560px', height: '314px', margin: '0 auto', borderRadius: '0px', backgroundColor: 'transparent', boxShadow: '0 0 #0000' }}
              title="Newsletter signup"
            ></iframe>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* AI Automation Guide Embed */}
      <section className="bg-gray-50" data-testid="ai-guide-section">
        <div className="w-full">
          <iframe
            src="https://customer-assets.emergentagent.com/job_site-generator-157/artifacts/yesi02fo_ai-automation-guide.html"
            width="100%"
            style={{ minHeight: '3000px', border: 'none' }}
            title="AI Automation Guide for SMBs"
            data-testid="ai-guide-iframe"
          ></iframe>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-[#FF6B2C] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#e55a1f] transition-colors"
          >
            Let's talk
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
