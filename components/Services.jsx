import Image from "next/image";

const services = [
  {
    title: "Dashboard, Website, & Mobile Application development",
    description:
      "We design and develop custom dashboards that turn complex data into clear, actionable insights built for performance, clarity, and scale.",
    image: "/service1.png",
  },
  {
    title: "AI & Automation",
    description:
      "We build intelligent systems that streamline operations, boost efficiency, and unlock smarter decision-making at scale.",
    image: "/service2.png",
  },
  {
    title: "Change Management Consultancy & Strategy",
    description:
      "We guide organizations through complex transformations with tailored strategies, proven frameworks, and a people-first approach.",
    image: "/service3.png",
  },
  {
    title: "Data Management",
    description:
      "From storage to structure to strategy, we deliver data management solutions built for clarity, compliance, and control.",
    image: "/service4.png",
  },
];

const Services = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-zinc-900 text-2xl md:text-3xl font-medium mb-2">
          Delivering Nothing<br />but the Best
        </h2>
        <p className="text-center text-zinc-700 text-base md:text-lg mb-10 max-w-xl mx-auto">
          From custom software to cloud infrastructure, every service we provide is built to perform and scale with your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <div key={service.title} className="bg-[#1E1E1E] rounded-[5px] overflow-hidden flex flex-col">
              <div className="py-16 md:px-20 px-6 flex-1 flex flex-col justify-center items-center">
                <h3 className="text-white text-lg md:text-xl font-medium text-center mb-6 max-w-xs">
                  {service.title}
                </h3>
                <p className="text-zinc-300 text-sm md:text-base text-center">
                  {service.description}
                </p>
              </div>
              <div className="w-full h-56 md:h-[300px] relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={idx === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
