import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const ProvaSocial = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const locations = ["portugal", "switzerland", "france", "luxembourg"];

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
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-[#D4AF37] font-medium tracking-wider text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">
              {t('community.badge')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-vivant-black text-white mb-4 sm:mb-6 px-2">
              {t('community.title')}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed px-3">
              {t('community.subtitle')}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16 px-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-vivant-black text-white mb-2 sm:mb-3">26+</div>
              <div className="text-base sm:text-lg text-[#D4AF37] font-medium mb-1">{t('community.stats.experience')}</div>
              <p className="text-slate-400 text-xs sm:text-sm">{t('community.stats.experienceDesc')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-vivant-black text-white mb-2 sm:mb-3">98%</div>
              <div className="text-base sm:text-lg text-[#D4AF37] font-medium mb-1">{t('community.stats.satisfaction')}</div>
              <p className="text-slate-400 text-xs sm:text-sm">{t('community.stats.satisfactionDesc')}</p>
            </motion.div>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16 px-2">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-3 sm:p-4 h-full hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 text-center">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-vivant-medium text-white">
                    {t(`hero.countries.${location}`)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Proof Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center px-3"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-6 py-2 sm:py-3 hover:bg-white/10 transition-all duration-300">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
              <div className="text-left">
                <div className="text-white font-medium text-xs sm:text-sm">
                  {t('community.instagram')}
                </div>
                <a
                  href="https://instagram.com/institutoareluna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] text-xs hover:underline"
                >
                  @institutoareluna
                </a>
              </div>
            </div>

            <p className="text-slate-400 mt-6 sm:mt-8 max-w-2xl mx-auto text-xs sm:text-sm px-2">
              {t('community.footerText')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProvaSocial;
