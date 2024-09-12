import { useContext} from "react";
import { carModel,tradeInValue,downPayment, loanMonths,creditScore,mileageValue} from "../App";
import mockData from "../api/MockDataAPI";

function LeaseComponent() {
    const chosenCar = useContext(carModel);
    const tradeIn = useContext(tradeInValue);
    const downPaymentValue = useContext(downPayment);
    const term = useContext(loanMonths);
    const creditScoreValue = useContext(creditScore);
    const mileage = useContext(mileageValue);
    const currCar = mockData.find(car => car.vehicleName === chosenCar);
    const leaseAmount = (currCar.msrp - tradeIn - downPaymentValue) * mileage / 10000 /  term * creditScoreValue

    return (
      <div className="loanAmount">
        <b>MSRP</b> : $<del>{currCar.msrp} </del><br/>
        <b>Est. Loan Payment:<span className="loanAmount"> ${leaseAmount}/mo</span></b>
      </div>
    );
  }
  
export default LeaseComponent

// (msrp - tradeIn - downPayment) * mileage / 10000 / term * creditScoreValue