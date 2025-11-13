const PaymentOptionsWellen = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h2 className="font-vivant-black text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Investe no teu{" "}
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              sorriso perfeito
            </span>
          </h2>
          
          <p className="font-vivant-light text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Porque o teu sorriso não pode esperar. Facilito o teu investimento com condições únicas.
          </p>

          {/* Payment highlight card */}
          <div className="bg-white rounded-2xl shadow-premium p-8 md:p-12 border border-primary/10 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Payment icon */}
              <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                </svg>
              </div>
              
              {/* Payment details */}
              <div className="text-center md:text-left">
                <h3 className="font-vivant-black text-2xl md:text-3xl text-foreground mb-2">
                  Parcela em até{" "}
                  <span className="text-transparent bg-gradient-gold bg-clip-text font-vivant-black text-4xl md:text-5xl">
                    24x
                  </span>
                </h3>
                <p className="font-vivant-medium text-xl md:text-2xl text-primary mb-2">
                  SEM JUROS
                </p>
                <p className="font-vivant-light text-muted-foreground">
                  Condições especiais para o teu tratamento com a Wellen
                </p>
              </div>
            </div>
          </div>



          {/* CTA */}
          <div className="bg-gradient-gold rounded-xl p-6 text-center">
            <p className="font-vivant-medium text-white text-lg mb-4">
              Não deixes o investimento ser um obstáculo ao teu sorriso perfeito
            </p>
            <p className="font-vivant-light text-white/90 text-sm mb-4">
              Consulta as condições detalhadas na tua avaliação gratuita
            </p>
            <button 
              onClick={() => document.getElementById('evaluation-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary font-vivant-medium px-6 py-3 rounded-lg hover:bg-white/90 transition-colors duration-300"
            >
              Quero a minha avaliação online gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentOptionsWellen;