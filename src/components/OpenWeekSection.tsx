import { Button } from "@/components/ui/button";

const OpenWeekSection = () => {
  const treatments = [
    {
      title: "Rigenera",
      image: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1757005225/Captura_de_Tela_2025-09-04_a%CC%80s_16.23.55_qnpjjs.png"
    },
    {
      title: "Transplante de sobrancelha",
      image: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1757005227/32_c3ttck.jpg"
    },
    {
      title: "Transplante de barba",
      image: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1757005231/4-2_hntanf.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-marble-50 to-marble-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-vivant-black text-3xl md:text-4xl lg:text-5xl text-marble-900 mb-6 leading-tight">
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              Tratamentos Exclusivos
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto mb-12">
          {treatments.map((treatment, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-elegant hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={treatment.image} 
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay com efeito hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 md:p-8 text-center">
                  <h3 className="font-vivant-medium text-xl md:text-2xl text-marble-900 mb-2">
                    {treatment.title}
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
          <Button 
            variant="premium" 
            size="lg"
            className="font-sans font-medium tracking-wide"
            onClick={() => document.getElementById('evaluation-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            🔘 Quero o meu rastreio gratuito
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpenWeekSection;