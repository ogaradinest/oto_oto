import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [hash]);

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
              <h2 className="text-2xl font-bold mb-6" data-testid={`policy-title-${policy.id}`}>
                {policy.label}
              </h2>
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50" style={{ height: "400px" }}>
                <iframe
                  src={`https://docs.google.com/viewer?url=${encodeURIComponent(policy.url)}&embedded=true`}
                  title={policy.label}
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  data-testid={`policy-iframe-${policy.id}`}
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
