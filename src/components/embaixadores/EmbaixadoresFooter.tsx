import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const EmbaixadoresFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05)_0%,transparent_50%)]"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-vivant-black text-[#D4AF37] mb-4">
                Instituto Areluna
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Referência europeia em estética integrada. Transformando vidas através
                da beleza com propósito desde 2009.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/institutoareluna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <Instagram className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="mailto:embaixadores@institutoareluna.com"
                  className="w-10 h-10 bg-white/5 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <Mail className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-vivant-medium mb-6">Contato</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 text-slate-400">
                  <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div>
                    <p>+351 123 456 789</p>
                    <p className="text-xs">Segunda a Sexta, 9h - 18h</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div>
                    <p>embaixadores@institutoareluna.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div>
                    <p>Porto, Portugal</p>
                    <p className="text-xs">+ Suíça, França, Luxemburgo</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Program Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-vivant-medium mb-6">
                Programa de Embaixadores
              </h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    Termos do Programa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 my-8"></div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500"
          >
            <p>
              © {currentYear} Instituto Areluna. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Cookies
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default EmbaixadoresFooter;
