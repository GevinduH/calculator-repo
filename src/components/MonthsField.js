import React,{useState} from "react";


function MonthsField({terms,defaultTerm}) {
    const [months,SetMonths]= useState(defaultTerm)
    if (months<0) throw new Error("Value of the Month field should be a positive number")
    
    return(
        <div className="monthsField">
            <p>Term (Month)</p>
            <select value={months} onChange={(e)=>{ SetMonths(e.target.value)}} className="inputFields">
                {terms.map(term=>(
                    <option key={term} value={term}>{term}</option>
                ))}
            </select>
        </div>
    )
}

export default MonthsField;