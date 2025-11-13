import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const EmbaixadoresHero = () => {
  const { t } = useTranslation();
  const mousePosition = useMousePosition();
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  // Parallax effect based on mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  const parallaxX = useTransform(smoothMouseX, [0, windowSize.width], [-20, 20]);
  const parallaxY = useTransform(smoothMouseY, [0, windowSize.height], [-20, 20]);

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
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute w-[120%] h-[120%] -left-[10%] -top-[10%]"
          style={{
            x: parallaxX,
            y: parallaxY,
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
            style={{
              backgroundImage: 'url(/lovable-uploads/c3666a59-2f87-4c93-a341-911c9b6c6777.png)',
              filter: 'brightness(0.3) blur(8px)',
            }}
          />
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#D4AF37]/5" />
      </div>

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

      {/* Geometric Shapes with Parallax - Hidden on mobile */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 border border-[#D4AF37]/20 rounded-full hidden sm:block"
        style={{
          x: useTransform(smoothMouseX, [0, windowSize.width], [-30, 30]),
          y: useTransform(smoothMouseY, [0, windowSize.height], [-30, 30]),
          rotate: useTransform(smoothMouseX, [0, windowSize.width], [-10, 10]),
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
        className="absolute bottom-20 right-10 w-40 h-40 md:w-80 md:h-80 border border-[#D4AF37]/20 rounded-full hidden sm:block"
        style={{
          x: useTransform(smoothMouseX, [0, windowSize.width], [30, -30]),
          y: useTransform(smoothMouseY, [0, windowSize.height], [30, -30]),
          rotate: useTransform(smoothMouseX, [0, windowSize.width], [10, -10]),
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

      {/* Glowing Orbs - Adjusted for mobile */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-full blur-3xl"
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
        className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"
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
      <div className="container mx-auto px-4 py-16 sm:py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 sm:mb-6"
          >
            <motion.span
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm sm:text-base font-medium text-[#D4AF37] tracking-wide shadow-2xl flex items-center gap-2"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              {t('hero.badge')}
            </motion.span>
          </motion.div>

          {/* Main Heading with 3D Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-vivant-black text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-4"
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
              {t('hero.title1')}
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
              {t('hero.title2')}
            </motion.span>
          </motion.h1>

          {/* Subtitle - Discrete */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-slate-300/80 mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-3 sm:px-4"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Button with Advanced Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                onClick={scrollToForm}
                size="lg"
                className="relative bg-gradient-to-r from-[#D4AF37] via-[#F4E5B5] to-[#D4AF37] hover:from-[#F4E5B5] hover:via-[#D4AF37] hover:to-[#F4E5B5] text-slate-900 px-7 sm:px-10 py-6 sm:py-7 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-all duration-500 group overflow-hidden font-semibold"
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
                <span className="relative z-10 flex items-center text-base sm:text-lg">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Impact Message with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 sm:mt-16 px-4"
          >
            <motion.div
              className="inline-block"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/30 to-[#D4AF37]/20 backdrop-blur-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-[#D4AF37]/50 shadow-lg shadow-[#D4AF37]/20 hover:border-[#D4AF37]/80 hover:shadow-[#D4AF37]/40 transition-all duration-300">
                <motion.p
                  className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#F4E5B5] via-[#D4AF37] to-[#F4E5B5] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: '200% auto',
                  }}
                >
                  {t('hero.impactMessage')}
                </motion.p>
              </div>
            </motion.div>
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
