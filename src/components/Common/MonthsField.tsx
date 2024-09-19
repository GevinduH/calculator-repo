import React,{useEffect, useState} from "react";


export default function MonthsField({termsArr,defaultTerm,setTerms}) {
    const [months,setMonths]= useState(defaultTerm)
    function handleMonths(e: React.ChangeEvent<HTMLSelectElement>) {
        setMonths(e.target.value)
    }

    useEffect(()=>{
        setTerms(months)
    },[months])

    
    
    return(
        <div className="monthsField">
            <h3>Term (Month)</h3>
            <select value={months} onChange={handleMonths} className="inputFields">
                {termsArr.map(term=>(
                    <option key={term} value={term}>{term}</option>
                ))}
            </select>
        </div>
    )
}
