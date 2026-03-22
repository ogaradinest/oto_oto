import { SearchCheck, Rocket, GraduationCap, CheckCircle2, ChevronDown } from "lucide-react";
import YourCallButton from "@/components/LetsTalkButton";
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
      description: "Understand your workflow, identify bottlenecks and security risks.",
      subDescription: "Plan automations for the best impact within budget.",
      highlight: "Did we mention CFOs love us?",
      bullets: [
        { text: "map workflow", bold: false },
        { text: "create SOPs", bold: "SOPs" },
        { text: "assess risk", bold: false },
        { text: "create training plan", bold: false },
        { text: "calculate ROI", bold: "ROI" },
      ],
    },
    {
      icon: Rocket,
      title: "Design & Deployment",
      description: "Design AI solution: agent and/or automation.",
      subDescription: "Implement. Test. Deploy.",
      highlight: null,
      bullets: [
        { text: "create deployment plan", bold: false },
        { text: "implement automation", bold: "automation" },
        { text: "agent deployment", bold: "agent" },
        { text: "measure KPIs", bold: "KPIs" },
        { text: "document process & handover", bold: "handover" },
      ],
    },
    {
      icon: GraduationCap,
      title: "Training",
      description: "Teaching your employees how to use Ai securely.",
      subDescription: "Hands-on workshops.",
      highlight: "This is not PowerPoint slides.",
      highlightSub: "Laptops on, learn skills. Learn Ai.",
      bullets: [
        { text: "customised content", bold: "customised" },
        { text: "practical exercises", bold: "practical" },
        { text: "knowledge assessment", bold: "knowledge" },
        { text: "Test at the end: Pass/Fail", bold: "Pass/Fail" },
      ],
    },
  ];

  const faqs = [
    {
      question: "Will this disrupt our existing workflows?",
      answer: "We design automations to enhance, not replace, your current processes. Our approach involves careful mapping of your workflows and gradual implementation with thorough testing. Your team continues working normally while we build and test in parallel.",
    },
    {
      question: "How do you handle data security and privacy?",
      answer: "We follow EU GDPR, UK General Data Protection Regulation (UK GDPR) and UK Data Protection Act 2018 (DPA 2018). We also implement the principles of ISO/IEC 42001:2023 Information Technology — Artificial Intelligence — Management System (AIMS). All our automations are built with security-first principles, using encrypted connections and secure API integrations.",
    },
    {
      question: "How long does implementation take?",
      answer: "Simple automations can be live within 1-2 weeks. More complex projects typically take 4-8 weeks. We provide a detailed timeline during our initial consultation and keep you updated throughout the process with regular demos and checkpoints.",
    },
    {
      question: "Do we need technical expertise to use the automations?",
      answer: "No. We build user-friendly solutions that your team can operate without coding knowledge. Every project includes comprehensive training and documentation. We also provide ongoing support to ensure you get maximum value from your automation investment.",
    },
  ];

  const renderBulletText = (bullet) => {
    if (!bullet.bold) return bullet.text;
    const parts = bullet.text.split(bullet.bold);
    return (
      <>
        {parts[0]}<span className="font-semibold">{bullet.bold}</span>{parts[1] || ''}
      </>
    );
  };

  return (
    <div className="pt-20" data-testid="home-page">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white" data-testid="hero-section">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4" data-testid="hero-headline">
            <span className="font-bold">You</span> own a <span className="font-bold">business</span>.
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
            Limited <span className="font-bold">resources</span>.
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-12">
            <span className="font-bold">You</span> heard that <span className="text-[#FF6B2C] font-bold">AI</span> increases<br />
            business <span className="text-[#FF6B2C] font-bold">efficiency</span>.
          </h2>
          
          <p className="text-lg font-semibold mb-6" data-testid="hero-body">
            Let's try this:
          </p>
          
          <ol className="space-y-3 mb-12 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-[#FF6B2C] font-bold">1.</span>
              <span>Pick a process. Any process: sales, marketing, operations.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FF6B2C] font-bold">2.</span>
              <span><span className="text-[#FF6B2C]">We</span> build you an automated <span className="text-[#FF6B2C]">solution</span>.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FF6B2C] font-bold">3.</span>
              <span>Measure your KPIs & <span className="text-[#FF6B2C]">savings</span>.</span>
            </li>
          </ol>

          <div className="text-center mb-8">
            <p className="text-lg mb-2">
              You and your <span className="text-[#FF6B2C] font-semibold">CFO</span> will love the <span className="text-[#FF6B2C] font-semibold">results</span>.
            </p>
            <p className="text-gray-600">
              We've done it for others, we'll do it for you.
            </p>
          </div>

          <div className="text-center">
            <YourCallButton />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#E8E8E8]" data-testid="services-section">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" data-testid="services-title">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 flex flex-col"
                data-testid={`service-card-${service.title.toLowerCase().replace(" & ", "-")}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <service.icon className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                
                <div className="flex-1">
                  <p className="text-gray-700 mb-2">{service.description}</p>
                  {service.subDescription && (
                    <p className="text-gray-700 mb-4">{service.subDescription}</p>
                  )}
                  
                  {service.highlight && (
                    <p className="font-semibold text-gray-900 mb-4">{service.highlight}</p>
                  )}
                  {service.highlightSub && (
                    <p className="text-gray-700 mb-4">{service.highlightSub}</p>
                  )}
                </div>
                
                <ul className="space-y-2.5 mt-auto pt-4">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6B2C] flex-shrink-0" strokeWidth={1.5} />
                      <span>{renderBulletText(bullet)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <YourCallButton />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" data-testid="faq-section">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" data-testid="faq-title">
            FAQ
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-100 rounded-xl border-none"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left font-medium px-6 py-4 hover:no-underline text-sm" data-testid={`faq-question-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 px-6 pb-4 text-sm" data-testid={`faq-answer-${index}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-16">
            <YourCallButton />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#E8E8E8]" data-testid="contact-section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="pt-8" data-testid="contact-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Ready to <span className="text-[#FF6B2C]">automate the work</span><br />
                your business shouldn't be doing?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Book a free 30-minute discovery call.
              </p>
              <YourCallButton />
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
