import { Button } from "@/components/ui/button";

const FinalCTAWellen = () => {
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
              Chegou a tua hora.
            </span>
          </h2>

          <p className="font-vivant-light text-lg md:text-xl text-white/90 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto">
            O amanhã pode ser apenas mais um dia sem sorrir. 
            Ou pode ser o dia em que tudo muda. 
            Estás a uma avaliação de distância de descobrir.
          </p>

          {/* Destaque da Wellen */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <img 
              src="https://res.cloudinary.com/dli5oe4qg/image/upload/v1756404223/Design_sem_nome_1_tqdy5q.png" 
              alt="Wellen Novato" 
              className="w-16 h-16 rounded-full object-cover border-3 border-primary shadow-lg"
            />
            <div className="text-left">
              <p className="font-vivant-medium text-white text-lg">O meu acompanhamento exclusivo</p>
              <p className="font-vivant-light text-primary text-sm">Wellen Novato - A tua consultora de confiança</p>
            </div>
          </div>

          <div className="flex justify-center">
            <Button 
              variant="premium" 
              size="xl"
              className="font-sans font-medium tracking-wide text-base md:text-lg px-8 py-4"
              onClick={() => document.getElementById('evaluation-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🔘 Quero a minha avaliação online gratuita
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
                Acompanhamento pessoal da Wellen
              </span>
              <span className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Implantes em 24h
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

export default FinalCTAWellen;