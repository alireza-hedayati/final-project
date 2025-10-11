import React from "react";
import Navbar from "../modules/InformationModules/Navbar";
import AccountInfo from "../modules/InformationModules/AccountInfo";
import PersonalInfo from "../modules/InformationModules/PersonalInfo";
import BankInformation from "../modules/InformationModules/BankInformation";
import { useState } from "react";

function InformationPage() {
  const [profile, setProfile] = useState(true);
  return (
    <>
      {profile && (
        <div className="lg:w-14/15 lg:flex lg:justify-between  lg:mt-10 lg:items-baseline lg:mx-auto">
          <div className="lg:w-2/10  ">
            <Navbar setProfile={setProfile} profile={profile}/>
          </div>
          <div className="lg:w-8/10">
            <AccountInfo />
            <PersonalInfo />
            <BankInformation />
          </div>
        </div>
      )}
    </>
  );
}

export default InformationPage;
