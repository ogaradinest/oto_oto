import { Lightbulb, Search, TrendingUp, FileText, CheckCircle } from "lucide-react";

const Newsletter = () => {
  const contentTypes = [
    {
      icon: Lightbulb,
      title: "Use Case Spotlights",
      description: "Real-world examples of AI automation in action, with step-by-step breakdowns.",
    },
    {
      icon: Search,
      title: "Tool Reviews",
      description: "Honest assessments of the latest AI tools and platforms for SMBs.",
    },
    {
      icon: TrendingUp,
      title: "Industry Insights",
      description: "Trends, tips, and strategies to stay ahead in the AI automation space.",
    },
  ];

  const guideFeatures = [
    "10+ practical use cases for SMBs",
    "ROI calculation templates",
    "Implementation tips and best practices",
    "Tool recommendations by industry",
    "Common pitfalls to avoid",
  ];

  return (
    <div className="pt-20" data-testid="newsletter-page">
      {/* Hero / Signup Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="newsletter-title">
            Practical AI automation insights.
          </h1>
          <p className="text-lg text-gray-600 mb-8" data-testid="newsletter-subtitle">
            Join SMB leaders and operators getting actionable AI tips delivered straight to their inbox.
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
        </div>
      </section>

      {/* What You'll Receive */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" data-testid="content-section-title">
            What You'll Receive
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contentTypes.map((content, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                data-testid={`content-card-${index}`}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <content.icon className="w-6 h-6 text-[#FF6B2C]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{content.title}</h3>
                <p className="text-gray-600">{content.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet / Free Download */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-testid="lead-magnet-content">
              <span className="inline-block px-4 py-2 bg-[#FF6B2C] rounded-full text-sm font-medium mb-6">
                Free Download
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AI Automation for SMBs: Practical Use Cases
              </h2>
              <p className="text-gray-300 mb-8">
                Get our comprehensive guide packed with real-world examples and actionable strategies for implementing AI in your business.
              </p>
              <ul className="space-y-3">
                {guideFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF6B2C] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-400 mt-8">
                Subscribe to our newsletter above to get instant access.
              </p>
            </div>
            <div className="flex justify-center" data-testid="lead-magnet-image">
              <div className="bg-gray-800 rounded-2xl p-8 w-full max-w-sm">
                <div className="bg-gray-700 rounded-xl p-6 flex items-center justify-center h-64">
                  <FileText className="w-20 h-20 text-gray-500" />
                </div>
                <p className="text-center text-sm text-gray-400 mt-4">
                  AI Automation Guide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
