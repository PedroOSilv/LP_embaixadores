import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Heart, Award, Users } from "lucide-react";

const QuemSomos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Sparkles,
      title: "Implantes Dentários",
      description: "Técnicas avançadas para reabilitação oral completa com resultados naturais e duradouros.",
    },
    {
      icon: Heart,
      title: "Harmonização Facial",
      description: "Tratamentos personalizados que valorizam sua beleza natural com elegância e equilíbrio.",
    },
    {
      icon: Award,
      title: "Medicina Capilar",
      description: "Soluções inovadoras para tratamento e restauração capilar com tecnologia de ponta.",
    },
    {
      icon: Users,
      title: "Estética Corporal",
      description: "Procedimentos integrados que promovem bem-estar e autoestima com resultados visíveis.",
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#D4AF37]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-slate-100 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#D4AF37] font-medium tracking-wider text-sm uppercase mb-4 block">
              Excelência Europeia
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-vivant-black text-slate-900 mb-6">
              Quem Somos
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              O Instituto Areluna é uma referência europeia em estética integrada, unindo
              saúde oral, cirurgia plástica, dermatologia e medicina capilar em um só lugar.
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 shadow-xl mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-vivant-medium text-slate-900 mb-6">
                  Nossa Visão
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Acreditamos que a verdadeira beleza nasce da integração entre saúde,
                  bem-estar e autoestima. Por isso, desenvolvemos tratamentos personalizados
                  que respeitam a individualidade de cada paciente.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Com presença em <strong>Portugal, Suíça, França e Luxemburgo</strong>,
                  nossa missão é democratizar o acesso à estética de excelência, oferecendo
                  resultados naturais e duradouros.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Cada tratamento é uma jornada única, guiada por profissionais altamente
                  qualificados e tecnologia de última geração.
                </p>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-slate-200/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl md:text-7xl font-vivant-black text-[#D4AF37] mb-4">
                      4+
                    </div>
                    <p className="text-xl text-slate-700 font-medium">
                      Países
                    </p>
                    <p className="text-slate-600 mt-4">
                      Uma rede europeia de excelência em estética integrada
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Specialties Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white border border-slate-200 rounded-2xl p-6 h-full hover:shadow-lg hover:border-[#D4AF37]/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-xl font-vivant-medium text-slate-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-xl md:text-2xl font-vivant-light text-slate-700 italic max-w-4xl mx-auto">
              "No Instituto Areluna, cada sorriso conta uma história de transformação.
              Somos mais que uma clínica — somos parceiros na sua jornada de autoconfiança."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
