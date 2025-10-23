import * as yup from "yup";

const loginSchema = yup.object().shape({
  mobile: yup
    .string()
    .required("پر کردن این بخش الزامی است")
    .matches(/^09\d{9}$/, "فرمت شماره تماس نامعتبر است"),
});

export default loginSchema;
