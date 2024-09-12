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
        <button className={classToggleProp===NameOnButton? `active ${NameOnButton}Button`:`${NameOnButton}Button`} value={NameOnButton} onClick={()=>{onClickfunc(NameOnButton)}}><h2>{buttonName}</h2></button>
    )
}

export default LoanOrLeaseButton;