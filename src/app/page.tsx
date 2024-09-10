import Navigation from "../components/Navigation/Navigation";
import Slider from "../components/HomeOne/header";
import About from "../components/HomeOne/About";
import HowItWorks from "../components/HomeOne/benefit";
import Features from "../components/HomeOne/Features";
import Counter from "../components/HomeOne/Counter";
import Screenshots from "../components/Common/problem";
import Testimonial from "../components/HomeOne/Testimonial";
import Pricing from "../components/HomeOne/Pricing";
import Faq from "../components/Common/Faq";
import Team from "../components/HomeOne/Team";
import AppDownload from "../components/HomeOne/AppDownload";
import Blog from "../components/HomeOne/Blog";
import ContactForm from "../components/Common/ContactForm";
import Footer from "../components/Common/Footer";

export default function Home() {
  return (
    <>
      <Navigation />

      <Slider />

      {/* <About /> */}

      <Screenshots />

      <HowItWorks />

      <Features />

      {/* <Counter /> */}

      {/* <Testimonial /> */}

      <Pricing />

      {/* <Faq /> */}

      {/* <Team /> */}

      <AppDownload />

      {/* <Blog /> */}

      {/* <ContactForm /> */}

      <Footer />
    </>
  );
}
