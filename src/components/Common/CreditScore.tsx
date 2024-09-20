import React, { useEffect, useContext } from "react";
import { AppContext } from "../../ValueProvider";

export default function CreditScoreField() {
	const { creditScore, setCreditScore, setCreditScoreValue } =
		useContext(AppContext);
	function handleCreditScoreField(e: React.ChangeEvent<HTMLInputElement>) {
		setCreditScore(parseInt(e.target.value));
	}

	useEffect(() => {
		switch (true) {
			case creditScore >= 750:
				setCreditScoreValue(0.95);
				break;
			case creditScore >= 700 && creditScore < 750:
				setCreditScoreValue(1);
				break;
			case creditScore >= 640 && creditScore < 700:
				setCreditScoreValue(1.05);
				break;
			case creditScore < 640:
				setCreditScoreValue(1.2);
				break;
			default:
				setCreditScoreValue(0.95);
		}
	}, [creditScore]);

	return (
		<div className="creditScoreField">
			<h3>Approx. Credit Score</h3>
			<input
				type="number"
				min="600"
				max="900"
				step="50"
				value={creditScore}
				onChange={handleCreditScoreField}
				className="inputFields"
			/>
		</div>
	);
}
