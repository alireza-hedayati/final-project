import * as yup from "yup";

const checkoutSchema = yup.object().shape({
  fullName: yup
    .string("")
    .nullable()
    .transform((value) => (value === "" ? null : value))
    .min(8, "حداقل 8 کاراکتر باید وارد کنید").required,
  nationalCode: yup
    .string()
    .nullable()
    .transform((value) => (value === "" ? null : value)).required,
  gender: yup
    .string()
    .nullable()
    .transform((value) => (value === "" ? null : value))
    .oneOf(["مرد", "زن"], "لطفا جنسیت را انتخاب کنید").required,
  birthDate: yup
    .date()
    .nullable()
    .typeError("تاریخ معتبر نیست")
    .max(new Date(), "تاریخ تولد نمیتواند در آینده باشد").required,
});

export default checkoutSchema;
