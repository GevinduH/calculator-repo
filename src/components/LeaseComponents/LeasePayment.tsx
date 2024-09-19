import { useContext} from "react";
import { AppContext } from "../../ValueProvider";

export default function LeasePayment() {
    const {msrp,mileage,creditScoreValue,downPaymentValue,tradeFieldValue,leaseTerms} = useContext(AppContext);
    const leaseAmount = (msrp - tradeFieldValue - downPaymentValue) * mileage / 10000 /  leaseTerms * creditScoreValue

    return (
      <div className="loanAmount">
        <b>MSRP</b> : $<del>{msrp} </del><br/>
        <b>Est. Lease Payment:<span className="loanAmount"> ${leaseAmount}/mo</span></b>
      </div>
    );
  }
  
