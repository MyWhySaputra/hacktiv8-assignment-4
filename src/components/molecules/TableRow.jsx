/* eslint-disable react/prop-types */
export default function TableRow({
  currency,
  buyRate,
  exchangeRate,
  sellRate,
}) {
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-[#FFF]">
        {currency}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-[#DDE6ED]">{buyRate}</td>
      <td className="whitespace-nowrap px-4 py-2 text-[#DDE6ED]">
        {exchangeRate}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-[#DDE6ED]">{sellRate}</td>
    </tr>
  );
}
