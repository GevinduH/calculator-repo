import React,{useState,useEffect} from "react";


function CreditScoreField({creditScoreValue,setCreditScoreValue}) {
    const [creditScore,setCreditScore]= useState(750)
    

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
            <p>Approx. Credit Score</p>
            <input type="number" min="600" max="900" step="50" value={creditScore} onChange={(e) => setCreditScore(parseInt(e.target.value))} className="inputFields"/>
        </div>
    )
}

export default CreditScoreField;