const TestimonialsOpenWeek = () => {
  const testimonials = [
    {
      text: "Recuperei a minha autoestima. Voltei a sentir-me jovem.",
      name: "Carlos",
      age: "42"
    },
    {
      text: "O resultado superou todas as minhas expectativas. Natural e perfeito.",
      name: "Miguel",
      age: "38"
    },
    {
      text: "Finalmente posso usar qualquer penteado. A minha vida mudou completamente.",
      name: "Ricardo",
      age: "45"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-marble">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-vivant-black text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            O que dizem os que já{" "}
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              confiaram em mim
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 shadow-premium hover:shadow-gold transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💬</span>
                </div>
                
                <blockquote className="font-vivant-light text-foreground text-base md:text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div>
                  <p className="font-vivant-medium font-semibold text-foreground">{testimonial.name}</p>
                  <p className="font-vivant-light text-muted-foreground text-sm">{testimonial.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção especial do Instituto Areluna */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-premium border border-primary/20">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <img 
                  src="https://res.cloudinary.com/dli5oe4qg/image/upload/v1756983253/AML-Instituto-Areluna-SET-Suzan-Fotografa-20_snvvfv.jpg" 
                  alt="Instituto Areluna" 
                  className="w-16 h-16 rounded-full object-cover border-3 border-primary"
                />
                <div className="text-left">
                  <p className="font-vivant-medium text-foreground text-lg">Instituto Areluna</p>
                  <p className="font-vivant-light text-primary text-sm">Especialistas em Transplante Capilar</p>
                </div>
              </div>
              
              <blockquote className="font-vivant-light text-foreground text-lg md:text-xl leading-relaxed italic mb-2">
                "O nosso maior orgulho é devolver a confiança e autoestima através de resultados naturais e duradouros."
              </blockquote>
              <p className="font-vivant-light text-sm text-muted-foreground">• Mais de 15 anos de experiência em transplante capilar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsOpenWeek;