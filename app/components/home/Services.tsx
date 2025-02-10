const Services = () => {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 py-10">
      <div className="flex-center flex-col gap-2">
        <div className="text-[100px]">🛍️</div>
        <h5 className="text-xl font-bold text-center">
          Shop the Latest Trends
        </h5>
        <h6 className="text-center text-primary-50">
          We curate the latest styles, from inspired looks to everyday
          essentials, ensuring you always step out in confidence.
        </h6>
      </div>
      <div className="flex-center flex-col gap-2">
        <div className="text-[100px]">👗</div>
        <h5 className="text-xl font-bold text-center">Quality You Can Trust</h5>
        <h6 className="text-center text-primary-50">
          We offer high-quality clothing, well-crafted footwear, and premium
          accessories designed to last
        </h6>
      </div>
      <div className="flex-center flex-col gap-2">
        <div className="text-[100px]">🚚</div>
        <h5 className="text-xl font-bold text-center">
          Fast & Reliable Shipping
        </h5>
        <h6 className="text-center text-primary-50">
          No more long waits! We guarantee quick, secure, and hassle-free
          delivery for all your fashion needs.
        </h6>
      </div>
    </section>
  );
};

export default Services;
