const Hero = () => {
  return (
    <section className="relative min-h-[95dvh] flex flex-col justify-center items-center bg-white"
    id="home"
    >
      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-6">
        {/* Logo */}
        <div className="font-bold text-lg leading-tight text-zinc-900 select-none">
            <a href="#home">
          <span className="block">Pristine</span>
          <span className="block">Tech.</span>
            </a>
        </div>
        {/* CTA Button */}
        <a
          href="#contact"
          className="border border-zinc-300 rounded-full px-5 py-2 text-sm text-zinc-700 hover:bg-zinc-100 transition-colors"
        >
          Let&apos;s Talk
        </a>
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
        <h1 className="font-sans font-medium text-zinc-900 text-4xl sm:text-5xl md:text-[56px] leading-tight mb-4">
          Built to the<br />
          Highest Standard.<br />
          Tailored to You.
        </h1>
        <p className="text-zinc-700 text-base sm:text-lg md:text-xl mb-8 max-w-xl">
          Our tech services are designed to exceed<br className="hidden sm:inline" /> expectations — every time.
        </p>
        <a
          href="#services"
          className="border border-zinc-300 rounded-full px-6 py-2 text-sm text-zinc-700 hover:bg-zinc-100 transition-colors"
        >
          Explore our services
        </a>
      </div>
    </section>
  );
};

export default Hero;
