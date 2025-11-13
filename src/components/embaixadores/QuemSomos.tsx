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
              {t('about.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-vivant-black text-slate-900 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('about.subtitle')}
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
                  {t('about.visionTitle')}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {t('about.visionText1')}
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {t('about.visionText2')}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {t('about.visionText3')}
                </p>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-slate-200/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl md:text-7xl font-vivant-black text-[#D4AF37] mb-4">
                      4+
                    </div>
                    <p className="text-xl text-slate-700 font-medium">
                      {t('about.countriesLabel')}
                    </p>
                    <p className="text-slate-600 mt-4">
                      {t('about.countriesDescription')}
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
                    {t(`about.specialties.${feature.key}.title`)}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
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
            className="mt-16 text-center"
          >
            <p className="text-xl md:text-2xl font-vivant-light text-slate-700 italic max-w-4xl mx-auto">
              {t('about.quote')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
