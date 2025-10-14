import React from "react";
import Image from "next/image";
function ServerError() {
  return (
    <div className="w-9/10 mx-auto my-20 flex flex-col items-center justify-center lg:flex-row-reverse lg:gap-30 lg:items-center lg:justify-center">
      <div>
        <Image src="/images/robot.png" width={320} height={320} alt="image" />
      </div>
      <div className="flex flex-col  gap-2">
        <p className="text-lg font-semibold lg:text-xl">اتصال با سرور برقرار نیست!</p>
        <p className="text-center">لطفا بعدا دوباره امتحان کنید</p>
      </div>
    </div>
  );
}

export default ServerError;
