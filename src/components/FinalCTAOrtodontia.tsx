import { Button } from "@/components/ui/button";

const FinalCTAOrtodontia = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background marble texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/lovable-uploads/bad3a722-534a-44c5-a5a1-36043811b0f7.png')`
        }}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-vivant-black text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 md:mb-8">
            Chegou a hora de alinhar.{" "}
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              Seu sorriso perfeito de forma invisível.
            </span>
          </h2>

          <p className="font-vivant-light text-lg md:text-xl text-white/90 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto">
            Marque a sua avaliação e descubra se pode fazer o tratamento 
            com alinhadores invisíveis.
          </p>

          <div className="flex justify-center">
            <Button 
              variant="premium" 
              size="xl"
              className="font-sans font-medium tracking-wide text-base md:text-lg px-8 py-4"
              onClick={() => document.getElementById('evaluation-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🔘 Quero marcar a minha avaliação
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-6 text-white/70 text-sm">
              <span className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Avaliação sem compromisso
              </span>
              <span className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Simulação 3D gratuita
              </span>
              <span className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Resultados previsíveis
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTAOrtodontia;