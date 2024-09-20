import React, { useContext, useState } from "react";
import "./App.css";
import LoanOrLeaseButton from "./components/common/LoanOrLeaseButton.tsx";
import ChooseCar from "./components/common/ChooseCar.tsx";
import LoanTab from "./components/LoanComponents/LoanTab.tsx";
import LeaseTab from "./components/LeaseComponents/LeaseTab.tsx";
import { AppContext } from "./ValueProvider.tsx";

export default function App() {
  const tabs = ["Loan", "Lease"];
  const { toggleTab, setToggleTab } = useContext(AppContext);

  function updateToggle(name) {
    setToggleTab(name);
  }

  return (
    <div className="body">
      <ChooseCar />
      <div className="loanAndLeaseButtons">
        {tabs.map((tab) => {
          return (
            <LoanOrLeaseButton
              nameOnButton={tab}
              key={tab}
              onClickfunc={updateToggle}
              classToggleProp={toggleTab}
            />
          );
        })}
      </div>
      {toggleTab === "Loan" && <LoanTab />}
      {toggleTab === "Lease" && <LeaseTab />}
    </div>
  );
}
