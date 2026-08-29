
const WHATSAPP_NUMBER = "6285162651533";

const DEFAULT_MESSAGE = `Halo ILYON Academy 👋

Saya ingin mendapatkan informasi tentang les di ILYON Academy.`;

export const openWhatsApp = (message = DEFAULT_MESSAGE) => {
  const encodedMessage = encodeURIComponent(String(message));

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
    "_blank"
  );
};
