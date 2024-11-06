import React from "react";
import { HandleWhatsClick } from "../../utils/whatssap";

export const FloatingWhatsAppButton = () => {
  return (
    <a
       href="https://api.whatsapp.com/send?phone=+1234567890"
        onClick={() => HandleWhatsClick({
        phoneNumber: '+551190000000',
        message: 'Olá, gostaria de mais informações.'
      })}
      className="whatsapp-float"
    >
      <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp" />
    </a>
  );
};
