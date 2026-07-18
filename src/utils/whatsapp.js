export const WHATSAPP_NUMBER = STORE.contact.phone;

export const buildWaLink = (productName, lang = "id") => {
  const msg =
    lang === "id"
      ? `Halo Moobits, aku mau order ${productName} ya.`
      : `Hello Moobits, I would like to order ${productName}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};

export const buildGenericWa = (lang = "id") => {
  const msg =
    lang === "id"
      ? "Halo Moobits, aku mau order ya."
      : "Hello Moobits, I would like to order.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};