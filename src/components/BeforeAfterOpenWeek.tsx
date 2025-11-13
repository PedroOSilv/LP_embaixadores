const BeforeAfterOpenWeek = () => {
  const cases = [
    {
      image: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1756985149/10-1_owhp0h.jpg",
      title: "Transplante Capilar Completo"
    },
    {
      image: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1756994933/28_bymyft.jpg", 
      title: "Recuperação da Linha Frontal"
    },
    {
      image: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1756985150/4_ehxh3a.jpg",
      title: "Densidade Capilar Renovada"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-marble relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-gold opacity-80" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-gold opacity-80" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block px-6 py-2 bg-gradient-gold text-white rounded-full text-sm font-medium mb-6">
            🌟 RESULTADOS REAIS
          </div>
          <h2 className="font-vivant-black text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-8">
            Cabelo recuperado
          </h2>
          <p className="font-vivant-light text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Resultados reais de transplantes capilares. <br />
            Homens e mulheres que recuperaram a sua autoestima e confiança
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto mb-16">
          {cases.map((case_, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-gold hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 h-[500px] flex flex-col">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={case_.image} 
                    alt={case_.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay com efeito hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8 text-center flex-1 flex flex-col justify-center">
                  <h3 className="font-vivant-medium text-2xl font-medium text-foreground mb-2">
                    {case_.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-gold mx-auto rounded-full" />
                </div>
              </div>
              
              {/* Badge decorativo */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-gold rounded-xl p-8 md:p-12 shadow-2xl max-w-7xl mx-auto border border-gold/30">
            <h3 className="font-vivant-black text-2xl md:text-3xl lg:text-4xl text-white mb-6 tracking-wide">
              De 08 a 12 de Setembro: Rastreio Capilar Gratuito
            </h3>
            <button
              onClick={() => document.getElementById('evaluation-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center rounded-lg text-lg font-medium bg-white text-primary hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 h-14 px-10 shadow-xl font-vivant-medium"
            >
              🔘 Quero o meu rastreio capilar gratuito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterOpenWeek;