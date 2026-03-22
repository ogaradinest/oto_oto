import { Users, MessageSquare, BookOpen } from "lucide-react";

const Community = () => {
  const features = [
    {
      icon: Users,
      title: "Connect with Peers",
      description: "Network with other SMB leaders who are implementing AI automation in their businesses.",
    },
    {
      icon: MessageSquare,
      title: "Get Support",
      description: "Ask questions, share experiences, and get help from the community and our team.",
    },
    {
      icon: BookOpen,
      title: "Learn Together",
      description: "Access exclusive resources, workshops, and discussions on AI automation.",
    },
  ];

  return (
    <div className="pt-20" data-testid="community-page">
      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="community-title">
            Join Our Community
          </h1>
          <p className="text-lg text-gray-600 mb-8" data-testid="community-subtitle">
            Connect with fellow SMB leaders learning and implementing AI automation. Share insights, ask questions, and grow together.
          </p>
          
          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center"
                data-testid={`community-feature-${index}`}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-[#FF6B2C]" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skool Embed Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100" data-testid="skool-embed-container">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold">Clear AI Learning Community</h2>
              <p className="text-sm text-gray-500 mt-1">Join our Skool community for exclusive content and discussions</p>
            </div>
            <iframe
              src="https://www.skool.com/clear-ai-learning-9263"
              width="100%"
              height="800"
              frameBorder="0"
              title="Clear AI Learning Skool Community"
              className="w-full"
              data-testid="skool-iframe"
              style={{ minHeight: '800px' }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600">
            Have questions? Reach out to us at{" "}
            <a href="mailto:hello@otobrothers.com" className="text-[#FF6B2C] hover:underline">
              hello@otobrothers.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Community;
