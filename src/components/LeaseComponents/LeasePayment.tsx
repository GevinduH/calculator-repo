import { useContext} from "react";
import { carModel,tradeInValue,downPayment, loanMonths,creditScore,mileageValue} from "../../App";
import mockData from "../../api/MockDataAPI";

function LeasePayment() {
    const chosenCar = useContext(carModel);
    const tradeIn:number = useContext(tradeInValue);
    const downPaymentValue:number = useContext(downPayment);
    const term:number = useContext(loanMonths);
    const creditScoreValue:number = useContext(creditScore);
    const mileage:number = useContext(mileageValue);
    const currCar = mockData.find(car => car.vehicleName === chosenCar);
    const leaseAmount = (currCar.msrp - tradeIn - downPaymentValue) * mileage / 10000 /  term * creditScoreValue

    return (
      <div className="loanAmount">
        <b>MSRP</b> : $<del>{currCar.msrp} </del><br/>
        <b>Est. Lease Payment:<span className="loanAmount"> ${leaseAmount}/mo</span></b>
      </div>
    );
  }
  
export default LeasePayment
