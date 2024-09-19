import React, { createContext, useState } from 'react';


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [car, setCar] = useState("Toyota Corolla");
  const [toggleTab, setToggleTab] = useState("Loan");
  const [creditScoreValue, setCreditScoreValue] = useState(0.95);
  const [tradeFieldValue, setTradeFieldValue] = useState(0);
  const [downPaymentValue, setDownPaymentValue] = useState(0);
  const [aprValue, setAprValue] = useState(0);
  const [loanTerms, setLoanTerms] = useState(24);
  const [leaseTerms, setLeaseTerms] = useState(36);
  const [mileage, setMileage] = useState(12000);
  const [taxes, setTaxes] = useState([11, 0, 66, 0, 0]);

  return (
    <AppContext.Provider value={{
      car, setCar,
      toggleTab, setToggleTab,
      creditScoreValue, setCreditScoreValue,
      tradeFieldValue, setTradeFieldValue,
      downPaymentValue, setDownPaymentValue,
      aprValue, setAprValue,
      loanTerms, setLoanTerms,
      leaseTerms, setLeaseTerms,
      mileage, setMileage,
      taxes, setTaxes
    }}>
      {children}
    </AppContext.Provider>
  );
};
