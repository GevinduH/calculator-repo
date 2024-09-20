import ZipcodeField from "../common/ZipcodeInput"
import CreditScoreField from "../common/CreditScore"
import TradeOrDownPaymentField from "../common/TradeOrDownPaymentFields"
import MonthsField from "../common/MonthsField"
import APRfield from "./APRfield"
import LoanPayment from "./LoanPayment"
import InfoCard from "../common/InfoCard"

export default function LoanTab() {
    return (
        <>
            <div className='showContent'>
                <ZipcodeField/>
                <CreditScoreField/>
                <TradeOrDownPaymentField componentName={'Trade-in Value'} className={'tradeField'} />
                <MonthsField termsArr={ [12, 24, 36, 48, 72, 84]}/>
                <TradeOrDownPaymentField componentName={'Down Payment'} className={'DownPaymentField'}/>
                <APRfield/>
            </div>

            <div className='showContent allInfo'>
            <InfoCard/>
            <LoanPayment />
            </div>
        </>
            
        
    )
}
