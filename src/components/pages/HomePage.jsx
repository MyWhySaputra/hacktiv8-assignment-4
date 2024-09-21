import ExchangeRateTable from "../organisms/ExchangeRateTable";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#27374D]">
      <h1 className="text-2xl md:text-4xl  font-bold text-[#DDE6ED] mb-10">
        Currency Exchange Rates
      </h1>
      <ExchangeRateTable />
    </div>
  );
}