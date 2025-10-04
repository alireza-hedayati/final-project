import { toast } from "react-toastify";
export default function Success({ response }) {
  return (
    <div>
      <div>عملیات موفقیت‌آمیز بود ✔️</div>
      <div
        className="mt-1 py-1 px-2 bg-white rounded-md cursor-pointer inline-block hover:opacity-60"
        onClick={() => {
          navigator.clipboard.writeText(response.code);
          toast.info("کد کپی شد 📋", { autoClose: 1500 });
        }}
      >
        {response.code}
      </div>
    </div>
  );
}



