import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Process } from "./components/Process";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { CTABanner } from "./components/CTABanner";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Testimonials />
        <Services />
        <About />
        <Process />
        <CTABanner />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
