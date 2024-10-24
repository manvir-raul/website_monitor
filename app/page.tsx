import { Cta } from "./components/Cta";
import { Faq } from "./components/Faq";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Plans } from "./components/Plans";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-[20px]  lg:px-20">
        <Features />
        <Faq />
        <Plans />
        <Cta />
        <Footer />
      </div>
    </>
  );
}
