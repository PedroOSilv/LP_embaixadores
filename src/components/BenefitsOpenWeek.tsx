const BenefitsOpenWeek = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-marble">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Video */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <video 
                className="w-full max-w-[300px] mx-auto aspect-[9/16] object-cover"
                controls
                crossOrigin="anonymous"
                preload="metadata"
              >
                <source src="https://res.cloudinary.com/dli5oe4qg/video/upload/v1756823570/Open_Week_t5nzgi.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
              {/* Elegant overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <h2 className="font-vivant-black text-2xl md:text-3xl lg:text-4xl text-transparent bg-gradient-gold bg-clip-text mb-2 leading-tight">
                TECNOLOGIA EXCLUSIVA
              </h2>
              <h3 className="font-vivant-black text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                DE ÚLTIMA GERAÇÃO
              </h3>
            </div>
            
            <p className="font-vivant-light text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
              Quando mais cedo realizar o seu diagnóstico, maior as hipóteses de prevenir e tratar aquilo que tanto te incomoda.
            </p>
            
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 mb-8 border border-primary/20">
              <p className="font-vivant-black text-2xl md:text-3xl text-center text-foreground mb-2">
                8 A 12 DE SETEMBRO
              </p>
            </div>
            
            <div className="text-center">
              <button className="bg-gradient-gold text-white font-vivant-medium text-lg px-8 py-4 rounded-lg shadow-premium hover:shadow-gold transition-all duration-300 transform hover:scale-105">
                Vagas limitadas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOpenWeek;