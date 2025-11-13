const About = () => {
  return (
    <section className="relative py-20 md:py-32 bg-background">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 leading-tight tracking-tight">
                Sobre o Instituto{" "}
                <span className="text-transparent bg-gradient-gold bg-clip-text">
                  Areluna
                </span>
              </h2>
              
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
                No Instituto Areluna, cada paciente é acolhido com excelência, empatia e atenção total ao seu bem-estar. Unimos o rigor da medicina dentária à sensibilidade da estética médica, oferecendo tratamentos personalizados num ambiente seguro, sofisticado e centrado na pessoa.
              </p>
            </div>
          </div>
          
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-muted rounded-2xl border border-border shadow-premium relative overflow-hidden">
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-background/5 to-transparent" />
              
              {/* Optional decorative elements */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="absolute bottom-4 right-4 w-1 h-1 bg-muted-foreground/40 rounded-full" />
            </div>
            
            {/* Decorative gradient border */}
            <div className="absolute -inset-1 bg-gradient-gold opacity-30 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;