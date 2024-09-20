import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext(null);

const getSessionStorage = (key:string, initialValue:string) => {
  const storedValue = sessionStorage.getItem(key); 
  return storedValue ? JSON.parse(storedValue) : initialValue;
};


export const GlobalValues= ({ children }) => {
  const [car, setCar] = useState(() => getSessionStorage('car', 'Toyota Corolla'));
  const [msrp,setMsrp] = useState(() => getSessionStorage('msrp', '0'))
  const [toggleTab, setToggleTab] = useState(() => getSessionStorage('toggleTab', 'Loan'));
  const [creditScoreValue, setCreditScoreValue] = useState(() => getSessionStorage('creditScoreValue', '0.95'));
  const [tradeFieldValue, setTradeFieldValue] = useState(() => getSessionStorage('tradeFieldValue', '0'));
  const [downPaymentValue, setDownPaymentValue] = useState(() => getSessionStorage('downPaymentValue', '0'));
  const [aprValue, setAprValue] = useState(() => getSessionStorage('aprValue', '0'));
  const [loanTerms, setLoanTerms] = useState(() => getSessionStorage('loanTerms', '24'));
  const [leaseTerms, setLeaseTerms] = useState(() => getSessionStorage('leaseTerms', '36'));
  const [mileage, setMileage] = useState(() => getSessionStorage('mileage', '12000'));
  const [taxes, setTaxes] = useState(() => getSessionStorage('taxes', '[11, 0, 66, 0, 0]'));
  const [zipcode,setZipcode] = useState(() => getSessionStorage('zipcode', '10600'));

  useEffect(() => {
    sessionStorage.setItem('car', JSON.stringify(car));
    sessionStorage.setItem('msrp', JSON.stringify(msrp));
    sessionStorage.setItem('toggleTab', JSON.stringify(toggleTab));
    sessionStorage.setItem('creditScoreValue', JSON.stringify(creditScoreValue));
    sessionStorage.setItem('tradeFieldValue', JSON.stringify(tradeFieldValue));
    sessionStorage.setItem('downPaymentValue', JSON.stringify(downPaymentValue));
    sessionStorage.setItem('aprValue', JSON.stringify(aprValue));
    sessionStorage.setItem('loanTerms', JSON.stringify(loanTerms));
    sessionStorage.setItem('leaseTerms', JSON.stringify(leaseTerms));
    sessionStorage.setItem('mileage', JSON.stringify(mileage));
    sessionStorage.setItem('taxes', JSON.stringify(taxes));
    sessionStorage.setItem('zipcode', JSON.stringify(zipcode));
  }, [
    car, msrp, toggleTab, creditScoreValue, tradeFieldValue, downPaymentValue,
    aprValue, loanTerms, leaseTerms, mileage, taxes,zipcode
  ]);

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
      taxes, setTaxes,
      msrp,setMsrp,
      zipcode,setZipcode
    }}>
      {children}
    </AppContext.Provider>
  );
};
