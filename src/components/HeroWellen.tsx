import { Button } from "@/components/ui/button";
import EvaluationForm from "./EvaluationForm";

const HeroWellen = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[75vh] flex items-center overflow-hidden pt-16 md:pt-20">
      {/* Background with marble texture and overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/bad3a722-534a-44c5-a5a1-36043811b0f7.png')`
        }}
      />
      
      {/* Wellen image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat opacity-90"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dli5oe4qg/image/upload/v1756457726/DSC02712_y3waof.jpg')`,
          backgroundPosition: 'center top'
        }}
      />
      
      {/* Light black overlay for better text readability */}
      <div className="absolute inset-0 bg-black/80" />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="lg:col-span-3 text-left">
            {/* Logo */}
            <div className="mb-6">
              <img 
                src="/lovable-uploads/c3666a59-2f87-4c93-a341-911c9b6c6777.png" 
                alt="Instituto Areluna" 
                className="h-20 md:h-24 lg:h-28 object-contain"
              />
            </div>
            
            <h1 className="font-vivant-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 md:mb-6 leading-tight tracking-tight">
              Vou ajudar a devolver-te<br />
              <span className="text-transparent bg-gradient-gold bg-clip-text">o sorriso em 24 horas.</span>
            </h1>
            
            <p className="font-vivant-light text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed">
              Não é promessa vaga. É técnica. É ciência. É resultado.
            </p>

            <p className="font-vivant-light text-base md:text-lg text-white/80 mb-8 leading-relaxed">
              Há anos acompanho pessoas que perderam a confiança porque perderam o sorriso. 
              E em apenas um dia, devolvo aquilo que parecia impossível: sorrir, comer, viver sem medo. 
              Queres descobrir se és o próximo?
            </p>
            
            <Button 
              variant="premium" 
              size="xl"
              className="font-sans font-medium tracking-wide text-sm md:text-base"
              onClick={() => document.getElementById('evaluation-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🔘 Quero a minha avaliação online gratuita
            </Button>
          </div>

          {/* Right side - Form */}
          <div className="lg:col-span-2" id="evaluation-form">
            <EvaluationForm 
              interesse="Implantes com Wellen Novato"
              webhookUrl="https://n8n.automacoesareluna.pt/webhook/wellen-lp-implantes"
              description="Descobre se és candidato aos implantes dentários"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
      
      {/* Subtle gradient borders */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-gold opacity-60" />
    </section>
  );
};

export default HeroWellen;