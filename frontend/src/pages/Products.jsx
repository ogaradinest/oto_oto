import { Helmet } from "react-helmet-async";
import { GraduationCap } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "AI training Level 1",
      duration: "3h workshop / 5 modules",
      price: "€249",
      modules: [
        "AI Fundamentals",
        "Prompting & context",
        "Research & evaluation: model & usage",
        {
          title: "Tech stack overview:",
          subItems: [
            "ChatGPT, Claude Cowork, Gemini",
            "GPTs, GEMs, Claude skills",
            "NotebookLM",
            "Claude Artefacts"
          ]
        },
        "Governance & business implementation"
      ],
      stripeLink: "https://buy.stripe.com/cNibIU1e0b2Rdj72BpbjW01"
    },
    {
      title: "AI training Level 2",
      duration: "4h workshop / 7 modules",
      price: "€349",
      modules: [
        "Vibe coding: basics",
        "Vibe coding: app creation (CRM, Sales report tool)",
        "Agent design, deployment (OpenClaw)",
        "Data base integration (Supabase)",
        "Hosting (GitHub, Vercel)",
        "Business apps integration: API",
        "Social media AI content tools"
      ],
      stripeLink: "https://buy.stripe.com/eVq9AM4qc3Apgvj1xlbjW02"
    }
  ];

  const romanNumerals = ['i', 'ii', 'iii', 'iv', 'v', 'vi'];

  const renderModule = (module, index) => {
    if (typeof module === "string") {
      return (
        <li key={index} className="flex items-start gap-2">
          <span className="text-[#FF6B2C] font-semibold">{index + 1}.</span>
          <span>{module}</span>
        </li>
      );
    }
    return (
      <li key={index} className="flex items-start gap-2">
        <span className="text-[#FF6B2C] font-semibold">{index + 1}.</span>
        <div>
          <span>{module.title}</span>
          <ul className="ml-4 mt-1 space-y-1">
            {module.subItems.map((subItem, subIndex) => (
              <li key={subIndex} className="flex items-start gap-2 text-gray-600">
                <span className="text-gray-400">{romanNumerals[subIndex]}.</span>
                <span>{subItem}</span>
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  };

  return (
    <div className="pt-20" data-testid="contact-page">
      <Helmet>
        <title>Products | otobrothers AI Training Workshops</title>
        <meta name="description" content="Hands-on AI training workshops for your team. Level 1 (€249) and Level 2 (€349) practical courses covering AI fundamentals, prompting, vibe coding and agent deployment." />
        <meta property="og:title" content="Products | otobrothers AI Training Workshops" />
        <meta property="og:description" content="Hands-on AI training workshops for business teams. Level 1 and Level 2 courses covering AI fundamentals, prompting, vibe coding and agent deployment." />
      </Helmet>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, productIndex) => (
              <a
                key={productIndex}
                href={product.stripeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#FF6B2C] transition-all hover:shadow-lg group flex flex-col"
                data-testid={`product-tile-${productIndex + 1}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#FF6B2C] bg-opacity-10 rounded-xl flex items-center justify-center group-hover:bg-opacity-20 transition-colors">
                    <GraduationCap className="w-6 h-6 text-[#FF6B2C]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{product.title}</h2>
                    <p className="text-sm text-gray-500">{product.duration}</p>
                  </div>
                </div>

                <div className="text-3xl font-bold text-[#FF6B2C] mb-6">
                  {product.price}
                </div>

                <ol className="space-y-3 text-sm flex-1">
                  {product.modules.map((module, index) => renderModule(module, index))}
                </ol>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <span className="inline-flex items-center gap-2 text-[#FF6B2C] font-medium text-sm">
                    Purchase now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
