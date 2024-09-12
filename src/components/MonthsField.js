import React,{useEffect, useState} from "react";


function MonthsField({termsArr,defaultTerm,terms,setTerms}) {
    const [months,setMonths]= useState(defaultTerm)
    useEffect(()=>{
        setTerms(months)
    },[months,setTerms])

    
    
    return(
        <div className="monthsField">
            <h3>Term (Month)</h3>
            <select value={months} onChange={(e)=>{ setMonths(e.target.value)}} className="inputFields">
                {termsArr.map(term=>(
                    <option key={term} value={term}>{term}</option>
                ))}
            </select>
        </div>
    )
}

export default MonthsField;