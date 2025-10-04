function toPersianDigits(str) {
  if (typeof str !== "string") str = String(str); 
  return str.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}
export { toPersianDigits };
