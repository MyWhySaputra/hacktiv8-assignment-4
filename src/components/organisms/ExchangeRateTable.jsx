import { useEffect, useState } from "react";
import { getExchangeRates } from "../../api/api";
import TableHeader from "../atoms/TableHeader";
import TableRow from "../molecules/TableRow";

export default function ExchangeRateTable() {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p>Loading...</p>;

  return (
    <table className="min-w-[50%] divide-y-2 divide-[#9DB2BF] bg-[#526D82] text-sm md:text-lg rounded-lg">
      <TableHeader />
      <tbody className="divide-y divide-[#9DB2BF] text-center">
        {["CAD", "IDR", "JPY", "CHF", "EUR", "GBP"].map((currency) => (
          <TableRow
            key={currency}
            currency={currency}
            buyRate={calculateBuyPrice(rates[currency])}
            exchangeRate={parseFloat(rates[currency]).toFixed(4)}
            sellRate={calculateSellPrice(rates[currency])}
          />
        ))}
      </tbody>
    </table>
  );
}
