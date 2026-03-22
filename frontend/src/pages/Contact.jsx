import YourCallButton from "@/components/LetsTalkButton";

const Contact = () => {
  return (
    <div className="pt-20" data-testid="contact-page">
      <section className="py-20 bg-[#E8E8E8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="pt-8" data-testid="contact-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Ready to <span className="text-[#FF6B2C]">automate the work</span><br />
                your business shouldn't be doing?
              </h1>
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

export default Contact;
