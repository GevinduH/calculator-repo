import { useContext, useEffect } from "react";
import { AppContext } from "../../ValueProvider";

export default function ZipcodeField( ) {
  const {zipcode,setZipcode,setTaxes} = useContext(AppContext)
  function handleZipcode(e: React.ChangeEvent<HTMLInputElement>) {
    setZipcode(e.target.value)
  }

  useEffect(()=>{
    function calculateTaxes(zipcode:string) {
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


