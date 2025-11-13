import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useEffect, useState } from "react";

const EmbaixadoresHero = () => {
  const mousePosition = useMousePosition();
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  // Parallax effect based on mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const parallaxX = useTransform(smoothMouseX, [0, window.innerWidth], [-50, 50]);
  const parallaxY = useTransform(smoothMouseY, [0, window.innerHeight], [-50, 50]);

  useEffect(() => {
    mouseX.set(mousePosition.x);
    mouseY.set(mousePosition.y);
  }, [mousePosition.x, mousePosition.y, mouseX, mouseY]);

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('formulario-embaixadores');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Clinic Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          x: parallaxX,
          y: parallaxY,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lovable-uploads/c3666a59-2f87-4c93-a341-911c9b6c6777.png)',
            filter: 'brightness(0.3) blur(8px)',
            transform: 'scale(1.2)',
          }}
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#D4AF37]/5" />
      </motion.div>

      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.3)_0%,transparent_50%)]" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(212,175,55,0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, rgba(212,175,55,0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 60%, rgba(212,175,55,0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 30%, rgba(212,175,55,0.2) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 8 + particle.delay,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Geometric Shapes with Parallax */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 border border-[#D4AF37]/20 rounded-full"
        style={{
          x: useTransform(smoothMouseX, [0, window.innerWidth], [-30, 30]),
          y: useTransform(smoothMouseY, [0, window.innerHeight], [-30, 30]),
          rotate: useTransform(smoothMouseX, [0, window.innerWidth], [-10, 10]),
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 border border-[#D4AF37]/20 rounded-full"
        style={{
          x: useTransform(smoothMouseX, [0, window.innerWidth], [30, -30]),
          y: useTransform(smoothMouseY, [0, window.innerHeight], [30, -30]),
          rotate: useTransform(smoothMouseX, [0, window.innerWidth], [10, -10]),
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <motion.span
              className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-medium text-[#D4AF37] tracking-wide shadow-2xl flex items-center gap-2"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Sparkles className="w-4 h-4" />
              Programa Exclusivo
            </motion.span>
          </motion.div>

          {/* Main Heading with 3D Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-vivant-black text-white mb-6 leading-tight"
            style={{
              textShadow: '0 0 40px rgba(212,175,55,0.3), 0 0 80px rgba(212,175,55,0.2)',
            }}
          >
            <motion.span
              animate={{
                textShadow: [
                  '0 0 40px rgba(212,175,55,0.3)',
                  '0 0 60px rgba(212,175,55,0.5)',
                  '0 0 40px rgba(212,175,55,0.3)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Transforme beleza
            </motion.span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-[#D4AF37] via-[#F4E5B5] to-[#D4AF37] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: '200% auto',
              }}
            >
              em propósito
            </motion.span>
          </motion.h1>

          {/* Subtitle with Glassmorphism */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto font-light leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10"
          >
            Junte-se à nossa comunidade de embaixadores e represente a excelência
            em estética integrada. Uma oportunidade única de fazer parte de algo maior.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            O Instituto Areluna é referência europeia em tratamentos estéticos personalizados.
            Agora, convidamos você a fazer parte da nossa história e compartilhar nossa visão
            de beleza com propósito.
          </motion.p>

          {/* CTA Button with Advanced Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                onClick={scrollToForm}
                size="lg"
                className="relative bg-gradient-to-r from-[#D4AF37] via-[#F4E5B5] to-[#D4AF37] hover:from-[#F4E5B5] hover:via-[#D4AF37] hover:to-[#F4E5B5] text-slate-900 px-10 py-7 text-lg rounded-full shadow-2xl hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-all duration-500 group overflow-hidden font-semibold"
                style={{
                  backgroundSize: '200% auto',
                }}
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <span className="relative z-10 flex items-center">
                  Quero ser Embaixador(a) Areluna
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators with Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-300"
          >
            {['Portugal', 'Suíça', 'França', 'Luxemburgo'].map((country, index) => (
              <motion.div
                key={country}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(212,175,55,0.1)" }}
              >
                <motion.div
                  className="w-2 h-2 bg-[#D4AF37] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
                <span>{country}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator with Enhanced Animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-8 h-12 border-2 border-[#D4AF37]/50 rounded-full flex justify-center backdrop-blur-sm bg-white/5"
          whileHover={{ scale: 1.2, borderColor: "rgba(212,175,55,0.8)" }}
        >
          <motion.div
            className="w-2 h-4 bg-gradient-to-b from-[#D4AF37] to-transparent rounded-full mt-2"
            animate={{
              y: [0, 16, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EmbaixadoresHero;
