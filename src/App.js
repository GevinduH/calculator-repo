import React, { createContext, useState } from "react";
import "./App.css";
import LoanOrLeaseButton from "./components/common/LoanOrLeaseButton.tsx";
import ChooseCar from "./components/common/ChooseCar.tsx";
import LoanTab from "./components/LoanComponents/LoanTab.tsx";
import LeaseTab from "./components/LeaseComponents/LeaseTab.tsx";

export const carModel = createContext();
export const creditScore = createContext();
export const tradeInValue = createContext();
export const downPayment = createContext();
export const apr = createContext();
export const loanMonths = createContext();
export const leaseMonths = createContext();
export const mileageValue = createContext();
export const taxes = createContext();

function App() {
  const tabs = ["Loan", "Lease"];
  const [car, setCar] = useState("Toyota Corolla");
  const [toggleTab, setToggleTab] = useState("Loan");
  const [creditScoreValue, setCreditScoreValue] = useState(0.95);
  const [tradeFieldValue, settradeFieldValue] = useState(0);
  const [downPaymentValue, setdownPaymentValue] = useState(0);
  const [aprValue, setAprValue] = useState(0);
  const [loanTerms, setLoanTerms] = useState(24);
  const [leaseTerms, setLeaseTerms] = useState(36);
  const [mileage, setMileage] = useState(12000);
  const [taxes, setTaxes] = useState([11, 0, 66, 0, 0]);

  function updateToggle(name) {
    setToggleTab(name);
  }

  return (
    <div className="body">
      <creditScore.Provider value={creditScoreValue}>
        <carModel.Provider value={car}>
          <tradeInValue.Provider value={tradeFieldValue}>
            <downPayment.Provider value={downPaymentValue}>
              <apr.Provider value={aprValue}>
                <loanMonths.Provider value={loanTerms}>
                  <leaseMonths.Provider value={leaseTerms}>
                    <mileageValue.Provider value={mileage}>
                      <ChooseCar setCar={setCar} />
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

                      {toggleTab === "Loan" && (
                        <LoanTab
                          // taxes={taxes}
                          setTaxes={setTaxes}
                          // creditScoreValue={creditScoreValue}
                          setCreditScoreValue={setCreditScoreValue}
                          // tradeFieldValue={tradeFieldValue}
                          settradeFieldValue={settradeFieldValue}
                          // loanTerms={loanTerms}
                          setLoanTerms={setLoanTerms}
                          // downPaymentValue={downPaymentValue}
                          setdownPaymentValue={setdownPaymentValue}
                          // aprValue={aprValue}
                          setAprValue={setAprValue}
                        />
                      )}

                      {toggleTab === "Lease" && (
                        <LeaseTab
                          // downPaymentValue={downPaymentValue}
                          setdownPaymentValue={setdownPaymentValue}
                          // tradeFieldValue={tradeFieldValue}
                          settradeFieldValue={settradeFieldValue}
                          // taxes={taxes}
                          setTaxes={setTaxes}
                          // leaseTerms={leaseTerms}
                          setLeaseTerms={setLeaseTerms}
                          // mileage={mileage}
                          setMileage={setMileage}
                          // creditScoreValue={creditScoreValue}
                          setCreditScoreValue={setCreditScoreValue}
                        />
                      )}
                    </mileageValue.Provider>
                  </leaseMonths.Provider>
                </loanMonths.Provider>
              </apr.Provider>
            </downPayment.Provider>
          </tradeInValue.Provider>
        </carModel.Provider>
      </creditScore.Provider>
    </div>
  );
}

export default App;
