import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed top-6 right-6 z-50" ref={dropdownRef}>
      <div className="relative">
        {/* Current Language Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-full text-white hover:bg-slate-800/90 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Globe className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-2xl">{currentLanguage.flag}</span>
          <span className="font-medium text-sm hidden sm:inline">{currentLanguage.name}</span>
        </motion.button>

        {/* Language Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full right-0 mt-2 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl min-w-[160px]"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#D4AF37]/20 transition-colors ${
                    lang.code === i18n.language ? "bg-[#D4AF37]/10" : ""
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="text-white font-medium text-sm">{lang.name}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
