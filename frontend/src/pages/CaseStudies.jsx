import { MapPin, Users, Briefcase, Quote } from "lucide-react";
import LetsTalkButton from "@/components/LetsTalkButton";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      company: "Marketing Agency",
      location: "Romania",
      employees: "25-50",
      industry: "Marketing & Advertising",
      serviceType: "Automation",
      challenge: "Manual reporting was consuming 15+ hours weekly. The team spent excessive time gathering data from multiple platforms, creating reports, and sending updates to clients.",
      solution: "We deployed automated reporting workflows that pull data from Google Analytics, Meta Ads, and Google Ads. Reports are generated and distributed automatically every Monday morning.",
      techStack: ["n8n", "Google Sheets", "Slack", "Make"],
      results: [
        { value: "80%", label: "Reduction in reporting time" },
        { value: "15hrs", label: "Saved per week" },
        { value: "€2,400", label: "Monthly savings" },
      ],
      testimonial: {
        quote: "The automated reporting has been a game-changer. Our team can now focus on strategy instead of data gathering.",
        author: "Maria C.",
        role: "Operations Director",
      },
    },
    {
      id: 2,
      company: "Property Management",
      location: "United Kingdom",
      employees: "10-25",
      industry: "Real Estate",
      serviceType: "AI Agent",
      challenge: "Tenant enquiries were overwhelming the small team. Response times averaged 48 hours, leading to lost prospects and frustrated tenants.",
      solution: "We implemented an AI-powered chatbot for initial tenant screening and FAQ responses. The system handles scheduling, answers common questions, and escalates complex issues to staff.",
      techStack: ["OpenAI", "Zapier", "Calendly", "WhatsApp"],
      results: [
        { value: "90%", label: "Of enquiries handled by AI" },
        { value: "< 2min", label: "Average response time" },
        { value: "35%", label: "Increase in bookings" },
      ],
      testimonial: {
        quote: "We went from drowning in messages to having meaningful conversations only when needed. The AI handles everything else perfectly.",
        author: "James T.",
        role: "Managing Director",
      },
    },
    {
      id: 3,
      company: "Manufacturing SME",
      location: "France",
      employees: "50-100",
      industry: "Manufacturing",
      serviceType: "Audit + Training",
      challenge: "The company knew AI could help but didn't know where to start. Leadership needed guidance on which processes to automate first and how to upskill their team.",
      solution: "We conducted a comprehensive workflow audit, identified 12 automation opportunities, and delivered customised training for the operations team on AI tools and best practices.",
      techStack: ["Notion", "Airtable", "Claude", "Custom Training"],
      results: [
        { value: "12", label: "Automation opportunities identified" },
        { value: "€180K", label: "Projected annual savings" },
        { value: "100%", label: "Team trained on AI tools" },
      ],
      testimonial: {
        quote: "The audit opened our eyes to possibilities we never considered. The training gave us confidence to drive our own automation initiatives.",
        author: "Pierre L.",
        role: "CEO",
      },
    },
  ];

  return (
    <div className="pt-20" data-testid="case-studies-page">
      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="case-studies-title">
            Case Studies
          </h1>
          <p className="text-lg text-gray-600" data-testid="case-studies-subtitle">
            Real results from real businesses. See how we've helped SMBs transform their operations with AI automation.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              data-testid={`case-study-${study.id}`}
            >
              {/* Header */}
              <div className="p-8 border-b border-gray-100">
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                    <MapPin size={14} />
                    {study.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                    <Users size={14} />
                    {study.employees} employees
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                    <Briefcase size={14} />
                    {study.industry}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-100 text-[#FF6B2C] rounded-full text-sm font-medium">
                    {study.serviceType}
                  </span>
                </div>
                <h2 className="text-2xl font-bold">{study.company}</h2>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Challenge & Solution */}
                <div className="lg:col-span-2 p-8 space-y-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Challenge
                    </h3>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Solution
                    </h3>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Tech Stack
                    </h3>
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
                </div>

                {/* Results Panel */}
                <div className="bg-gray-50 p-8 border-l border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                    Results
                  </h3>
                  <div className="space-y-6">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex}>
                        <div className="text-3xl font-bold text-[#FF6B2C]">
                          {result.value}
                        </div>
                        <div className="text-sm text-gray-600">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="p-8 bg-gray-900 text-white">
                <div className="flex gap-4">
                  <Quote className="w-8 h-8 text-[#FF6B2C] flex-shrink-0" />
                  <div>
                    <p className="text-lg mb-4 italic">"{study.testimonial.quote}"</p>
                    <p className="text-sm">
                      <span className="font-medium">{study.testimonial.author}</span>
                      <span className="text-gray-400"> — {study.testimonial.role}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to become our next success story?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how we can help transform your business with AI automation.
          </p>
          <LetsTalkButton />
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
