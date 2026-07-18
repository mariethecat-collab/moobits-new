// Returns formatted invoice number based on a daily counter stored in localStorage.
export const generateInvoiceNumber = () => {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const dateKey = `${y}${m}${d}`;
  const counterKey = `moobits_invoice_counter_${dateKey}`;
  let n = 1;
  try {
    const stored = parseInt(localStorage.getItem(counterKey) || "0", 10);
    n = (isNaN(stored) ? 0 : stored) + 1;
    localStorage.setItem(counterKey, String(n));
  } catch (e) {
    n = 1;
  }
  return `MBT-${dateKey}-${String(n).padStart(3, "0")}`;
};
