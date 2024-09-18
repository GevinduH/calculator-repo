import { useContext} from "react";
import { carModel,tradeInValue,downPayment, loanMonths,creditScore,apr} from "../../App";
import mockData from "../../api/MockDataAPI";

function LoanPayment() {
    const chosenCar = useContext(carModel);
    const tradeIn = useContext<number>(tradeInValue);
    const downPaymentValue = useContext<number>(downPayment);
    const term = useContext<number>(loanMonths);
    const creditScoreValue = useContext<number>(creditScore);
    const aprValue = useContext<number>(apr);
    const currCar = mockData.find(car => car.vehicleName === chosenCar);
    const loanAmount = (currCar.msrp - tradeIn - downPaymentValue) / (term * creditScoreValue * aprValue)

    return (
      <div className="loanAmount">
        <b>MSRP</b> : $<del>{currCar.msrp} </del><br/>
        <b>Est. Loan Payment:<span className="loanAmount"> ${loanAmount===Infinity? 0:loanAmount}/mo</span></b>
      </div>
    );
  }
  
export default LoanPayment;