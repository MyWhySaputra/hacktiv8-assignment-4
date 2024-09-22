const API_KEY = import.meta.env.VITE_API_KEY;
const CURRENCY = `CAD,IDR,JPY,CHF,EUR,GBP`;
const API_URL = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${API_KEY}&symbols=${CURRENCY}`;

export const getExchangeRates = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.rates;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    return null;
  }
};
