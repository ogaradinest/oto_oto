import { Helmet } from "react-helmet-async";
import { ExternalLink } from "lucide-react";

const policies = [
  {
    id: "privacy",
    label: "Privacy Policy",
    url: "https://customer-assets.emergentagent.com/job_9c165549-d358-4f83-9964-b69e2115aab7/artifacts/meboy2uf_Policy_Privacy.pdf"
  },
  {
    id: "terms",
    label: "Terms & Conditions",
    url: "https://customer-assets.emergentagent.com/job_9c165549-d358-4f83-9964-b69e2115aab7/artifacts/xxq08exk_Policy_TandC.pdf"
  },
  {
    id: "cookies",
    label: "Cookies Policy",
    url: "https://customer-assets.emergentagent.com/job_9c165549-d358-4f83-9964-b69e2115aab7/artifacts/837abp5l_Policy_Cookies.pdf"
  }
];

const Policy = () => {
  return (
    <div className="pt-20" data-testid="policy-page">
      <Helmet>
        <title>Legal Policies | otobrothers</title>
        <meta name="description" content="otobrothers legal documents — Privacy Policy, Terms & Conditions, and Cookies Policy." />
      </Helmet>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {policies.map((policy) => (
            <div key={policy.id} id={policy.id} data-testid={`policy-section-${policy.id}`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold" data-testid={`policy-title-${policy.id}`}>
                  {policy.label}
                </h2>
                <a
                  href={policy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm bg-[#FF6B2C] text-white font-medium px-4 py-2 rounded-full hover:bg-[#e55a1f] transition-colors flex-shrink-0 ml-4"
                  data-testid={`policy-open-${policy.id}`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Open PDF
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                <embed
                  src={policy.url}
                  type="application/pdf"
                  width="100%"
                  height="800px"
                  data-testid={`policy-embed-${policy.id}`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Policy;
