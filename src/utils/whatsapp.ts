export const generateWhatsAppLink = (
  phoneNumber: string,
  message: string
): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
};

export const generateOrderMessage = (
  items: Array<{ name: string; price: number; quantity: number }>,
  total: number,
  customerName: string,
  type: 'restaurant' | 'bar' | 'laverie'
): string => {
  let message = `👋 Bonjour Complexe Bakassi!\n\n`;
  message += `📝 *Nouvelle commande - ${type.toUpperCase()}*\n\n`;
  message += `👤 Client: ${customerName}\n\n`;
  message += `📦 *Articles:*\n`;

  items.forEach((item, index) => {
    message += `${index + 1}. ${item.name} x${item.quantity} - ${formatPrice(item.price * item.quantity)}\n`;
  });

  message += `\n💰 *Total: ${formatPrice(total)}*\n\n`;
  message += `Merci de confirmer ma commande! 🙏`;

  return message;
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XAF',
    minimumFractionDigits: 0,
  }).format(price);
};
