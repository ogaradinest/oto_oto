import { Calculator, ClipboardCheck, Bot, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className="pt-20" data-testid="newsletter-page">
      {/* Resources Tiles Section */}
      <section className="py-16 bg-white" data-testid="resources-section">
        <div className="max-w-5xl mx-auto px-6">
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

      {/* Skool Community Link */}
      <section className="py-12 bg-white" data-testid="skool-section">
        <div className="max-w-5xl mx-auto px-6">
          <a
            href="https://www.skool.com/clear-ai-learning-9263/about?ref=bc0449fe57714cd2958a2da3fb922eb7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-[#FF6B2C] transition-all hover:shadow-lg group"
            data-testid="skool-community-link"
          >
            <div className="w-12 h-12 bg-[#FF6B2C] bg-opacity-10 rounded-xl flex items-center justify-center group-hover:bg-opacity-20 transition-colors">
              <Users className="w-6 h-6 text-[#FF6B2C]" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Join our Skool community: Simple & Clear AI Learning.</h3>
            </div>
            <svg className="w-5 h-5 text-[#FF6B2C] ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* Newsletter Section - Beehiiv only */}
      <section className="py-16 bg-gray-50" data-testid="newsletter-section">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-center">
            <iframe 
              src="https://subscribe-forms.beehiiv.com/98522bf8-1300-4d44-841f-36c9d9ea2cfb" 
              className="beehiiv-embed w-full max-w-[560px]" 
              data-test-id="beehiiv-embed" 
              frameBorder="0" 
              scrolling="no" 
              style={{ height: '314px', borderRadius: '0px', backgroundColor: 'transparent', boxShadow: '0 0 #0000' }}
              title="Newsletter signup"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
