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

export const carModel = createContext();
export const creditScore = createContext()

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
  function updateToggle(name){
    SetToggleTab(name)
  }

  return (
    <div className='body'>
      <creditScore.Provider value={creditScoreValue}>
      <carModel.Provider value={car}>
        <ChooseCar car={car} setCar={setCar}/>
        <div className="loanAndLeaseButtons">
          {tabs.map((tab)=>{
              return <LoanOrLeaseButton NameOnButton={tab} key={tab} onClickfunc={updateToggle} classToggleProp={toggleTab}/>
          })}
        </div>
  
        <div className={toggleTab==='Loan'? 'showContent ':'hideContent'}>
            <ZipcodeField/>
            <CreditScoreField creditScoreValue={creditScoreValue} setCreditScoreValue={setCreditScoreValue}/>
            <TradeOrDownPaymentField p={'Trade-in Value'} className={'tradeField'} value={tradeFieldValue} setValue={settradeFieldValue}/>
            <MonthsField termsArr={ [12, 24, 36, 48, 72, 84]} defaultTerm={24} terms={loanTerms} setTerms={setLoanTerms} />
            <TradeOrDownPaymentField p={'Down Payment'} className={'DownPaymentField'} value={downPaymentValue} setValue={setdownPaymentValue}/>
            <APRfield aprValue={aprValue} setAprValue={setAprValue} />
        </div>


        <div className={toggleTab==='Lease'? 'showContent':'hideContent'}>
            <TradeOrDownPaymentField p={'Down Payment'} className={'DownPaymentField'} value={downPaymentValue} setValue={setdownPaymentValue}/>
            <TradeOrDownPaymentField p={'Trade-in Value'} className={'tradeField'} value={tradeFieldValue} setValue={settradeFieldValue}/>
            <ZipcodeField/>
            <MonthsField termsArr={[24, 36, 48]} defaultTerm={36} terms={leaseTerms} setTerms={setLeaseTerms}/>
            <AnnualMilesField mileage={mileage} setMileage={setMileage} />
            <CreditScoreField creditScoreValue={creditScoreValue} setCreditScoreValue={setCreditScoreValue}/>
        </div>
      </carModel.Provider>
      </creditScore.Provider>
    </div>
  );
}

export default App;
