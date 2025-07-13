const Footer = () => {
  return (
    <footer className="w-full bg-[#1E1E1E] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0">
        {/* Left: Logo and description */}
        <div className="flex-1 min-w-[250px]">
          <div className="font-bold text-4xl md:text-[80px] md:leading-[80px] mb-4">
            <a href="#home">
            <span className="block">Pristine</span>
            <span className="block">Tech.</span>
            </a>
          </div>
          <p className="text-zinc-300 text-sm md:text-base max-w-sm">
            We deliver high-quality, future-forward digital solutions — built with precision, purpose, and performance in mind.
          </p>
        </div>
        {/* Right: Navigation */}
        <nav className="flex flex-col gap-4 text-left">
          <a href="#home" className="text-white text-2xl md:text-[40px] font-normal hover:underline">Home</a>
          <a href="#services" className="text-white text-2xl md:text-[40px] font-normal hover:underline">Services</a>
          <a href="#case-studies" className="text-white text-2xl md:text-[40px] font-normal hover:underline">Case Studies</a>
          <a href="#contact" className="text-white text-2xl md:text-[40px] font-normal hover:underline">Let’s Talk</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
