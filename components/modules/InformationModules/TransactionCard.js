import React from "react";
import { toPersianDigits } from "@/utils/changeNum";
import formatTransactionDate from "@/utils/formatTransactionDate";
function TransactionCard(props) {
  const { amount, createdAt, id } = props;
  return (
    <tr className="">
      <td className="w-32 px-4 text-[12px]  text-gray-500 text-center lg:w-38 lg:text-[14px]">
        {formatTransactionDate(createdAt)}
      </td>
      <td className="w-30 px-5 py-3 text-gray-700 text-center md:w-40">
        {toPersianDigits(amount.toLocaleString(3))}
      </td>
      <td className="hidden lg:block text-center py-2 text-gray-700">
        ثبت نام در تور گردشگری
      </td>
      <td className="w-30 px-5 py-2 text-gray-700 text-center md:w-40">
        {(id).slice(0, 8)}
      </td>
    </tr>
  );
}

export default TransactionCard;
