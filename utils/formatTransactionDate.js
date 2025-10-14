import dayjs from "dayjs";
import jalaliday from "jalaliday";
import { toPersianDigits } from "./changeNum";
dayjs.extend(jalaliday);

export default function formatTransactionDate(dateString) {
  if (!dateString) return "";

  const date = dayjs(dateString).calendar("jalali").locale("fa");

  const time = date.format("HH:mm");
  const formattedDate = date.format("YYYY/MM/DD");
  return toPersianDigits(`${time} - ${formattedDate}`);
}
