import React, { useEffect, useState } from "react";

function ZipcodeField({taxes,setTaxes}) {
  const [zipcode,setZipcode] = useState('10600');
  function handleZipcode(e) {
    setZipcode(e.target.value)
  }

  useEffect(()=>{
    function calculateTaxes(zipcode) {
      const zipcodeArr = [...zipcode]
      const calculateTax = zipcodeArr.map(Number).map(num => num * 11)
      setTaxes(calculateTax)
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
        onChange={handleZipcode}
      />
    </div>
  );
}

export default ZipcodeField;
