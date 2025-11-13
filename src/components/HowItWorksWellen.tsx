const HowItWorksWellen = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-vivant-black text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 md:mb-12">
            O processo que devolve{" "}
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              sorrisos em 24h
            </span>
          </h2>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-premium">
            <p className="font-vivant-light text-lg md:text-xl text-foreground leading-relaxed mb-8">
              Não é milagre. É método. É tecnologia. 
              Um caminho claro, em três etapas.
            </p>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="font-vivant-medium text-xl font-medium text-foreground mb-2">
                  Digitalização 3D
                </h3>
                <p className="text-muted-foreground">
                  Escaneio, planeio e mostro-te o que está por vir.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="font-vivant-medium text-xl font-medium text-foreground mb-2">
                  Implantes guiados
                </h3>
                <p className="text-muted-foreground">
                  Cirurgia precisa, segura, minimamente invasiva.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="font-vivant-medium text-xl font-medium text-foreground mb-2">
                  Novo sorriso
                </h3>
                <p className="text-muted-foreground">
                  No mesmo dia, sais daqui diferente.
                </p>
              </div>
            </div>
            
            {/* Destaque especial da Wellen */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20">
              <div className="flex items-center justify-center gap-3 mb-3">
                <img 
                  src="https://res.cloudinary.com/dli5oe4qg/image/upload/v1756404223/Design_sem_nome_1_tqdy5q.png" 
                  alt="Wellen Novato" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div className="text-left">
                  <p className="font-vivant-medium text-foreground text-sm">O meu acompanhamento exclusivo</p>
                  <p className="font-vivant-light text-primary text-xs">Wellen Novato</p>
                </div>
              </div>
              <p className="font-vivant-light text-foreground/80 text-sm">
                "Não estás sozinho em nenhum momento. Eu caminho contigo em cada passo."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksWellen;