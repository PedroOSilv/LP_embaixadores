import { Helmet } from "react-helmet";
import EmbaixadoresHero from "@/components/embaixadores/EmbaixadoresHero";
import QuemSomos from "@/components/embaixadores/QuemSomos";
import PorqueSerEmbaixador from "@/components/embaixadores/PorqueSerEmbaixador";
import FormularioEmbaixador from "@/components/embaixadores/FormularioEmbaixador";
import ProvaSocial from "@/components/embaixadores/ProvaSocial";
import EmbaixadoresFooter from "@/components/embaixadores/EmbaixadoresFooter";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ambassador Program - Instituto Areluna</title>
        <meta
          name="description"
          content="Join Instituto Areluna's Ambassador Program. Transform beauty into purpose and be part of our exclusive community."
        />
        <meta property="og:title" content="Ambassador Program - Instituto Areluna" />
        <meta
          property="og:description"
          content="Join Instituto Areluna's Ambassador Program. Transform beauty into purpose and be part of our exclusive community."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/c3666a59-2f87-4c93-a341-911c9b6c6777.png" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <LanguageSwitcher />
        <EmbaixadoresHero />
        <QuemSomos />
        <PorqueSerEmbaixador />
        <FormularioEmbaixador />
        <ProvaSocial />
        <EmbaixadoresFooter />
      </div>
    </>
  );
};

export default Home;