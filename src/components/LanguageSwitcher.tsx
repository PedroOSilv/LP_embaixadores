import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <motion.div
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Current Language Button */}
        <motion.button
          className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Globe className="w-4 h-4" />
          <span className="text-2xl">{currentLanguage.flag}</span>
          <span className="font-medium text-sm hidden sm:inline">{currentLanguage.name}</span>
        </motion.button>

        {/* Language Dropdown */}
        <motion.div
          className="absolute top-full right-0 mt-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl min-w-[160px]"
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -10,
            scale: isOpen ? 1 : 0.95,
            pointerEvents: isOpen ? "auto" : "none",
          }}
          transition={{ duration: 0.2 }}
        >
          {languages.map((lang) => (
            <motion.button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 transition-colors ${
                lang.code === i18n.language ? "bg-white/5" : ""
              }`}
              whileHover={{ x: 4 }}
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className="text-white font-medium text-sm">{lang.name}</span>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LanguageSwitcher;
