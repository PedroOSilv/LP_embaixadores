import { motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
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

  const Card3D = ({ benefit, index }: { benefit: typeof benefits[0]; index: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
    const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      mouseX.set(0);
      mouseY.set(0);
    };

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 60, rotateX: -15 }}
        animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1000,
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
        className="group relative"
      >
        <motion.div
          className="relative bg-gradient-to-br from-white via-white to-slate-50 rounded-3xl p-8 h-full border border-slate-200 overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{
            boxShadow: isHovered
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(212,175,55,0.3)"
              : "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(212,175,55,0.1) 0%, transparent 70%)`,
            }}
            animate={{
              scale: isHovered ? [1, 1.5, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut",
            }}
          />

          {/* Glowing Border Effect */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            animate={{
              boxShadow: isHovered
                ? `inset 0 0 20px rgba(212,175,55,0.2), 0 0 20px rgba(212,175,55,0.3)`
                : "inset 0 0 0px rgba(212,175,55,0)",
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Floating Particles */}
          {isHovered && (
            <>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: "50%",
                  }}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: [-20, -60],
                    x: [0, Math.random() * 40 - 20],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </>
          )}

          <div
            className="relative z-10"
            style={{
              transform: isHovered ? "translateZ(40px)" : "translateZ(0px)",
              transition: "transform 0.3s ease-out",
            }}
          >
            {/* Icon with 3D Effect */}
            <motion.div
              className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-3xl flex items-center justify-center mb-6 relative`}
              style={{
                transform: isHovered ? "translateZ(60px)" : "translateZ(20px)",
                transition: "transform 0.3s ease-out",
              }}
              animate={{
                rotate: isHovered ? [0, 5, -5, 0] : 0,
              }}
              transition={{
                duration: 0.5,
                repeat: isHovered ? Infinity : 0,
                repeatDelay: 1,
              }}
            >
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.1, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  repeat: isHovered ? Infinity : 0,
                }}
              >
                <benefit.icon className="w-10 h-10 text-white relative z-10" />
              </motion.div>

              {/* Icon Glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl blur-xl opacity-50"
                style={{
                  background: `linear-gradient(135deg, ${benefit.color})`,
                }}
                animate={{
                  scale: isHovered ? [1, 1.3, 1] : 1,
                  opacity: isHovered ? [0.5, 0.8, 0.5] : 0.5,
                }}
                transition={{
                  duration: 2,
                  repeat: isHovered ? Infinity : 0,
                }}
              />
            </motion.div>

            {/* Content */}
            <motion.h3
              className="text-2xl font-vivant-medium text-slate-900 mb-4"
              style={{
                transform: isHovered ? "translateZ(30px)" : "translateZ(10px)",
                transition: "transform 0.3s ease-out",
              }}
            >
              {benefit.title}
            </motion.h3>
            <motion.p
              className="text-slate-600 leading-relaxed"
              style={{
                transform: isHovered ? "translateZ(20px)" : "translateZ(5px)",
                transition: "transform 0.3s ease-out",
              }}
            >
              {benefit.description}
            </motion.p>
          </div>

          {/* Shine Effect on Hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%", skewX: -20 }}
            animate={{
              x: isHovered ? "200%" : "-100%",
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          />

          {/* Corner Accent */}
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-2xl"
            animate={{
              scale: isHovered ? [1, 1.5, 1] : 1,
              opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
            }}
          />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(212,175,55,0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(148,163,184,0.05) 0%, transparent 50%)",
          backgroundSize: "100% 100%",
        }}
      />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span
              className="text-[#D4AF37] font-medium tracking-wider text-sm uppercase mb-4 block"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Benefícios Exclusivos
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-vivant-black text-slate-900 mb-6"
              style={{
                textShadow: "0 0 40px rgba(212,175,55,0.1)",
              }}
            >
              Por que ser
              <br />
              <motion.span
                className="bg-gradient-to-r from-[#D4AF37] via-[#F4E5B5] to-[#D4AF37] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% auto",
                }}
              >
                Embaixador(a) Areluna
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Esta não é apenas uma oportunidade de indicação. É um convite para fazer parte
              de uma missão maior: transformar vidas através da beleza com propósito.
            </motion.p>
          </motion.div>

          {/* Benefits Grid with 3D Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card3D key={index} benefit={benefit} index={index} />
            ))}
          </div>

          {/* Call to Action Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
          >
            {/* Animated Background Pattern */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 30%, rgba(212,175,55,0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 70%, rgba(212,175,55,0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 30%, rgba(212,175,55,0.1) 0%, transparent 50%)",
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10">
              <motion.h3
                className="text-3xl md:text-4xl font-vivant-black text-white mb-6"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(212,175,55,0.3)",
                    "0 0 40px rgba(212,175,55,0.5)",
                    "0 0 20px rgba(212,175,55,0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Mais que indicações,
                <br />
                <span className="text-[#D4AF37]">uma comunidade de propósito</span>
              </motion.h3>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
                Como Embaixador(a) Areluna, você não apenas indica — você inspira transformações.
                Cada cliente que você apresenta é uma vida que pode ser tocada pela nossa missão
                de beleza integrada e bem-estar completo.
              </p>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-0 left-0 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                x: [0, 20, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                x: [0, -20, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PorqueSerEmbaixador;
