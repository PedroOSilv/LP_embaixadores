const AuthorityOpenWeek = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 md:mb-12">
            Dr. Marcos Kawasaki,{" "}
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              especialista em transplante capilar
            </span>
          </h2>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-premium">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              +17 Anos de experiência em dermatologia e Terapia/Transplante Capilar. Especialista em restauração capilar avançada, com resultados naturais e permanentes num ambiente de excelência e conforto em uma das clinicas mais conceituadas na europa.
            </p>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">💇‍♂️</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  Transplante FUE
                </h3>
                <p className="text-muted-foreground">
                  Técnica mais avançada
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">👨‍⚕️</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  Especialista Renomado
                </h3>
                <p className="text-muted-foreground">
                  Dr. Marcos Kawasaki
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">⚡</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  Open Week Especial
                </h3>
                <p className="text-muted-foreground">
                  Condições exclusivas limitadas
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Técnica FUE
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Sem Cicatrizes
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Resultados Naturais
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Permanente
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorityOpenWeek;