import Image from "next/image";

const ContactUs = () => {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center relative"
      style={{ background: "#fff" }}
      id="contact"
    >
      {/* Background image overlay */}
      <Image
        src="/contactimage.png"
        alt="Contact background"
        fill
        className="object-cover object-center z-0"
        priority
        unoptimized={true}
      />
      {/* Overlay for content readability */}
      <div className="absolute inset-0 bg-black/10 z-10" />
      <div className="relative z-20 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between px-6 py-20 gap-12">
        {/* Left: Heading & Description */}
        <div className="flex-1 min-w-[270px] max-w-md text-white">
          <h2 className="font-sans font-bold text-4xl md:text-5xl leading-tight mb-4">
            Let’s Build<br />
            Something<br />
            Exceptional
          </h2>
          <p className="text-base md:text-sm font-normal mt-8">
            Reach out to explore how our top-tier tech solutions can move your business forward.
          </p>
        </div>
        {/* Right: Contact Form */}
        <form className="flex-1 min-w-[320px] max-w-lg bg-transparent flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="block text-white text-sm mb-2">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John doe"
              className="w-full px-4 py-3 rounded-md bg-white text-zinc-900 border-none outline-none text-base font-normal"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white text-sm mb-2">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="johndoe@gmail.com"
              className="w-full px-4 py-3 rounded-md bg-white text-zinc-900 border-none outline-none text-base font-normal"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-white text-sm mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Leave a message"
              rows={4}
              className="w-full px-4 py-3 rounded-md bg-white text-zinc-900 border-none outline-none text-base font-normal resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1E1E1E] text-white py-4 rounded-md text-lg font-normal mt-4 hover:bg-zinc-800 transition-colors"
          >
            Contact us
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
