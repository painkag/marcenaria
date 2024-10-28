export function HandleWhatsClick({ phoneNumber, message }) {
  // Chama a função de rastreamento de conversão
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}
