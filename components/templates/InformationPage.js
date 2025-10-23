import Navbar from "../modules/InformationModules/Navbar";
import AccountInfo from "../modules/InformationModules/AccountInfo";
import PersonalInfo from "../modules/InformationModules/PersonalInfo";
import BankInformation from "../modules/InformationModules/BankInformation";
import { useState } from "react";
import MyTours from "../modules/InformationModules/MyTours";
import Transactions from "../modules/InformationModules/Transactions";

function InformationPage() {
  const [profile, setProfile] = useState(true);
  const [myTours, setMyTours] = useState(false);
  const [transaction, setTransaction] = useState(false);

  return (
    <main className="lg:flex lg:w-full lg:justify-center gap-20 lg:items-start lg:mx-auto">
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
    </main>
  );
}

export default InformationPage;
