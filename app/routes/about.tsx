const About = () => {
  const offers = [
    {
      title: "Diverse Styles for Every Taste",
      description:
        "Whether you love minimalist elegance, bold statements, or street-smart trends, we have something for everyone",
    },
    {
      title: "Quality You Can Trust",
      description:
        "very piece is crafted with precision and premium materials.",
    },
    {
      title: "Affordable Luxury",
      description: "Get the latest fashion without breaking the bank.",
    },
  ];
  return (
    <>
      <section className="bg-[#EDEDED]">
        <div className="container">
          <div className="rounded-lg w-full h-[400px] md:h-[500px] items-center grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl lg:text-5xl leading-[120%] font-bold text-[#58a59c]">
                About Us
              </h1>
              <h6 className="text-base lg:text-lg">
                At OpenStudy Store, we believe fashion is more than just
                clothing. It&apos;s a statement, an attitude, and a way to
                express who you are. That’s why we bring you a curated
                collection of stylish apparel, footwear, accessories, and more,
                designed for trendsetters, go-getters, and fashion lovers like
                you.
              </h6>
            </div>

            <div className="hidden md:flex flex-center h-full">
              <img
                src="/hero.webp"
                className="h-full"
                alt="person holding bags"
              />
            </div>
          </div>
        </div>
      </section>
      <h4 className="text-xl lg:text-3xl font-bold text-center mt-6 lg:mt-12 mb-4">Why Shop with us?</h4>
      <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 py-10">
        {offers.map((i, idx) => (
          <div key={idx} className="flex items-center flex-col gap-2">
            <h3 className="flex-center text-xl lg:text-3xl font-bold w-12 h-12 lg:w-15 lg:h-15 rounded-full bg-secondary text-white">
              {idx + 1}
            </h3>
            <h5 className="text-xl font-bold text-center">{i.title}</h5>
            <p className="text-center text-primary-50">{i.description}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default About;
