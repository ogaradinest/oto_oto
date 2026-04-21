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
          <div className="flex justify-center" data-testid="about-image">
            <img
              src="https://customer-assets.emergentagent.com/job_8cf2a72d-4e46-4040-a269-a04fc16dca96/artifacts/e2qjhhjn_Screenshot%202026-03-15%20232332.png"
              alt="Dan and Cristian Megherlich - Co-founders of otobrothers"
              className="max-w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
