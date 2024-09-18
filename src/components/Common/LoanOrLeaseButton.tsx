import { useState,useCallback,useEffect } from "react";

function LoanOrLeaseButton({nameOnButton,onClickfunc,classToggleProp}) {
    const [buttonName,setButtonName] = useState('')
    const changeButtonName = useCallback(() => {
        setButtonName(nameOnButton);
      }, [nameOnButton]); 
    
      useEffect(() => {
        changeButtonName();
      }, [changeButtonName]);
    return (
        <button className={classToggleProp===nameOnButton? `active ${nameOnButton}Button`:`${nameOnButton}Button`} value={nameOnButton} onClick={()=>{onClickfunc(nameOnButton)}}><h2>{buttonName}</h2></button>
    )
}

export default LoanOrLeaseButton;