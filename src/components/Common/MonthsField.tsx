import React,{useContext, useEffect, useState} from "react";
import { AppContext } from "../../ValueProvider";


export default function MonthsField({termsArr}) {
    const {loanTerms,leaseTerms,setLoanTerms,setLeaseTerms,toggleTab} = useContext(AppContext)
    const [months,setMonths]= useState<number>()
    function handleMonths(e: React.ChangeEvent<HTMLSelectElement>) {
        setMonths(parseInt(e.target.value))
    }

    useEffect(()=>{
        if (toggleTab==='Loan') {
            setMonths(loanTerms)
        }else {
            setMonths(leaseTerms) 
        }
    },[])

    useEffect(()=>{
        if (toggleTab==='Loan') {
            setLoanTerms(months)
        }else {
            setLeaseTerms(months) 
        }
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
