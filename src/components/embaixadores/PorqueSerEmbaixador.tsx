import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Crown, Gift, Target, Lightbulb, TrendingUp, Shield } from "lucide-react";

const PorqueSerEmbaixador = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Crown,
      title: "Reconhecimento Exclusivo",
      description: "Faça parte de um grupo seleto de embaixadores que representam a excelência em estética integrada.",
      color: "from-[#D4AF37] to-[#B4941F]",
    },
    {
      icon: Gift,
      title: "Recompensas Especiais",
      description: "Receba benefícios exclusivos, descontos em tratamentos e bonificações por cada indicação bem-sucedida.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Target,
      title: "Acesso à Plataforma",
      description: "Tenha acesso a uma plataforma exclusiva para acompanhar suas indicações e benefícios em tempo real.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Lightbulb,
      title: "Propósito e Impacto",
      description: "Ajude pessoas a transformarem suas vidas através de tratamentos que aumentam autoestima e bem-estar.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: TrendingUp,
      title: "Crescimento Conjunto",
      description: "Cresça conosco e faça parte da expansão da marca mais prestigiada em estética integrada da Europa.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Shield,
      title: "Suporte Dedicado",
      description: "Conte com uma equipe dedicada para apoiar você em todas as etapas do programa de embaixadores.",
      color: "from-rose-500 to-rose-600",
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-[#D4AF37] font-medium tracking-wider text-sm uppercase mb-4 block">
              Benefícios Exclusivos
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-vivant-black text-slate-900 mb-6">
              Por que ser
              <br />
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#B4941F] bg-clip-text text-transparent">
                Embaixador(a) Areluna
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Esta não é apenas uma oportunidade de indicação. É um convite para fazer parte
              de uma missão maior: transformar vidas através da beleza com propósito.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-[#D4AF37]/30 overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/5 group-hover:to-transparent transition-all duration-500"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-vivant-medium text-slate-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1)_0%,transparent_50%)]"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-vivant-black text-white mb-6">
                Mais que indicações,
                <br />
                <span className="text-[#D4AF37]">uma comunidade de propósito</span>
              </h3>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
                Como Embaixador(a) Areluna, você não apenas indica — você inspira transformações.
                Cada cliente que você apresenta é uma vida que pode ser tocada pela nossa missão
                de beleza integrada e bem-estar completo.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PorqueSerEmbaixador;
