import React,{useState,useEffect} from 'react';
import './App.css';
import ZipcodeField from './components/ZipcodeInput.js';
import CreditScoreField from './components/CreditScore';
import LoanOrLeaseButton from './components/Loan&LeaseButton';
import TradeField from './components/TradeField';
import MonthsField from './components/MonthsField';
import DownPaymentField from './components/DownPayment';
import AnnualMilesField from './components/AnnualMiles';
import APRfield from './components/APR.js';
import ChooseCar from './components/chooseCar.js';


function App() {

  const [toggleTab,SetToggleTab]=useState('Loan')
  function updateToggle(name){
    SetToggleTab(name)
    
  }


  return (
    <div className='body'>
      <ChooseCar/>
      <div className="loanAndLeaseButtons">
        <LoanOrLeaseButton NameOnButton={'Loan'}  onClickfunc={updateToggle} classToggleProp={toggleTab}/>
        <LoanOrLeaseButton NameOnButton={'Lease'} onClickfunc={updateToggle} classToggleProp={toggleTab}/>
      </div>
 
      <div className={toggleTab==='Loan'? 'showContent ':'hideContent'}>
          <ZipcodeField/>
          <CreditScoreField/>
          <TradeField/>
          <MonthsField terms={ [12, 24, 36, 48, 72, 84]} defaultTerm={24}/>
          <DownPaymentField/>
          <APRfield/>
      </div>


      <div className={toggleTab==='Lease'? 'showContent':'hideContent'}>
          <DownPaymentField/>
          <TradeField/>
          <ZipcodeField/>
          <MonthsField terms={[24, 36, 48]} defaultTerm={36}/>
          <AnnualMilesField/>
          <CreditScoreField/>
      </div>
    </div>
  );
}

export default App;
