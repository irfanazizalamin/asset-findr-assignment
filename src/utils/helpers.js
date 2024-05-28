const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const formatPrice = (price) => {
  return (price || "").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const formatDate = (date) => {
  const d = new Date(date);
  const month = d.toLocaleString("default", { month: "short" });
  return `${d.getDate()} ${month} ${d.getFullYear()}`;
};

export { wait, formatPrice, formatDate };
