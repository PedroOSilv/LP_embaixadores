import { useEffect } from "react";
import HeaderOpenWeek from "@/components/HeaderOpenWeek";
import HeroOpenWeek from "@/components/HeroOpenWeek";
import BeforeAfterOpenWeek from "@/components/BeforeAfterOpenWeek";
import BenefitsOpenWeek from "@/components/BenefitsOpenWeek";
import HowItWorksOpenWeek from "@/components/HowItWorksOpenWeek";
import OpenWeekSection from "@/components/OpenWeekSection";
import AuthorityOpenWeek from "@/components/AuthorityOpenWeek";
import FinalCTAOpenWeek from "@/components/FinalCTAOpenWeek";
import FooterOpenWeek from "@/components/FooterOpenWeek";

const OpenWeek = () => {
  useEffect(() => {
    // Microsoft Clarity script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "t847appjqw");
    `;
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[src*="clarity.ms"]');
      if (existingScript) {
        existingScript.remove();
      }
      const inlineScript = document.querySelector('script:not([src])');
      if (inlineScript && inlineScript.innerHTML.includes('clarity')) {
        inlineScript.remove();
      }
    };
  }, []);

  return (
    <main>
      <HeaderOpenWeek />
      <HeroOpenWeek />
      <BeforeAfterOpenWeek />
      <BenefitsOpenWeek />
      <HowItWorksOpenWeek />

      <OpenWeekSection />
      <AuthorityOpenWeek />
      <FinalCTAOpenWeek />
      <FooterOpenWeek />

    </main>
  );
};

export default OpenWeek;