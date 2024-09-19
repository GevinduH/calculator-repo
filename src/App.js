import React, { useState } from "react";
import "./App.css";
import LoanOrLeaseButton from "./components/common/LoanOrLeaseButton.tsx";
import ChooseCar from "./components/common/ChooseCar.tsx";
import LoanTab from "./components/LoanComponents/LoanTab.tsx";
import LeaseTab from "./components/LeaseComponents/LeaseTab.tsx";
import { GlobalValues } from "./ValueProvider.tsx";

export default function App() {
  const tabs = ["Loan", "Lease"];
  const [toggleTab, setToggleTab] = useState("Loan");


  function updateToggle(name) {
    setToggleTab(name);
  }

  return (
    <div className="body">
                    <GlobalValues>
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
                      {toggleTab === "Loan" && (<LoanTab/>)}
                      {toggleTab === "Lease" && (<LeaseTab/>)}
                    </GlobalValues>
    </div>
  );
}
