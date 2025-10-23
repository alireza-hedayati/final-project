import dayjs from "dayjs";
import jalaliday from 'jalaliday';

dayjs.extend(jalaliday);


export function formatJalaliDate(dateString) {
  const d = dayjs(dateString, { jalali: true }).calendar("jalali").locale("fa");

  return d.format("dddd D MMMM YYYY");
}
