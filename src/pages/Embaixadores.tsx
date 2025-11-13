import { Helmet } from "react-helmet";
import EmbaixadoresHero from "@/components/embaixadores/EmbaixadoresHero";
import QuemSomos from "@/components/embaixadores/QuemSomos";
import PorqueSerEmbaixador from "@/components/embaixadores/PorqueSerEmbaixador";
import FormularioEmbaixador from "@/components/embaixadores/FormularioEmbaixador";
import ProvaSocial from "@/components/embaixadores/ProvaSocial";
import EmbaixadoresFooter from "@/components/embaixadores/EmbaixadoresFooter";

const Embaixadores = () => {
  return (
    <>
      <Helmet>
        <title>Programa de Embaixadores - Instituto Areluna</title>
        <meta
          name="description"
          content="Junte-se ao Programa de Embaixadores do Instituto Areluna. Transforme beleza em propósito e faça parte da nossa comunidade exclusiva."
        />
        <meta property="og:title" content="Programa de Embaixadores - Instituto Areluna" />
        <meta
          property="og:description"
          content="Junte-se ao Programa de Embaixadores do Instituto Areluna. Transforme beleza em propósito e faça parte da nossa comunidade exclusiva."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/c3666a59-2f87-4c93-a341-911c9b6c6777.png" />
      </Helmet>

      <div className="min-h-screen bg-white">
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

export default Embaixadores;
