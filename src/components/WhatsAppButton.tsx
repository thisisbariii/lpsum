import { FaWhatsapp } from "react-icons/fa"; 

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918286194040" 
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
    >
      <FaWhatsapp className="w-6 h-6 text-white" />
    </a>
  );
};

export default WhatsAppButton;
