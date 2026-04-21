import { Helmet } from "react-helmet-async";

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
            <div key={policy.id} data-testid={`policy-section-${policy.id}`}>
              <h2 className="text-2xl font-bold mb-6" data-testid={`policy-title-${policy.id}`}>
                {policy.label}
              </h2>
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  src={policy.url}
                  title={policy.label}
                  className="w-full"
                  style={{ height: "800px", border: "none" }}
                  data-testid={`policy-iframe-${policy.id}`}
                />
              </div>
              <div className="mt-3 text-right">
                <a
                  href={policy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#FF6B2C] hover:underline font-medium"
                  data-testid={`policy-download-${policy.id}`}
                >
                  Open in new tab
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Policy;
