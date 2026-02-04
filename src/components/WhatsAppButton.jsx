import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = "18095374712";
    const message = "Hola 👋 Gracias por contactar a Constructora General Solution. ¿En qué podemos ayudarte hoy?";

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="whatsapp-float pulse-animation"
            onClick={handleClick}
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} />
            <span className="whatsapp-tooltip">¡Hablemos!</span>
        </motion.button>
    );
};

export default WhatsAppButton;
