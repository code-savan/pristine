import Image from "next/image";

const Partners = () => {
  return (
    <section className="w-full flex flex-col items-center py-12 md:py-32">
      <div className="text-center mb-6">
        <p className="text-zinc-900 text-base md:text-lg font-normal">
          We have industry expert who have<br />partnered with
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          src="/partners.png"
          alt="Partners"
          width={600}
          height={120}
          className="w-auto h-20 md:h-28 object-contain"
          priority
          unoptimized={true}
        />
      </div>
    </section>
  );
};

export default Partners;
