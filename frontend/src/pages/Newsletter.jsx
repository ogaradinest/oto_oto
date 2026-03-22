import { Calculator, ClipboardCheck, Bot } from "lucide-react";
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

      {/* Resources Tiles Section */}
      <section className="py-16 bg-gray-50" data-testid="resources-section">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI ROI Calculator Tile */}
            <a
              href="https://customer-assets.emergentagent.com/job_site-generator-157/artifacts/yesi02fo_ai-automation-guide.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#FF6B2C] transition-all hover:shadow-lg group"
              data-testid="ai-roi-calculator-tile"
            >
              <div className="w-14 h-14 bg-[#FF6B2C] bg-opacity-10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-colors">
                <Calculator className="w-7 h-7 text-[#FF6B2C]" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI ROI Calculator</h3>
              <p className="text-gray-600 text-sm mb-4">
                Calculate your potential savings from AI automation. Includes 15+ proven use cases with real ROI calculations.
              </p>
              <span className="text-[#FF6B2C] font-medium text-sm inline-flex items-center gap-2">
                Open resource
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>

            {/* AI Assessment Tile */}
            <Link
              to="/ai-assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#FF6B2C] transition-all hover:shadow-lg group"
              data-testid="ai-assessment-tile"
            >
              <div className="w-14 h-14 bg-[#FF6B2C] bg-opacity-10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-colors">
                <ClipboardCheck className="w-7 h-7 text-[#FF6B2C]" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Assessment</h3>
              <p className="text-gray-600 text-sm mb-4">
                Evaluate your AI knowledge across five business capability domains. Get personalised learning recommendations.
              </p>
              <span className="text-[#FF6B2C] font-medium text-sm inline-flex items-center gap-2">
                Open resource
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </Link>

            {/* AI Agents Tile */}
            <a
              href="https://customer-assets.emergentagent.com/job_site-generator-157/artifacts/nqv9c980_ai-agents-doc.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#FF6B2C] transition-all hover:shadow-lg group"
              data-testid="ai-agents-tile"
            >
              <div className="w-14 h-14 bg-[#FF6B2C] bg-opacity-10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-colors">
                <Bot className="w-7 h-7 text-[#FF6B2C]" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Agents</h3>
              <p className="text-gray-600 text-sm mb-4">
                Learn about AI agents, their capabilities, and how they can transform your business workflows and operations.
              </p>
              <span className="text-[#FF6B2C] font-medium text-sm inline-flex items-center gap-2">
                Open resource
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
          </div>
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
