import { SearchCheck, Rocket, GraduationCap, ChevronDown } from "lucide-react";
import LetsTalkButton from "@/components/LetsTalkButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Home = () => {
  const services = [
    {
      icon: SearchCheck,
      title: "Audit",
      description: "We start by understanding your current workflows, identifying bottlenecks, and planning for impact.",
      bullets: ["Map workflow", "Create SOPs", "Assess risk", "Calculate ROI"],
    },
    {
      icon: Rocket,
      title: "Design & Deployment",
      description: "We design AI solutions—agents or automation—then implement, test, and deploy them.",
      bullets: ["Agent/automation deployment", "Measure KPIs", "Continuous improvement"],
    },
    {
      icon: GraduationCap,
      title: "Training",
      description: "Hands-on workshops and practical learning to empower your team.",
      bullets: ["Customised content", "Practical exercises", "Knowledge assessment"],
    },
  ];

  const faqs = [
    {
      question: "Will this disrupt our current workflow?",
      answer: "No. We design solutions that integrate seamlessly with your existing processes. Our phased approach ensures minimal disruption while maximizing impact. We work closely with your team to ensure smooth transitions.",
    },
    {
      question: "How do you handle data security and privacy?",
      answer: "We take data security very seriously. All our processes comply with GDPR, UK GDPR, DPA 2018, and we follow ISO/IEC 42001:2023 guidelines for AI management systems. Your data is encrypted in transit and at rest.",
    },
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timelines vary based on complexity. Simple automations can be deployed within 2-4 weeks, while more comprehensive solutions may take 6-12 weeks. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do we need technical expertise on our team?",
      answer: "Not at all. Our solutions are designed to be user-friendly and we provide comprehensive training. We handle all technical aspects and ensure your team can manage the systems confidently.",
    },
  ];

  return (
    <div className="pt-20" data-testid="home-page">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-white" data-testid="hero-section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8" data-testid="hero-headline">
            We help SMBs use{" "}
            <span className="text-[#FF6B2C]">AI</span> to increase{" "}
            <span className="text-[#FF6B2C]">efficiency</span> and reduce{" "}
            <span className="text-[#FF6B2C]">costs</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto" data-testid="hero-body">
            It's simple: pick a process, we build a solution, then we measure results together.
          </p>
          <p className="text-base text-gray-500 mb-10" data-testid="hero-closing">
            You and your CFO will love the results. We've done it for others, we'll do it for you.
          </p>
          <LetsTalkButton />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" data-testid="services-section">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-testid="services-title">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                data-testid={`service-card-${service.title.toLowerCase().replace(" & ", "-")}`}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-[#FF6B2C]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 bg-[#FF6B2C] rounded-full"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <LetsTalkButton />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" data-testid="faq-section">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-testid="faq-title">
            FAQ
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-xl border-none px-6"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left font-medium py-5 hover:no-underline" data-testid={`faq-question-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5" data-testid={`faq-answer-${index}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-16">
            <LetsTalkButton />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50" data-testid="contact-section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div data-testid="contact-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to automate your business?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Book a free discovery call and let's discuss how AI can transform your operations.
              </p>
              <LetsTalkButton />
            </div>
            {/* Right Column - Google Calendar */}
            <div className="bg-white rounded-2xl p-2 shadow-sm" data-testid="contact-calendar">
              <iframe
                src="https://calendar.app.google/UugK49VvNqpE7iJN8"
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
                title="Book a discovery call with otobrothers"
                data-testid="calendar-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
