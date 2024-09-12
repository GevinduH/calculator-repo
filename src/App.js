import React,{createContext, useState} from 'react';
import './App.css';
import ZipcodeField from './components/ZipcodeInput.js';
import CreditScoreField from './components/CreditScore';
import LoanOrLeaseButton from './components/Loan&LeaseButton';
import TradeOrDownPaymentField from './components/Trade&DownPaymentFields.js';
import MonthsField from './components/MonthsField';
import AnnualMilesField from './components/AnnualMiles';
import APRfield from './components/APR.js';
import ChooseCar from './components/chooseCar.js';
import LoanComponent from './components/CalculateLoan.js';
import LeaseComponent from './components/CalculateLease.js';
import InfoCard from './components/InfoCard.js';
 

export const carModel = createContext();
export const creditScore = createContext()
export const tradeInValue = createContext()
export const downPayment = createContext()
export const apr = createContext()
export const loanMonths = createContext()
export const leaseMonths = createContext()
export const mileageValue = createContext()
export const taxes = createContext()

function App() {
  const tabs = ['Loan','Lease']
  const [car, setCar] = useState("Toyota Corolla");
  const [toggleTab,SetToggleTab]=useState('Loan');
  const [creditScoreValue,setCreditScoreValue] = useState(0.95)
  const [tradeFieldValue,settradeFieldValue] = useState(0)
  const [downPaymentValue,setdownPaymentValue] = useState(0)
  const [aprValue,setAprValue] = useState(0)
  const [loanTerms, setLoanTerms] = useState(24);
  const [leaseTerms, setLeaseTerms] = useState(36);
  const [mileage,setMileage]= useState(12000)
  const [taxes,setTaxes] = useState( [11, 0, 66, 0, 0])

  function updateToggle(name){
    SetToggleTab(name)
  }

  return (
    <div className='body'>
      <creditScore.Provider value={creditScoreValue}>
      <carModel.Provider value={car}>
      <tradeInValue.Provider value={tradeFieldValue}>
      <downPayment.Provider value={downPaymentValue}>
      <apr.Provider value={aprValue}>
      <loanMonths.Provider value={loanTerms}>
      <leaseMonths.Provider value={leaseTerms}>
      <mileageValue.Provider value={mileage}>
        <ChooseCar car={car} setCar={setCar}/>
        <div className="loanAndLeaseButtons">
          {tabs.map((tab)=>{
              return <LoanOrLeaseButton NameOnButton={tab} key={tab} onClickfunc={updateToggle} classToggleProp={toggleTab}/>
          })}
        </div>
  
        <div className={toggleTab==='Loan'? 'showContent ':'hideContent'}>
            <ZipcodeField taxes={taxes} setTaxes={setTaxes} />
            <CreditScoreField creditScoreValue={creditScoreValue} setCreditScoreValue={setCreditScoreValue}/>
            <TradeOrDownPaymentField p={'Trade-in Value'} className={'tradeField'} value={tradeFieldValue} setValue={settradeFieldValue}/>
            <MonthsField termsArr={ [12, 24, 36, 48, 72, 84]} defaultTerm={24} terms={loanTerms} setTerms={setLoanTerms} />
            <TradeOrDownPaymentField p={'Down Payment'} className={'DownPaymentField'} value={downPaymentValue} setValue={setdownPaymentValue}/>
            <APRfield aprValue={aprValue} setAprValue={setAprValue} />
        </div>


        <div className={toggleTab==='Lease'? 'showContent':'hideContent'}>
            <TradeOrDownPaymentField p={'Down Payment'} className={'DownPaymentField'} value={downPaymentValue} setValue={setdownPaymentValue}/>
            <TradeOrDownPaymentField p={'Trade-in Value'} className={'tradeField'} value={tradeFieldValue} setValue={settradeFieldValue}/>
            <ZipcodeField taxes={taxes} setTaxes={setTaxes}/>
            <MonthsField termsArr={[24, 36, 48]} defaultTerm={36} terms={leaseTerms} setTerms={setLeaseTerms}/>
            <AnnualMilesField mileage={mileage} setMileage={setMileage} />
            <CreditScoreField creditScoreValue={creditScoreValue} setCreditScoreValue={setCreditScoreValue}/>
        </div>
        <div className={toggleTab==='Loan'? 'showContent allInfo':'hideContent'}>
          <InfoCard/>
          <LoanComponent />
        </div>
        <div className={toggleTab==='Lease'? 'showContent allInfo':'hideContent'}>
          <InfoCard/>
          <LeaseComponent/>
        </div>
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
