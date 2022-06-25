export const formartMoney = (value) =>
  value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
