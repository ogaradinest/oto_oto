import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="pt-20" data-testid="about-page">
      <Helmet>
        <title>About | otobrothers AI Automation Consultancy</title>
        <meta name="description" content="Meet the otobrothers team — two co-founders and three collaborators with 100 years of combined business experience in strategy, sales, marketing and finance." />
        <meta property="og:title" content="About | otobrothers AI Automation Consultancy" />
        <meta property="og:description" content="Meet the otobrothers team — two co-founders and three collaborators with 100 years of combined business experience." />
      </Helmet>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6" data-testid="about-title">
            otobrothers: the Owls of the business world
          </h1>
          
          <p className="text-lg text-gray-700 font-bold mb-4">
            Two co-founders + three collaborators
          </p>
          
          <p className="text-lg text-gray-700 mb-4">
            100 years combined experience in strategy, sales, marketing, advertising, finance and project management.
          </p>
          
          <p className="text-lg text-gray-700 mb-12">
            Building a business with great customers.
          </p>

          {/* Co-founders Image */}
          <div className="flex justify-center mb-16" data-testid="about-image">
            <img
              src="https://customer-assets.emergentagent.com/job_8cf2a72d-4e46-4040-a269-a04fc16dca96/artifacts/e2qjhhjn_Screenshot%202026-03-15%20232332.png"
              alt="Dan and Cristian Megherlich - Co-founders of otobrothers"
              className="max-w-full h-auto rounded-2xl"
            />
          </div>

          {/* Co-founders Profiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto" data-testid="about-founders">
            <div
              className="flex flex-col items-center text-center bg-yellow-400 rounded-2xl p-6 shadow-md"
              data-testid="founder-dan"
            >
              <img
                src="/dan_megherlich.jpeg"
                alt="Dan Megherlich - Co-founder of otobrothers"
                className="w-48 h-48 object-cover rounded-2xl mb-4 border-4 border-white"
              />
              <h3 className="text-xl font-bold mb-2 text-black">Dan Megherlich</h3>
              <p className="text-black">
                Dan brings 20+ years of B2B sales leadership across EMEA, scaling revenue from $10K to $100M+ at AMD and SHI. He builds sales engines from scratch, championing AI tools for every team.
              </p>
            </div>

            <div
              className="flex flex-col items-center text-center bg-black rounded-2xl p-6 shadow-md"
              data-testid="founder-cristian"
            >
              <img
                src="/cristian_megherlich.jpeg"
                alt="Cristian Megherlich - Co-founder of otobrothers"
                className="w-48 h-48 object-cover rounded-2xl mb-4 border-4 border-white"
              />
              <h3 className="text-xl font-bold mb-2 text-white">Cristian Megherlich</h3>
              <p className="text-white">
                Cristian has 25+ years in advertising, marketing, and award-winning design. Since 2024 he's been teaching entrepreneurs to automate and grow with AI and marketing. Strong communicator with deep business process expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
