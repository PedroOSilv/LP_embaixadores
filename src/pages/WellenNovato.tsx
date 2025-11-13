import HeaderWellen from "@/components/HeaderWellen";
import HeroWellen from "@/components/HeroWellen";
import BeforeAfterWellen from "@/components/BeforeAfterWellen";
import BenefitsWellen from "@/components/BenefitsWellen";
import HowItWorksWellen from "@/components/HowItWorksWellen";
import TestimonialsWellen from "@/components/TestimonialsWellen";
import PaymentOptionsWellen from "@/components/PaymentOptionsWellen";
import WellenSection from "@/components/WellenSection";
import AuthorityWellen from "@/components/AuthorityWellen";
import FinalCTAWellen from "@/components/FinalCTAWellen";
import FooterWellen from "@/components/FooterWellen";
import WhatsAppFloatWellen from "@/components/WhatsAppFloatWellen";

const WellenNovato = () => {

  return (
    <main>
      <HeaderWellen />
      <HeroWellen />
      <BeforeAfterWellen />
      <PaymentOptionsWellen />
      <BenefitsWellen />
      <HowItWorksWellen />
      <TestimonialsWellen />
      <WellenSection />
      <AuthorityWellen />
      <FinalCTAWellen />
      <FooterWellen />
      <WhatsAppFloatWellen phoneNumber="+351916880681" />
    </main>
  );
};

export default WellenNovato;