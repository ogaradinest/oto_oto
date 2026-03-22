const About = () => {
  return (
    <div className="pt-20" data-testid="about-page">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6" data-testid="about-title">
            otobrothers: The Owls of the business world.
          </h1>
          
          <p className="text-lg text-gray-700 mb-4">
            Two co-founders + two collaborators.
          </p>
          
          <p className="text-lg text-gray-700 mb-4">
            120 years' combined experience in strategy, sales, marketing, advertising, finance and project management.
          </p>
          
          <p className="text-lg text-gray-700 mb-12">
            Building a great business for great customers.
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
