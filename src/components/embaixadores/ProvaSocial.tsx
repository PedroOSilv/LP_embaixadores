import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, MapPin, Users, Award, Heart, Star } from "lucide-react";

const ProvaSocial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Users,
      number: "10.000+",
      label: "Vidas Transformadas",
      description: "Pacientes satisfeitos em toda Europa",
    },
    {
      icon: MapPin,
      number: "4",
      label: "Países",
      description: "Portugal, Suíça, França, Luxemburgo",
    },
    {
      icon: Award,
      number: "15+",
      label: "Anos de Experiência",
      description: "Excelência em estética integrada",
    },
    {
      icon: Heart,
      number: "98%",
      label: "Satisfação",
      description: "Índice de recomendação dos pacientes",
    },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Embaixadora desde 2023",
      text: "Fazer parte da família Areluna mudou minha perspectiva. Não apenas indico tratamentos, mas compartilho transformações reais.",
      image: "MS",
    },
    {
      name: "João Santos",
      role: "Embaixador desde 2022",
      text: "A experiência de ver pessoas recuperando sua autoestima através das indicações que faço é incomparável. O suporte é excepcional.",
      image: "JS",
    },
    {
      name: "Ana Costa",
      role: "Embaixadora desde 2024",
      text: "O programa de embaixadores é muito mais do que benefícios financeiros. É fazer parte de uma missão que transforma vidas.",
      image: "AC",
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(212,175,55,0.1)_0%,transparent_50%)]"></div>

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
              Nossa Comunidade
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-vivant-black text-white mb-6">
              Uma família em crescimento
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Já somos uma comunidade de profissionais, pacientes e influenciadores
              que acreditam na transformação através da estética com propósito.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div className="text-4xl font-vivant-black text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-medium text-[#D4AF37] mb-2">
                    {stat.label}
                  </div>
                  <p className="text-sm text-slate-400">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-vivant-medium text-white text-center mb-12">
              Histórias de <span className="text-[#D4AF37]">Embaixadores</span>
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-300">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-slate-300 mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B4941F] rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {testimonial.image}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-medium">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-slate-400">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Proof Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4 hover:bg-white/10 transition-all duration-300">
              <Instagram className="w-6 h-6 text-[#D4AF37]" />
              <div className="text-left">
                <div className="text-white font-medium">
                  Siga-nos no Instagram
                </div>
                <a
                  href="https://instagram.com/institutoareluna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] text-sm hover:underline"
                >
                  @institutoareluna
                </a>
              </div>
            </div>

            <p className="text-slate-400 mt-8 max-w-2xl mx-auto">
              Presente em Portugal, Suíça, França e Luxemburgo, o Instituto Areluna
              é reconhecido pela excelência em estética integrada e pelos resultados
              que transformam vidas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProvaSocial;
