import Image from "next/image";

const caseStudies = [
  {
    image: "/case1.png",
    description:
      "We developed a centralized system that enables the NCDMB to efficiently track and manage travel documents, improving visibility, reducing delays, and ensuring compliance.",
  },
  {
    image: "/case2.png",
    description:
      "We designed and developed a flexible CMS that allows NEXIM to manage, update, and publish content with ease — improving internal efficiency and public communication.",
  },
  {
    image: "/case3.png",
    description:
      "We crafted a modern, responsive website that reflects NEXIM’s vision, improves user experience, and enhances public access to key export-import information.",
  },
];

const CaseStudies = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full max-w-none px-0">
        <h2 className="text-center text-zinc-900 text-3xl md:text-4xl font-medium mb-2">
          Case Studies<br />/ Work
        </h2>
        <p className="text-center text-zinc-700 text-base md:text-lg mb-6 max-w-md mx-auto">
          A closer look at how we’ve delivered high-impact solutions for clients across industries.
        </p>
        <div className="flex justify-center mb-8">
          <a href="#contact" className="border border-zinc-300 rounded-full px-6 py-2 text-sm text-zinc-700 hover:bg-zinc-100 transition-colors">
            Contact Us
          </a>
        </div>
        <div
          className="w-full overflow-x-auto scrollbar-hide"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div
            className="flex gap-3 md:gap-8 md:pl-6 pl-3 md:pr-6 pr-3 md:pl-12 md:pr-12 snap-x snap-mandatory"
            style={{ minWidth: '100%' }}
          >
            {caseStudies.map((item, idx) => (
              <div
                key={idx}
                className=" rounded-[5px] flex-shrink-0 md:w-[630px] w-[380px] md:h-[640px] h-fit p-4 flex flex-col items-center snap-start"
              >
                <div className="w-full bg-[#F0F0F0] rounded-md overflow-hidden mb-4 flex items-center justify-center md:p-16 p-6">
                  <div className="relative w-full h-48 md:h-64">
                    <Image
                      src={item.image}
                      alt={`Case Study ${idx + 1}`}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 768px) 90vw, 33vw"
                      priority={idx === 0}
                    />
                  </div>
                </div>
                <p className="text-zinc-700 text-xs md:text-base text-left">
                  {item.description}
                </p>
              </div>
            ))}
            {/* Right padding element for scroll reveal */}
            <div className="flex-shrink-0 w-6 md:w-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
