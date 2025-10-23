import { toPersianDigits } from "@/utils/changeNum";
import * as yup from "yup";

const bankInfoValidation = yup.object().shape({
  cardNumber: yup
    .string()

    .length(16, `شماره کارت باید دقیقاً ${toPersianDigits(16)} رقم باشد.`)
    .matches(/^[0-9]{16}$/, "شماره کارت فقط می‌تواند شامل ۱۶ رقم باشد.")
    .trim()
    .optional(),
  shebaNumber: yup
    .string()
    .length(26, "شماره شبا باید دقیقاً ۲۶ کاراکتر باشد.")
    .matches(
      /^IR[0-9]{24}$/,
      "شماره شبا باید با IR شروع شده و ۲۴ رقم عدد بعد آن باشد."
    )
    .trim(),
  accountIdentifier: yup
    .string()
    .min(10, "شماره حساب حداقل ۱۰ رقم است.")
    .max(18, "شماره حساب حداکثر ۱۸ رقم است.")
    .matches(/^[0-9]+$/, "شماره حساب فقط می‌تواند شامل اعداد باشد.")
    .trim()
    .optional(),
});

export default bankInfoValidation;
