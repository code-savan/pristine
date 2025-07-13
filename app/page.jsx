
import Image from "next/image";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <div>
    <Hero />
    <div className="mx-[10px]">
        <Image className="w-full" src="/heroimage.png" alt="Hero" width={1000} height={1000} />
    </div>
    <Partners />
    <Services />
    <CaseStudies />
    <ContactUs />
    <Footer />
  </div>
  );
}
