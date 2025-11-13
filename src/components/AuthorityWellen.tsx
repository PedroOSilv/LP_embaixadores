const AuthorityWellen = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 md:mb-12">
            Wellen,{" "}
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              especialista em implantes dentários
            </span>
          </h2>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-premium">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              Com vasta experiência em implantes dentários e utilizando técnicas avançadas,
              a Wellen realiza procedimentos com segurança, conforto e resultados naturais.
              Especialista em reabilitação oral completa, garante a autoconfiança dos pacientes
              num ambiente acolhedor e exclusivo.
            </p>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">🦷</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  Implantes Premium
                </h3>
                <p className="text-muted-foreground">
                  Tecnologia de última geração
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">👩‍⚕️</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  Especialista Renomada
                </h3>
                <p className="text-muted-foreground">
                  Wellen Novato
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">✨</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  Resultados Naturais
                </h3>
                <p className="text-muted-foreground">
                  Sorriso perfeito e duradouro
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Implantes de Titânio
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Cirurgia Guiada
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Recuperação Rápida
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Garantia Vitalícia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorityWellen;