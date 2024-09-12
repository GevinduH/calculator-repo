import React, { useEffect, useState } from "react";

function ZipcodeField({taxes,setTaxes}) {
  const [zipcode,SetZipcode] = useState('10600');
  
  useEffect(()=>{
    function calculateTaxes(zipcode) {
      const zipcodeArr = [...zipcode]
      const calculateTax = zipcodeArr.map(Number).map(num => num * 11)
      return setTaxes(calculateTax)
    }
    calculateTaxes(zipcode)
    
  },[zipcode])
  return (
    <div className="zipcodeField">
      <h3>Home Zip Code</h3>
      <input
        type="text"
        value={zipcode}
        className="inputFields"
        onChange={(e) => {
            SetZipcode(e.target.value);
        }}
      />
    </div>
  );
}

export default ZipcodeField;
