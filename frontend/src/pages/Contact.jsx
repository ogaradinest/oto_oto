import LetsTalkButton from "@/components/LetsTalkButton";

const Contact = () => {
  return (
    <div className="pt-20" data-testid="contact-page">
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div data-testid="contact-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to automate your business?
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Book a free discovery call and let's discuss how AI can transform your operations.
              </p>
              <LetsTalkButton />
              
              {/* Contact Info */}
              <div className="mt-12 space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a href="mailto:hello@otobrothers.com" className="text-gray-900 hover:text-[#FF6B2C] transition-colors font-medium">
                    hello@otobrothers.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <a href="tel:+442079460958" className="text-gray-900 hover:text-[#FF6B2C] transition-colors font-medium">
                    +44 20 7946 0958
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Location</p>
                  <p className="text-gray-900 font-medium">London, United Kingdom</p>
                </div>
              </div>
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

export default Contact;
