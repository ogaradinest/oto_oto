import LetsTalkButton from "@/components/LetsTalkButton";

const About = () => {
  return (
    <div className="pt-20" data-testid="about-page">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" data-testid="about-title">
            About Us
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 rounded-2xl p-8 mb-12" data-testid="about-content">
              <h2 className="text-2xl font-semibold mb-6 text-[#FF6B2C]">
                The Owls of the business world
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We're otobrothers — a team of AI automation consultants helping small and medium-sized businesses work smarter, not harder. Based in the UK, we serve clients across Europe.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our founders have spent years in tech, operations, and consulting. We've seen firsthand how the right automation can transform a business — saving time, cutting costs, and freeing people to do meaningful work.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We believe AI should be accessible to every business, not just enterprises with big budgets. That's why we focus on practical, high-impact solutions that deliver measurable results.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether it's automating your reporting, deploying an AI agent to handle enquiries, or training your team on the latest tools — we're here to help you harness the power of AI.
              </p>
            </div>

            {/* Co-founders Image */}
            <div className="text-center mb-12" data-testid="about-image">
              <div className="bg-gray-100 rounded-2xl p-8 inline-block">
                <div className="w-64 h-64 bg-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-400 text-sm">Co-founders photo</span>
                </div>
                <p className="text-sm text-gray-500">The otobrothers team</p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" data-testid="about-values">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold mb-2">Results-Focused</h3>
                <p className="text-sm text-gray-600">Every project starts with clear KPIs and ends with measurable outcomes.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold mb-2">Partner Approach</h3>
                <p className="text-sm text-gray-600">We work alongside your team, not just for you.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold mb-2">Practical First</h3>
                <p className="text-sm text-gray-600">No buzzwords, just solutions that work.</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-900 text-white rounded-2xl p-8" data-testid="about-contact">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a href="mailto:hello@otobrothers.com" className="text-white hover:text-[#FF6B2C] transition-colors">
                    hello@otobrothers.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <a href="tel:+442079460958" className="text-white hover:text-[#FF6B2C] transition-colors">
                    +44 20 7946 0958
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Location</p>
                  <p>London, United Kingdom</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Serving</p>
                  <p>UK and EU</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <LetsTalkButton />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
