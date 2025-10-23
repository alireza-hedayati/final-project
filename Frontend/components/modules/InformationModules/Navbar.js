import { MdOutlinePerson } from "react-icons/md";
import { GiStripedSun } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";

function Navbar({
  setProfile,
  profile,
  setMyTours,
  myTours,
  transaction,
  setTransaction,
}) {
  
  return (
    <div className="w-8/10 pt-8 pb-1 border-gray-400 mx-auto border-b  lg:border-gray-200 lg:border-[1px] lg:w-[220px] lg:h-fit lg:rounded-xl lg:shadow-sm lg:p-0">
      <ul className="flex items-center justify-between w-9/10 mx-auto lg:flex-col  lg:w-full lg:divide-y-[1px] lg:divide-gray-200">
        <li
          onClick={() => {
            setProfile(true), setMyTours(false), setTransaction(false);
          }}
          className={`${
            profile ? "text-green-500" : "text-gray-700"
          } cursor-pointer flex items-center gap-1 hover:opacity-70 lg:w-full lg:py-3 lg:hover:bg-green-100 lg:hover:rounded-t-xl lg:pr-2`}
        >
          <span>
            <MdOutlinePerson />
          </span>
          <p>پروفایل</p>
        </li>
        <li
          onClick={() => {
            setMyTours(true), setProfile(false), setTransaction(false);
          }}
          className={`${
            myTours ? "text-green-500" : "text-gray-700"
          } cursor-pointer flex items-center gap-1  hover:opacity-70 lg:w-full lg:py-3 lg:hover:bg-green-100  lg:pr-2`}
        >
          <span>
            <GiStripedSun />
          </span>
          <p>تورهای من</p>
        </li>
        <li
          onClick={() => {
            setMyTours(false), setProfile(false), setTransaction(true);
          }}
          className={`${
            transaction ? "text-green-500 " : "text-gray-700"
          } cursor-pointer flex items-center gap-1 hover:opacity-70  lg:w-full lg:py-3 lg:hover:bg-green-100 lg:hover:rounded-b-xl lg:pr-2`}
        >
          <span>
            <GrTransaction />
          </span>
          <p>تراکنش ها</p>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
