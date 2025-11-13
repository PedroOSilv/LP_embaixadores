import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

interface WhatsAppFloatWellenProps {
  phoneNumber: string;
}

const WhatsAppFloatWellen = ({ phoneNumber }: WhatsAppFloatWellenProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre os implantes dentários da Wellen. Podem ajudar-me?"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="mb-4 bg-white rounded-lg shadow-lg p-4 max-w-sm animate-in slide-in-from-bottom-2">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">W</span>
              </div>
              <div>
                <h4 className="font-medium text-sm">Wellen Novato</h4>
                <p className="text-xs text-green-500">Online agora</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Olá! 👋 Sou a Wellen. Como posso ajudá-lo com os seus implantes dentários?
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 text-white text-sm py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
          >
            Iniciar conversa
          </button>
        </div>
      )}
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default WhatsAppFloatWellen;