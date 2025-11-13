import { Button } from "@/components/ui/button";

const WellenSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-marble-50 to-marble-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-vivant-black text-3xl md:text-4xl lg:text-5xl text-marble-900 mb-6 leading-tight">
              Mais do que aparência.
              <span className="text-transparent bg-gradient-gold bg-clip-text block">
                Presença.
              </span>
            </h2>
            
            <p className="font-vivant-light text-lg md:text-xl text-marble-700 mb-6 leading-relaxed">
              A tua vida vai mudar. O teu sorriso vai renascer. E vais voltar a sentir-te confiante.
            </p>
            
            <p className="font-vivant-light text-base md:text-lg text-marble-600 mb-8 leading-relaxed">
              Já acompanhei centenas de pessoas nesta transformação. 
              Vi o momento exacto em que recuperam a confiança para sorrir sem medo. 
              E sei que contigo não será diferente.
            </p>
            
            <div className="bg-gradient-to-r from-primary/10 to-gold/10 rounded-xl p-6 mb-8">
              <p className="font-vivant-medium text-lg text-marble-800 text-center">
                "Não é só sobre dentes. É sobre devolver-te a vida que mereces."
              </p>
            </div>
            
            <Button 
              variant="premium" 
              size="lg"
              className="font-sans font-medium tracking-wide"
              onClick={() => document.getElementById('evaluation-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Quero a minha avaliação online gratuita
            </Button>
          </div>

          {/* Right side - Wellen's lifestyle photo */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main lifestyle photo */}
              <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                <img 
                  src="https://res.cloudinary.com/dli5oe4qg/image/upload/v1756404353/DSC02727_v9byan.jpg" 
                  alt="Wellen Novato - Lifestyle" 
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
                {/* Elegant overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-gold rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-marble rounded-full opacity-30 blur-xl"></div>
              
              {/* Quote card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <p className="font-vivant-light text-marble-800 text-sm md:text-base italic mb-2">
                  "Quando vejo o teu sorriso renascer, sinto que mudei uma vida. E isso não tem preço."
                </p>
                <p className="font-vivant-medium text-primary text-sm">— Wellen Novato</p>
                <p className="font-vivant-light text-marble-600 text-xs mt-1">5 anos de experiência mudando vidas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellenSection;