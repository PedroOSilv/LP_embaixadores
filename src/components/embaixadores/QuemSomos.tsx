import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Heart, Award, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const QuemSomos = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Sparkles,
      key: "dental",
    },
    {
      icon: Heart,
      key: "facial",
    },
    {
      icon: Award,
      key: "hair",
    },
    {
      icon: Users,
      key: "body",
    },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-bl from-[#D4AF37]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-slate-100 to-transparent rounded-full blur-3xl"></div>

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
              {t('about.badge')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-vivant-black text-slate-900 mb-4 sm:mb-6 px-2">
              {t('about.title')}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-3">
              {t('about.subtitle')}
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 shadow-xl mb-12 sm:mb-16 mx-2"
          >
            <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-vivant-medium text-slate-900 mb-3 sm:mb-4">
                  {t('about.visionTitle')}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
                  {t('about.visionText1')}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
                  {t('about.visionText2')}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                  {t('about.visionText3')}
                </p>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-slate-200/50 flex items-center justify-center">
                  <div className="text-center p-4 sm:p-6">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-vivant-black text-[#D4AF37] mb-2 sm:mb-3">
                      4+
                    </div>
                    <p className="text-base sm:text-lg text-slate-700 font-medium">
                      {t('about.countriesLabel')}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 sm:mt-3">
                      {t('about.countriesDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 px-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 h-full hover:shadow-lg hover:border-[#D4AF37]/30 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-base sm:text-lg font-vivant-medium text-slate-900 mb-1 sm:mb-2">
                    {t(`about.specialties.${feature.key}.title`)}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {t(`about.specialties.${feature.key}.description`)}
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
            className="mt-10 sm:mt-14 text-center px-3"
          >
            <p className="text-base sm:text-lg md:text-xl font-vivant-light text-slate-700 italic max-w-4xl mx-auto">
              {t('about.quote')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
