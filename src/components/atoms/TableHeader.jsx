export default function TableHeader() {
  return (
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-[#FFF]"></th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-[#FFF] uppercase">
          We Buy
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-[#FFF] uppercase">
          Exchange Rate
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-[#FFF] uppercase">
          We Sell
        </th>
      </tr>
    </thead>
  );
}
