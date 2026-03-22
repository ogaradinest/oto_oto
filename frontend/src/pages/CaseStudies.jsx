import { MapPin, Users, Briefcase, Tag } from "lucide-react";
import YourCallButton from "@/components/LetsTalkButton";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      location: "Bucharest, Romania",
      employees: "14 employees",
      industry: "Professional Services",
      serviceType: "Marketing Agency",
      challenge: "The agency was spending 15+ hours weekly on client reporting, proposal generation, and project status updates. Manual data collection from multiple platforms created bottlenecks and delayed client communications.",
      solution: "We implemented an n8n-based automation system that aggregates data from Google Analytics, their sales data, and project management tools. An AI agent generates personalised weekly reports based on templates and client history.",
      techStack: ["n8n", "ChatGPT", "Google Sheets", "Slack", "HubSpot"],
      results: [
        { value: "65%", label: "Reduction in reporting time" },
        { value: "12 hrs", label: "Saved per week" },
        { value: "€18,000", label: "Annual cost savings" },
        { value: "2x", label: "Faster proposal turnaround" },
      ],
      testimonial: {
        quote: "Before the initial conversation, we were reluctant to change anything but we knew something should change. The automation implemented by otobrothers transformed how we work. Our team now focuses on strategy and creativity instead of copying data between spreadsheets.",
        author: "Veronica D.",
        role: "Operations Director",
      },
    },
    {
      id: 2,
      location: "Milton Keynes, UK",
      employees: "7 employees",
      industry: "Professional Services",
      serviceType: "Property Management Firm",
      challenge: "Managing 34 rental properties meant constant tenant communications, maintenance scheduling, and compliance tracking. The small team was overwhelmed with repetitive queries and manual scheduling tasks.",
      solution: "We built an AI-powered tenant communication system that summarises email inquiry and schedules maintenance appointments. The system adding voice chatbots integrates with customer's property management software and sends proactive alerts to their maintenance team.",
      techStack: ["n8n", "ChatGPT", "Twilio", "Google Calendar", "Vapi", "Propertyware"],
      results: [
        { value: "60%", label: "Fewer manual responses" },
        { value: "£12,000", label: "Annual cost reduction" },
        { value: "24/7", label: "Tenant support availability" },
        { value: "90%", label: "Faster response times" },
      ],
      testimonial: {
        quote: "Dan and Chris were great from the initial conversation to the last deployment. We went from drowning in emails to having better interaction with our tenants.",
        author: "Nadia K.",
        role: "Managing Director",
      },
    },
    {
      id: 3,
      location: "Lyon, France",
      employees: "42 employees",
      industry: "Manufacturing",
      serviceType: "Industrial parts manufacturer",
      challenge: "Quality control documentation and supplier communication consumed significant administrative time. Back office spent hours on paperwork instead of problem-solving. Order tracking was fragmented across email and spreadsheets.",
      solution: "We deployed AI-powered document processing that extracts data from supplier invoices and quality certificates, automatically updating inventory and compliance records. A custom agent handles routine supplier inquiries and provides real-time order status updates.",
      techStack: ["n8n", "Claude", "Code & Cowork", "SAP Integration", "Microsoft Teams"],
      results: [
        { value: "40%", label: "Less time on documentation" },
        { value: "€35,000", label: "Annual savings" },
        { value: "99.2%", label: "Data accuracy rate" },
        { value: "4 hrs", label: "Faster order processing" },
      ],
      testimonial: {
        quote: "Our employees are finally doing engineering work. The AI handles the admin that was killing our productivity.",
        author: "Khaled M.",
        role: "Plant Manager",
      },
    },
  ];

  return (
    <div className="pt-20 bg-white" data-testid="case-studies-page">
      {/* Case Studies */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-2xl overflow-hidden border-2 border-black"
              data-testid={`case-study-${study.id}`}
            >
              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Main Content */}
                <div className="lg:col-span-2 p-8">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {study.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={14} />
                      {study.employees}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={14} />
                      {study.industry}
                    </span>
                    <span className="flex items-center gap-1.5 text-[#FF6B2C]">
                      <Tag size={14} />
                      {study.serviceType}
                    </span>
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <span className="font-semibold text-gray-900">challenge: </span>
                    <span className="text-gray-700">{study.challenge}</span>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <span className="font-semibold text-[#FF6B2C]">otobrothers' solution: </span>
                    <span className="text-gray-700">{study.solution}</span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {study.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results Panel */}
                <div className="bg-gray-50 p-8 border-l border-gray-200">
                  <div className="grid grid-cols-2 gap-6">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex}>
                        <div className="text-2xl md:text-3xl font-bold text-[#FF6B2C]">
                          {result.value}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="p-8 border-t border-gray-200">
                <p className="text-gray-700 mb-4">"{study.testimonial.quote}"</p>
                <p className="text-sm">
                  <span className="font-semibold">{study.testimonial.author}</span>
                  <span className="text-gray-500">, {study.testimonial.role}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <YourCallButton />
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
