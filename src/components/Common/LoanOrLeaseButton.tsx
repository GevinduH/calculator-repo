import { useState, useCallback, useEffect } from "react";

export default function LoanOrLeaseButton({
	nameOnButton,
	onClickFunc,
	classToggleProp,
}) {
	const [buttonName, setButtonName] = useState("");
	const changeButtonName = useCallback(() => {
		setButtonName(nameOnButton);
	}, [nameOnButton]);

	useEffect(() => {
		changeButtonName();
	}, [changeButtonName]);
	return (
		<button
			className={
				classToggleProp === nameOnButton
					? `active ${nameOnButton}Button`
					: `${nameOnButton}Button`
			}
			value={nameOnButton}
			onClick={() => {
				onClickFunc(nameOnButton);
			}}>
			<h2>{buttonName}</h2>
		</button>
	);
}
