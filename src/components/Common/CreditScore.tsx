import React,{useState,useEffect} from "react";


export default function CreditScoreField({setCreditScoreValue}) {
    const [creditScore,setCreditScore]= useState(750)
    function handleCreditScoreField( e: React.ChangeEvent<HTMLInputElement>) {
      setCreditScore(parseInt(e.target.value))
    }

    useEffect(()=>{
        if (creditScore >= 750) {
            setCreditScoreValue(0.95);
          } else if (creditScore >= 700 && creditScore < 750) {
            setCreditScoreValue(1);
          } else if (creditScore >= 640 && creditScore < 700) {
            setCreditScoreValue(1.05);
          } else if (creditScore < 640) {
            setCreditScoreValue(1.2);
          }
    },[creditScore,setCreditScoreValue])

    return(
        <div className="CreditScoreField">
            <h3>Approx. Credit Score</h3>
            <input type="number" min="600" max="900" step="50" value={creditScore} onChange={handleCreditScoreField} className="inputFields"/>
        </div>
    )
}
