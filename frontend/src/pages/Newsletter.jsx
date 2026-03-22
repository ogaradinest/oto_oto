import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Newsletter = () => {
  const contentTypes = [
    {
      number: "01",
      title: "Use Case Spotlights",
      description: "Real-world automation examples you can apply immediately.",
    },
    {
      number: "02",
      title: "Tool Reviews",
      description: "Honest assessments of AI and automation tools relevant to SMBs.",
    },
    {
      number: "03",
      title: "Industry Insights",
      description: "Curated news and trends affecting AI adoption in your sector.",
    },
  ];

  const guideFeatures = [
    "15 proven automation use cases",
    "ROI calculation templates",
    "Implementation checklist",
    "Tool comparison guide",
  ];

  return (
    <div className="pt-20" data-testid="newsletter-page">
      {/* Hero / Signup Section */}
      <section className="py-20 bg-white">
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

      {/* What You'll Receive */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4" data-testid="content-section-title">
            What you'll receive
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Every edition is packed with actionable content.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contentTypes.map((content, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8"
                data-testid={`content-card-${index}`}
              >
                <div className="text-[#FF6B2C] text-sm font-semibold mb-4">{content.number}</div>
                <h3 className="text-xl font-semibold mb-3">{content.title}</h3>
                <p className="text-gray-600">{content.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet / Free Download */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gray-900 text-white rounded-2xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div data-testid="lead-magnet-content">
                <span className="inline-block px-4 py-2 bg-[#FF6B2C] rounded-full text-sm font-medium mb-6">
                  Free Download
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  AI Automation for SMBs: Practical Use Cases
                </h2>
                <p className="text-gray-300 mb-8">
                  A comprehensive guide featuring 15 real-world automation examples, ROI calculations, and implementation tips for service and manufacturing businesses.
                </p>
                <ul className="space-y-3 mb-8">
                  {guideFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FF6B2C] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-400">
                  Subscribe to our newsletter above to get instant access.
                </p>
              </div>
              <div className="flex justify-center" data-testid="lead-magnet-image">
                <div className="bg-gray-800 rounded-2xl p-8 w-full max-w-sm flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📄</div>
                    <p className="text-gray-400 text-sm">AI Automation Guide</p>
                  </div>
                </div>
              </div>
            </div>
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
