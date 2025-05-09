// ✅ src/app/page.tsx
import Hero from "@/components/HeroGeometric";
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
      <Description />
      <WhySection />
      <HowItWorks />
      <Roadmap />
      <Resources />
      <Contribute /> 
      <PrivacyPolicy />
      <Footer />
    </>
  );
}
