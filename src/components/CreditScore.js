import React,{useState,useEffect} from "react";


function CreditScoreField() {
    const [creditScore,SetCreditScore]= useState(750)
    const [creditScoreValue,SetCreditScoreValue] = useState(0.95)

    useEffect(()=>{
        if (creditScore >= 750) {
            SetCreditScoreValue(0.95);
          } else if (creditScore >= 700 && creditScore < 750) {
            SetCreditScoreValue(1);
          } else if (creditScore >= 640 && creditScore < 700) {
            SetCreditScoreValue(1.05);
          } else if (creditScore < 640) {
            SetCreditScoreValue(1.2);
          }
    },[creditScore])

    return(
        <div className="CreditScoreField">
            <p>Approx. Credit Score</p>
            <input type="number" min="600" max="900" step="50" value={creditScore} onChange={(e)=>{ SetCreditScore(e.target.value)}} className="inputFields"/>
        </div>
    )
}

export default CreditScoreField;