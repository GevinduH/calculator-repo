import React, { useState,useCallback,useEffect } from "react";

function LoanOrLeaseButton({NameOnButton,onClickfunc,classToggleProp}) {
    const [buttonName,SetButtonName] = useState('')
    const changeButtonName = useCallback(() => {
        SetButtonName(NameOnButton);
      }, [NameOnButton]); 
    
      useEffect(() => {
        changeButtonName();
      }, [changeButtonName]);
    return (
        <button className={classToggleProp===NameOnButton? `active ${NameOnButton}Button`:`${NameOnButton}Button`} value={NameOnButton} onClick={()=>{onClickfunc(NameOnButton)}}>{buttonName}</button>
    )
}

export default LoanOrLeaseButton;