// ✅ src/app/page.tsx
import Hero from "@/components/Hero";
//import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
//import LanguageSelector from "@/components/LanguageSelector";
import Header from "@/components/Header";
import Description from "@/components/Description";
import WhySection from "@/components/WhyWithInfosSection";
import Roadmap from "@/components/Roadmap";
import Resources from "@/components/Resources";
import Contribute from "@/components/Contribute";
import PrivacyPolicy from "@/components/PrivacyPolicy";




export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="maxW">
      <Description />
      <WhySection />
      <HowItWorks />
      <Roadmap />
      <Contribute />
      <div className="privacy-resources">
      <Resources /> 
      <PrivacyPolicy />
      </div> 
      </div>
      <Footer />
    </>
  );
}
