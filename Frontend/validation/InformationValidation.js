




import * as yup from "yup";

const informationSchema = yup.object().shape({
  fullName: yup
    .string("")
    .nullable()
    .transform((value) => (value === "" ? null : value))
    .min(8, "حداقل 8 کاراکتر باید وارد کنید")
    .optional(),
  nationalCode: yup
    .string()
    .nullable()
    .transform((value) => (value === "" ? null : value))
    .optional(),
  gender: yup
    .string()
    .nullable()
    .transform((value) => (value === "" ? null : value))
    .oneOf(["مرد", "زن"], "لطفا جنسیت را انتخاب کنید")
    .optional(),
  birthDate: yup
    .date()
    .nullable()
    .typeError("تاریخ معتبر نیست")
    .max(new Date(), "تاریخ تولد نمیتواند در آینده باشد")
    .optional(),
});

export default informationSchema;
