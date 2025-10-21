import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

function EmailForm({ onSave }) {

  const emailSchema = yup.object().shape({
    email: yup
      .string()
      .email("لطفا یک آدرس ایمیل معتبر وارد کنید")
      .nullable()
      .optional(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(emailSchema),
  });
  const submitHandler = (data) => {
    onSave(data.email);
  };
  
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex items-center justify-between pt-5"
    >
      <div className="flex flex-col gap-2">
        <input
          className="px-3 text-md py-1 border-gray-400 border-[1px] outline-0 rounded-md "
          type="text"
          {...register("email")}
          placeholder="آدرس ایمیل"
        />
        <span className="text-red-500 text-sm">{errors.email?.message}</span>
      </div>

      <button
      aria-label="تایید-فرم"
        type="submit"
        className="bg-green-500 cursor-pointer px-5 py-1 rounded-md text-white border-0 outline-0 hover:bg-green-700"
      >
        تایید
      </button>
    </form>
  );
}

export default EmailForm;
