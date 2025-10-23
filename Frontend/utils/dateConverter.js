import moment from "moment-jalaali";

export const toISODate = (dateObject) => {
  if (!dateObject) return null;
  const { year, month, day } = dateObject;
  const m = moment.j([year, month - 1, day]);
  if (!m.isValid()) return null;
  return m.toISOString(true);
};
