import { useEffect, useState } from "react";
import { getExchangeRates } from "../../api/getRates";
import TableHeader from "../atoms/TableHeader";
import TableRow from "../molecules/TableRow";

export default function ExchangeRateTable() {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const currency = ["CAD", "IDR", "JPY", "CHF", "EUR", "GBP"];

  useEffect(() => {
    const fetchRates = async () => {
      const fetchedRates = await getExchangeRates();
      setRates(fetchedRates);
      setLoading(false);
    };
    fetchRates();
  }, []);

  const calculateBuyPrice = (rate) => (parseFloat(rate) * 1.02).toFixed(4);
  const calculateSellPrice = (rate) => (parseFloat(rate) * 0.98).toFixed(4);

  if (loading) {
    return (
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-white"></div>
    );
  }

  return (
    <table className="min-w-[50%] divide-y-2 divide-[#9DB2BF] bg-[#526D82] text-sm md:text-lg rounded-lg">
      <TableHeader />
      <tbody className="divide-y divide-[#9DB2BF] text-center">
        {currency.map((index) => (
          <TableRow
            key={index}
            currency={index}
            buyRate={calculateBuyPrice(rates[index])}
            exchangeRate={parseFloat(rates[index]).toFixed(4)}
            sellRate={calculateSellPrice(rates[index])}
          />
        ))}
      </tbody>
    </table>
  );
}
