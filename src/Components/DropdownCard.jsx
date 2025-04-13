
const DropdownCard = () => (
    <div className="border rounded-lg p-4 shadow-sm w-full">
      <p className="font-semibold text-[#FE5F62]">General Health</p>
      <p className="text-sm text-gray-600 mb-1">Parameters: 5</p>
      <p className="text-sm text-gray-500">Routine Check-up | No Visible Illness</p>
      <p className="text-lg font-bold text-black mt-2">₹1999/-</p>
      <div className="flex gap-2 mt-2">
        <button className="bg-[#FE5F62] text-white px-3 py-1 rounded-md text-sm">Read More</button>
        <button className="bg-green-400 text-white px-3 py-1 rounded-md text-sm">Download App to Book</button>
      </div>
    </div>
  );

export default DropdownCard;
  