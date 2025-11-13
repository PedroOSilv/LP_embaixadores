const BenefitsWellen = () => {
  const benefits = [
    "Resultados imediatos, sem meses de espera",
    "Procedimento minimamente invasivo", 
    "Corrige função e estética de uma só vez",
    "Durabilidade comprovada",
    "Verificamos a necessidade de enxertos caso a caso"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-marble">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-vivant-black text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
          Por que escolher{" "}
          <span className="text-transparent bg-gradient-gold bg-clip-text">
            implantes dentários?
          </span>
        </h2>
          <p className="font-vivant-light text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            No Instituto Areluna, a técnica dá-te algo raro: a soma da estética com a função, no mesmo dia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-premium hover:shadow-gold transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center mt-1">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <p className="text-foreground text-base md:text-lg leading-relaxed group-hover:text-primary transition-colors duration-300">
                  {benefit}
                </p>
              </div>
            </div>
          ))}
          
          {/* Card especial da Wellen */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-premium hover:shadow-gold transition-all duration-300 group border border-primary/20">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center mt-1">
                <span className="text-white font-bold text-lg">★</span>
              </div>
              <div>
                <p className="text-foreground text-base md:text-lg leading-relaxed group-hover:text-primary transition-colors duration-300 mb-2">
                  O mais importante: estarei contigo do primeiro ao último passo
                </p>
                <p className="text-foreground/70 text-sm">
                  Acompanhamento pessoal em cada etapa da transformação
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsWellen;