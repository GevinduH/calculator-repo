import ZipcodeField from "../common/ZipcodeInput";
import CreditScoreField from "../common/CreditScore";
import TradeOrDownPaymentField from "../common/TradeOrDownPaymentFields";
import MonthsField from "../common/MonthsField";
import LeasePayment from "./LeasePayment";
import InfoCard from "../common/InfoCard";
import AnnualMilesField from "./AnnualMiles";

export default function LeaseTab() {
	return (
		<>
			<div className="showContent">
				<TradeOrDownPaymentField
					componentName={"Down Payment"}
					className={"DownPaymentField"}
				/>
				<TradeOrDownPaymentField
					componentName={"Trade-in Value"}
					className={"tradeField"}
				/>
				<ZipcodeField />
				<MonthsField termsArr={[24, 36, 48]} />
				<AnnualMilesField />
				<CreditScoreField />
			</div>

			<div className="showContent allInfo">
				<InfoCard />
				<LeasePayment />
			</div>
		</>
	);
}
