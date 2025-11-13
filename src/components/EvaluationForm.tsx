import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  countryCode: string;
  phone: string;
  email: string;
  consent: boolean;
}

interface EvaluationFormProps {
  interesse: string;
  webhookUrl: string;
  description: string;
}

const EvaluationForm = ({ interesse, webhookUrl, description }: EvaluationFormProps) => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      countryCode: "+351"
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const countryCode = watch("countryCode", "+351");

  const countries = [
    { code: "+351", country: "PT", flag: "🇵🇹", name: "Portugal" },
    { code: "+93", country: "AF", flag: "🇦🇫", name: "Afeganistão" },
    { code: "+355", country: "AL", flag: "🇦🇱", name: "Albânia" },
    { code: "+213", country: "DZ", flag: "🇩🇿", name: "Argélia" },
    { code: "+376", country: "AD", flag: "🇦🇩", name: "Andorra" },
    { code: "+244", country: "AO", flag: "🇦🇴", name: "Angola" },
    { code: "+54", country: "AR", flag: "🇦🇷", name: "Argentina" },
    { code: "+374", country: "AM", flag: "🇦🇲", name: "Arménia" },
    { code: "+61", country: "AU", flag: "🇦🇺", name: "Austrália" },
    { code: "+43", country: "AT", flag: "🇦🇹", name: "Áustria" },
    { code: "+994", country: "AZ", flag: "🇦🇿", name: "Azerbaijão" },
    { code: "+973", country: "BH", flag: "🇧🇭", name: "Bahrein" },
    { code: "+880", country: "BD", flag: "🇧🇩", name: "Bangladesh" },
    { code: "+375", country: "BY", flag: "🇧🇾", name: "Bielorrússia" },
    { code: "+32", country: "BE", flag: "🇧🇪", name: "Bélgica" },
    { code: "+501", country: "BZ", flag: "🇧🇿", name: "Belize" },
    { code: "+229", country: "BJ", flag: "🇧🇯", name: "Benin" },
    { code: "+591", country: "BO", flag: "🇧🇴", name: "Bolívia" },
    { code: "+387", country: "BA", flag: "🇧🇦", name: "Bósnia e Herzegovina" },
    { code: "+55", country: "BR", flag: "🇧🇷", name: "Brasil" },
    { code: "+359", country: "BG", flag: "🇧🇬", name: "Bulgária" },
    { code: "+226", country: "BF", flag: "🇧🇫", name: "Burkina Faso" },
    { code: "+855", country: "KH", flag: "🇰🇭", name: "Camboja" },
    { code: "+237", country: "CM", flag: "🇨🇲", name: "Camarões" },
    { code: "+1", country: "CA", flag: "🇨🇦", name: "Canadá" },
    { code: "+238", country: "CV", flag: "🇨🇻", name: "Cabo Verde" },
    { code: "+56", country: "CL", flag: "🇨🇱", name: "Chile" },
    { code: "+86", country: "CN", flag: "🇨🇳", name: "China" },
    { code: "+57", country: "CO", flag: "🇨🇴", name: "Colômbia" },
    { code: "+506", country: "CR", flag: "🇨🇷", name: "Costa Rica" },
    { code: "+385", country: "HR", flag: "🇭🇷", name: "Croácia" },
    { code: "+53", country: "CU", flag: "🇨🇺", name: "Cuba" },
    { code: "+357", country: "CY", flag: "🇨🇾", name: "Chipre" },
    { code: "+420", country: "CZ", flag: "🇨🇿", name: "República Checa" },
    { code: "+45", country: "DK", flag: "🇩🇰", name: "Dinamarca" },
    { code: "+593", country: "EC", flag: "🇪🇨", name: "Equador" },
    { code: "+20", country: "EG", flag: "🇪🇬", name: "Egito" },
    { code: "+503", country: "SV", flag: "🇸🇻", name: "El Salvador" },
    { code: "+372", country: "EE", flag: "🇪🇪", name: "Estónia" },
    { code: "+358", country: "FI", flag: "🇫🇮", name: "Finlândia" },
    { code: "+33", country: "FR", flag: "🇫🇷", name: "França" },
    { code: "+995", country: "GE", flag: "🇬🇪", name: "Geórgia" },
    { code: "+49", country: "DE", flag: "🇩🇪", name: "Alemanha" },
    { code: "+30", country: "GR", flag: "🇬🇷", name: "Grécia" },
    { code: "+502", country: "GT", flag: "🇬🇹", name: "Guatemala" },
    { code: "+504", country: "HN", flag: "🇭🇳", name: "Honduras" },
    { code: "+852", country: "HK", flag: "🇭🇰", name: "Hong Kong" },
    { code: "+36", country: "HU", flag: "🇭🇺", name: "Hungria" },
    { code: "+354", country: "IS", flag: "🇮🇸", name: "Islândia" },
    { code: "+91", country: "IN", flag: "🇮🇳", name: "Índia" },
    { code: "+62", country: "ID", flag: "🇮🇩", name: "Indonésia" },
    { code: "+98", country: "IR", flag: "🇮🇷", name: "Irão" },
    { code: "+964", country: "IQ", flag: "🇮🇶", name: "Iraque" },
    { code: "+353", country: "IE", flag: "🇮🇪", name: "Irlanda" },
    { code: "+972", country: "IL", flag: "🇮🇱", name: "Israel" },
    { code: "+39", country: "IT", flag: "🇮🇹", name: "Itália" },
    { code: "+81", country: "JP", flag: "🇯🇵", name: "Japão" },
    { code: "+962", country: "JO", flag: "🇯🇴", name: "Jordânia" },
    { code: "+7", country: "KZ", flag: "🇰🇿", name: "Cazaquistão" },
    { code: "+254", country: "KE", flag: "🇰🇪", name: "Quénia" },
    { code: "+82", country: "KR", flag: "🇰🇷", name: "Coreia do Sul" },
    { code: "+965", country: "KW", flag: "🇰🇼", name: "Kuwait" },
    { code: "+371", country: "LV", flag: "🇱🇻", name: "Letónia" },
    { code: "+961", country: "LB", flag: "🇱🇧", name: "Líbano" },
    { code: "+370", country: "LT", flag: "🇱🇹", name: "Lituânia" },
    { code: "+352", country: "LU", flag: "🇱🇺", name: "Luxemburgo" },
    { code: "+60", country: "MY", flag: "🇲🇾", name: "Malásia" },
    { code: "+356", country: "MT", flag: "🇲🇹", name: "Malta" },
    { code: "+52", country: "MX", flag: "🇲🇽", name: "México" },
    { code: "+373", country: "MD", flag: "🇲🇩", name: "Moldávia" },
    { code: "+377", country: "MC", flag: "🇲🇨", name: "Mónaco" },
    { code: "+258", country: "MZ", flag: "🇲🇿", name: "Moçambique" },
    { code: "+31", country: "NL", flag: "🇳🇱", name: "Países Baixos" },
    { code: "+64", country: "NZ", flag: "🇳🇿", name: "Nova Zelândia" },
    { code: "+505", country: "NI", flag: "🇳🇮", name: "Nicarágua" },
    { code: "+234", country: "NG", flag: "🇳🇬", name: "Nigéria" },
    { code: "+47", country: "NO", flag: "🇳🇴", name: "Noruega" },
    { code: "+968", country: "OM", flag: "🇴🇲", name: "Omã" },
    { code: "+92", country: "PK", flag: "🇵🇰", name: "Paquistão" },
    { code: "+507", country: "PA", flag: "🇵🇦", name: "Panamá" },
    { code: "+595", country: "PY", flag: "🇵🇾", name: "Paraguai" },
    { code: "+51", country: "PE", flag: "🇵🇪", name: "Peru" },
    { code: "+63", country: "PH", flag: "🇵🇭", name: "Filipinas" },
    { code: "+48", country: "PL", flag: "🇵🇱", name: "Polónia" },
    { code: "+974", country: "QA", flag: "🇶🇦", name: "Qatar" },
    { code: "+40", country: "RO", flag: "🇷🇴", name: "Roménia" },
    { code: "+7", country: "RU", flag: "🇷🇺", name: "Rússia" },
    { code: "+966", country: "SA", flag: "🇸🇦", name: "Arábia Saudita" },
    { code: "+381", country: "RS", flag: "🇷🇸", name: "Sérvia" },
    { code: "+65", country: "SG", flag: "🇸🇬", name: "Singapura" },
    { code: "+421", country: "SK", flag: "🇸🇰", name: "Eslováquia" },
    { code: "+386", country: "SI", flag: "🇸🇮", name: "Eslovénia" },
    { code: "+27", country: "ZA", flag: "🇿🇦", name: "África do Sul" },
    { code: "+34", country: "ES", flag: "🇪🇸", name: "Espanha" },
    { code: "+94", country: "LK", flag: "🇱🇰", name: "Sri Lanka" },
    { code: "+46", country: "SE", flag: "🇸🇪", name: "Suécia" },
    { code: "+41", country: "CH", flag: "🇨🇭", name: "Suíça" },
    { code: "+886", country: "TW", flag: "🇹🇼", name: "Taiwan" },
    { code: "+66", country: "TH", flag: "🇹🇭", name: "Tailândia" },
    { code: "+90", country: "TR", flag: "🇹🇷", name: "Turquia" },
    { code: "+380", country: "UA", flag: "🇺🇦", name: "Ucrânia" },
    { code: "+971", country: "AE", flag: "🇦🇪", name: "Emirados Árabes Unidos" },
    { code: "+44", country: "GB", flag: "🇬🇧", name: "Reino Unido" },
    { code: "+1", country: "US", flag: "🇺🇸", name: "Estados Unidos" },
    { code: "+598", country: "UY", flag: "🇺🇾", name: "Uruguai" },
    { code: "+58", country: "VE", flag: "🇻🇪", name: "Venezuela" },
    { code: "+84", country: "VN", flag: "🇻🇳", name: "Vietname" },
  ];

  // Function to send WhatsApp message for Open Week
  const sendWhatsAppMessage = (formData: FormData) => {
    if (interesse === "Rastreio Capilar - Open Week") {
      const message = `Quero me inscrever para o rastreio capilar gratuito\n\n` +
        `Nome: ${formData.name}\n` +
        `Telefone: ${formData.countryCode} ${formData.phone}\n` +
        `Email: ${formData.email}`;
      
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/351966939388?text=${encodedMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Disparar evento form_submit para tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        form_name: interesse,
        form_type: 'evaluation_form',
        event_category: 'form',
        event_label: interesse
      });
    }
    
    // Também disparar evento customizado para outros sistemas de tracking
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('form_submit', {
        detail: {
          form_name: interesse,
          form_type: 'evaluation_form',
          form_data: {
            name: data.name,
            phone: data.phone,
            email: data.email,
            interesse: interesse
          }
        }
      }));
    }
    
    try {
      // For Open Week, only send WhatsApp message (no webhook)
      if (interesse === "Rastreio Capilar - Open Week") {
        toast({
          title: "✅ Inscrição realizada com sucesso!",
          description: "Redirecionando...",
        });
        
        // Send WhatsApp message for Open Week
        sendWhatsAppMessage(data);
        
        // Reset form completely
        setValue("name", "");
        setValue("phone", "");
        setValue("email", "");
        setValue("consent", false);
        setValue("countryCode", "+351");

        // Redirect to thank you page
        setTimeout(() => {
          window.location.href = '/obrigado';
        }, 1500);
      } else {
        // For other forms, use webhook as before
        const webhookData = {
          name: data.name,
          countryCode: data.countryCode,
          phone: data.phone,
          email: data.email,
          consent: data.consent,
          interesse: interesse
        };

        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(webhookData),
        });

        if (response.ok) {
          toast({
            title: "✅ Inscrição realizada com sucesso!",
            description: "Redirecionando...",
          });
          
          // Reset form completely
          setValue("name", "");
          setValue("phone", "");
          setValue("email", "");
          setValue("consent", false);
          setValue("countryCode", "+351");

          // Redirect to scheduling page for Wellen or thank you page for others
          setTimeout(() => {
            if (interesse === "Implantes com Wellen Novato") {
              window.location.href = 'https://agenda.institutoareluna.pt/agenda/wellen-novato';
            } else {
              window.location.href = '/obrigado';
            }
          }, 1500);
        } else {
          throw new Error("Erro ao enviar dados");
        }
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde ou contacte-nos diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto bg-white/95 backdrop-blur-md border-2 border-primary/30 shadow-2xl shadow-gold/30 relative overflow-hidden" id="evaluation-form">
      {/* Decorative border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold"></div>
      
      <CardHeader className="text-center pb-6 pt-8">
        <div className="inline-block px-4 py-2 bg-gradient-gold text-white rounded-full text-sm font-medium mb-4">
          🎯 AVALIAÇÃO ESPECIALIZADA
        </div>
        <CardTitle className="text-2xl md:text-3xl font-vivant-medium text-foreground leading-tight">
          {interesse === "Rastreio Capilar - Open Week" ? "Rastreio Capilar" : 
           interesse === "Facetas" ? "Avaliação de Facetas" :
           interesse === "Implantes" ? "Avaliação de Implantes" :
           interesse === "Alinhadores" ? "Avaliação de Alinhadores" :
           interesse === "Implantes com Wellen Novato" ? "Consulta Especializada" :
           "Avaliação Especializada"}
        </CardTitle>
        <p className="text-muted-foreground mt-2">
          {description}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6 pb-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-foreground">Nome Completo</Label>
            <Input
              id="name"
              {...register("name", { required: "Nome é obrigatório" })}
              className="w-full"
              placeholder="Seu nome completo"
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-foreground">Telemóvel</Label>
            <div className="flex gap-2">
              <Select 
                value={countryCode} 
                onValueChange={(value) => setValue("countryCode", value)}
              >
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country, index) => (
                    <SelectItem key={`${country.code}-${country.country}-${index}`} value={country.code}>
                      <span className="flex items-center gap-2">
                        <span>{country.flag}</span>
                        <span>{country.code}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                id="phone"
                {...register("phone", { required: "Telemóvel é obrigatório" })}
                className="flex-1"
                placeholder="9XX XXX XXX"
              />
            </div>
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">E-mail</Label>
            <Input
              id="email"
              type="email"
              {...register("email", { 
                required: "E-mail é obrigatório",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "E-mail inválido"
                }
              })}
              className="w-full"
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          {/* RGPD Consent */}
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent"
                {...register("consent", { required: "Deve aceitar os termos para continuar" })}
                className="mt-1"
              />
              <div className="text-sm">
                <label htmlFor="consent" className="text-muted-foreground leading-relaxed cursor-pointer">
                  Concordo com o{" "}
                  <a href="#" className="text-primary hover:underline font-medium">
                    tratamento dos meus dados pessoais
                  </a>
                  {" "}para fins de contacto e avaliação médica, conforme a{" "}
                  <a href="#" className="text-primary hover:underline font-medium">
                    Política de Privacidade
                  </a>
                  . Posso revogar o consentimento a qualquer momento.
                </label>
                {errors.consent && (
                  <p className="text-sm text-destructive mt-1">{errors.consent.message}</p>
                )}
              </div>
            </div>
            

          </div>

          <Button 
            type="submit" 
            className="w-full h-12 text-base font-medium" 
            variant="premium"
            disabled={isSubmitting}
          >
            {isSubmitting ? "A enviar..." : "✨ Marcar Avaliação"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default EvaluationForm;