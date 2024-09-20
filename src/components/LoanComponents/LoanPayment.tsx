import { useContext } from "react";
import { AppContext } from "../../ValueProvider";

export default function LoanPayment() {
	const {
		msrp,
		tradeFieldValue,
		downPaymentValue,
		aprValue,
		creditScoreValue,
		loanTerms,
	} = useContext(AppContext);
	const loanAmount =
		(msrp - tradeFieldValue - downPaymentValue) /
		(loanTerms * creditScoreValue * aprValue);

	return (
		<div className="loanAmount">
			<b>MSRP</b> : $<del>{msrp} </del>
			<br />
			<b>
				Est. Loan Payment:
				<span className="loanAmount">
					{" "}
					${loanAmount === Infinity ? 0 : loanAmount}/mo
				</span>
			</b>
		</div>
	);
}
