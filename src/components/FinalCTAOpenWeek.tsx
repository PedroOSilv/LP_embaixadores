import { Button } from "@/components/ui/button";

const FinalCTAOpenWeek = () => {
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
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              Vagas limitadas.
            </span>
          </h2>

          <p className="font-vivant-light text-lg md:text-xl text-white/90 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto">
            A Open Week Capilar acontece de 8 a 12 de Setembro. Não perca esta oportunidade de realizar um rastreio capilar gratuito
            e descobrir as melhores soluções para o seu caso com os especialistas em tratamentos capilares.
          </p>



          <div className="flex justify-center">
            <Button 
              variant="premium" 
              size="xl"
              className="font-sans font-medium tracking-wide text-base md:text-lg px-8 py-4"
              onClick={() => document.getElementById('contactForm')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🔘 Quero agendar meu rastreio gratuito
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-6 text-white/70 text-sm">
              <span className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Rastreio sem compromisso
              </span>
              <span className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Equipe especializada
              </span>
              <span className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Técnicas avançadas
              </span>
              <span className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Resultados comprovados
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTAOpenWeek;