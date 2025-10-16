import Navbar from "../modules/InformationModules/Navbar";
import AccountInfo from "../modules/InformationModules/AccountInfo";
import PersonalInfo from "../modules/InformationModules/PersonalInfo";
import BankInformation from "../modules/InformationModules/BankInformation";
import { useEffect, useState } from "react";
import MyTours from "../modules/InformationModules/MyTours";
import Transactions from "../modules/InformationModules/Transactions";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

function InformationPage() {
  const [profile, setProfile] = useState(true);
  const [myTours, setMyTours] = useState(false);
  const [transaction, setTransaction] = useState(false);
  const [checking, setChecking] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (!token) {
      router.push("/torino");
    } else {
      setChecking(false);
    }
  }, []);
  if (checking) return <p>در حال بارگزاری...</p>;
  return (
    <div className="lg:flex lg:w-full lg:justify-center gap-20 lg:items-start lg:mx-auto">
      <div className="lg:w-3/15 lg:mt-10">
         
          <Navbar
            setProfile={setProfile}
            profile={profile}
            setMyTours={setMyTours}
            myTours={myTours}
            setTransaction={setTransaction}
            transaction={transaction}
          />
        
      </div>
      {profile ? (
        <div className="lg:w-10/15 lg:mt-5 min-h-[400px]">
          <AccountInfo />
          <PersonalInfo />
          <BankInformation />
        </div>
      ) : myTours ? (
        <div className="lg:w-10/15 lg:mt-5">
          <MyTours />
        </div>
      ) : (
        <div className="lg:w-12/15 lg:mt-5">
          <Transactions />
        </div>
      )}
    </div>
  );
}

export default InformationPage;
