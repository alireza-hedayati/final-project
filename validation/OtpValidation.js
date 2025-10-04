import * as yup from "yup";
import { toPersianDigits } from "@/utils/changeNum";

const otpValidationSchema = yup.object().shape({
  code: yup
    .string()
    .length(6, `کد باید ${toPersianDigits(6)} رقم باشد`)
    .required("پر کردن این بخش الزامی است")
    .matches(/^\d{6}$/, "عدد وارد کنید"),
});

export default otpValidationSchema;
