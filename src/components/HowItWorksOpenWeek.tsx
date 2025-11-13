const HowItWorksOpenWeek = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mx-auto text-center">
          <h2 className="font-vivant-black text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 md:mb-12">
            Porque o{" "}
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              Instituto Areluna?
            </span>
          </h2>

          <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16 shadow-premium">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="font-vivant-medium text-lg font-medium text-foreground mb-2">
                  Acompanhamento pós-operatório por<br />1 ano
                </h3>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="font-vivant-medium text-lg font-medium text-foreground mb-2">
                  Técnica brasileira exclusiva com naturalidade no desenho
                </h3>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="font-vivant-medium text-lg font-medium text-foreground mb-2">
                  Equipa clínica composta por médicos e enfermeiros
                </h3>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">4</span>
                </div>
                <h3 className="font-vivant-medium text-lg font-medium text-foreground mb-2">
                  Clínica referência em Portugal
                </h3>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">5</span>
                </div>
                <h3 className="font-vivant-medium text-lg font-medium text-foreground mb-2">
                  Mais de 15 anos de experiência
                </h3>
              </div>
            </div>
            
            {/* Destaque especial */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20">
              <div className="flex items-center justify-center gap-3 mb-3">
                <img 
                  src="https://res.cloudinary.com/dli5oe4qg/image/upload/v1757003518/Instituto-Areluna-Clinicas-9_bvlrlg.jpg" 
                  alt="Instituto Areluna" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div className="text-left">
                  <p className="font-vivant-medium text-foreground text-sm">Instituto Areluna</p>
                  <p className="font-vivant-light text-primary text-xs">Especialistas em Transplante Capilar</p>
                </div>
              </div>
              <p className="font-vivant-light text-foreground/80 text-sm">
                "Referência em resultados naturais, com tecnologia exclusiva."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksOpenWeek;