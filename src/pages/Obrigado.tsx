import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowLeft, Phone, Calendar } from "lucide-react";

// Declaração de tipo para o Meta Pixel
declare global {
  interface Window {
    fbq: (action: string, event: string, params?: any) => void;
  }
}

const Obrigado = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Dispara evento de conversão Lead do Meta Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead');
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl mx-auto bg-white/95 backdrop-blur-md border-2 border-primary/30 shadow-2xl shadow-gold/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5" />
        
        <div className="relative p-8 md:p-12 text-center space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Thank You Message */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-gold to-primary bg-clip-text text-transparent">
              Obrigado!
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">
              A sua inscrição foi recebida com sucesso
            </h2>
            <p className="text-lg text-foreground/80 max-w-lg mx-auto leading-relaxed">
              Recebemos os seus dados e entraremos em contacto consigo nas próximas horas para agendar a sua 
              <span className="font-semibold text-primary"> avaliação online gratuita</span>.
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-primary/5 to-gold/5 rounded-2xl p-6 space-y-4 border border-primary/10">
            <h3 className="text-xl font-semibold text-foreground flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Próximos Passos
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                  <div>
                    <p className="font-medium text-foreground">Contacto Telefónico</p>
                    <p className="text-sm text-foreground/70">Ligaremos nas próximas 2-4 horas</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                  <div>
                    <p className="font-medium text-foreground">Agendamento Online</p>
                    <p className="text-sm text-foreground/70">Marcamos a sua avaliação online gratuita</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                  <div>
                    <p className="font-medium text-foreground">Avaliação Personalizada</p>
                    <p className="text-sm text-foreground/70">Análise completa e plano de tratamento</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
                  <div>
                    <p className="font-medium text-foreground">Início do Tratamento</p>
                    <p className="text-sm text-foreground/70">Transformação do seu sorriso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white/80 rounded-xl p-6 border border-primary/20 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Precisa de falar connosco?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+351220135555" 
                className="flex items-center gap-2 text-primary hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">220 135 555</span>
              </a>
              <span className="hidden sm:block text-foreground/60">•</span>
              <span className="text-foreground/70 font-medium">
                Segunda a Sexta: 9h - 19h
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
            <Button 
              variant="default"
              onClick={() => navigate('/')}
              className="bg-primary text-white font-medium"
            >
              Página Inicial
            </Button>
          </div>

          {/* Footer Note */}
          <p className="text-sm text-foreground/60 leading-relaxed">
            Os seus dados estão seguros e serão utilizados apenas para contacto e avaliação médica, 
            conforme a nossa política de privacidade.
          </p>
        </div>
      </Card>
    </main>
  );
};

export default Obrigado;