import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const FormularioEmbaixador = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    cidadePais: "",
    comoConheceu: "",
    motivacao: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://n8n.automacoesareluna.pt/webhook/lp-embaixadores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Form submitted successfully:", responseData);

      setIsSubmitting(false);
      setIsSuccess(true);

      toast({
        title: t('form.successTitle'),
        description: t('form.successMessage'),
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          nome: "",
          email: "",
          whatsapp: "",
          cidadePais: "",
          comoConheceu: "",
          motivacao: "",
        });
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      console.error("Error submitting form:", error);
      
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar o formulário. Tente novamente ou contacte-nos.",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      id="formulario-embaixadores"
      ref={ref}
      className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-slate-200/50 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            {/* Left Column - Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-24"
            >
              <span className="text-[#D4AF37] font-medium tracking-wider text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">
                {t('form.badge')}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-vivant-black text-slate-900 mb-4 sm:mb-6">
                {t('form.title1')}
                <br />
                <span className="text-[#D4AF37]">{t('form.title2')}</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                {t('form.subtitle')}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {['feature1', 'feature2', 'feature3', 'feature4'].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#D4AF37]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700">{t(`form.features.${feature}`)}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl border border-slate-100">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Nome Completo */}
                    <div className="space-y-1.5">
                      <Label htmlFor="nome" className="text-xs sm:text-sm text-slate-700 font-medium">
                        {t('form.fields.fullName')} *
                      </Label>
                      <Input
                        id="nome"
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) => handleInputChange("nome", e.target.value)}
                        placeholder={t('form.fields.fullNamePlaceholder')}
                        className="h-10 sm:h-12 rounded-xl border-slate-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-xs sm:text-sm text-slate-700 font-medium">
                        {t('form.fields.email')} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder={t('form.fields.emailPlaceholder')}
                        className="h-10 sm:h-12 rounded-xl border-slate-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] text-sm"
                      />
                    </div>

                    {/* WhatsApp */}
                    <div className="space-y-1.5">
                      <Label htmlFor="whatsapp" className="text-xs sm:text-sm text-slate-700 font-medium">
                        {t('form.fields.whatsapp')} *
                      </Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                        placeholder={t('form.fields.whatsappPlaceholder')}
                        className="h-10 sm:h-12 rounded-xl border-slate-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] text-sm"
                      />
                    </div>

                    {/* Cidade/País */}
                    <div className="space-y-1.5">
                      <Label htmlFor="cidadePais" className="text-xs sm:text-sm text-slate-700 font-medium">
                        {t('form.fields.location')} *
                      </Label>
                      <Input
                        id="cidadePais"
                        type="text"
                        required
                        value={formData.cidadePais}
                        onChange={(e) => handleInputChange("cidadePais", e.target.value)}
                        placeholder={t('form.fields.locationPlaceholder')}
                        className="h-10 sm:h-12 rounded-xl border-slate-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] text-sm"
                      />
                    </div>

                    {/* Como nos conheceu */}
                    <div className="space-y-1.5">
                      <Label htmlFor="comoConheceu" className="text-xs sm:text-sm text-slate-700 font-medium">
                        {t('form.fields.howFound')} *
                      </Label>
                      <Select
                        value={formData.comoConheceu}
                        onValueChange={(value) => handleInputChange("comoConheceu", value)}
                        required
                      >
                        <SelectTrigger className="h-10 sm:h-12 rounded-xl border-slate-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] text-sm">
                          <SelectValue placeholder={t('form.fields.howFoundPlaceholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="instagram">{t('form.fields.howFoundOptions.instagram')}</SelectItem>
                          <SelectItem value="facebook">{t('form.fields.howFoundOptions.facebook')}</SelectItem>
                          <SelectItem value="google">{t('form.fields.howFoundOptions.google')}</SelectItem>
                          <SelectItem value="indicacao">{t('form.fields.howFoundOptions.referral')}</SelectItem>
                          <SelectItem value="paciente">{t('form.fields.howFoundOptions.patient')}</SelectItem>
                          <SelectItem value="outro">{t('form.fields.howFoundOptions.other')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Motivação */}
                    <div className="space-y-1.5">
                      <Label htmlFor="motivacao" className="text-xs sm:text-sm text-slate-700 font-medium">
                        {t('form.fields.motivation')}
                      </Label>
                      <Textarea
                        id="motivacao"
                        value={formData.motivacao}
                        onChange={(e) => handleInputChange("motivacao", e.target.value)}
                        placeholder={t('form.fields.motivationPlaceholder')}
                        className="min-h-[100px] sm:min-h-[120px] rounded-xl border-slate-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] resize-none text-sm"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-11 sm:h-12 bg-gradient-to-r from-[#D4AF37] to-[#B4941F] hover:from-[#B4941F] hover:to-[#947520] text-white rounded-xl text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                          {t('form.submitting')}
                        </>
                      ) : (
                        <>
                          {t('form.submit')}
                          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-slate-500 text-center">
                      {t('form.privacy')}
                    </p>
                  </form>
                ) : (
                  <div className="py-8 sm:py-12 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                    >
                      <Check className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                    </motion.div>
                    <h3 className="text-lg sm:text-2xl font-vivant-medium text-slate-900 mb-2 sm:mb-3">
                      {t('form.successTitle')}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {t('form.successMessage')}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormularioEmbaixador;
