"use client"
// WhatsAppButton.js
import React from 'react';
import styles from "../styles/WhatsAppButton.module.scss";

const WhatsAppButton = () => {
  const phoneNumber = '+541138771146';
  const message = 'Hola, estoy interesado en tu producto/servicio. ¿Podemos hablar más al respecto?';

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button onClick={handleWhatsAppClick} className={styles.button}>
      <i className="ri-whatsapp-line"></i>
    </button>
  );
};

export default WhatsAppButton;

