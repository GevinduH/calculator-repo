import React, { useState } from "react";

function ZipcodeField() {
const [zipcode,SetZipcode] = useState('');
  return (
    <div className="zipcodeField">
      <p>Home Zip Code</p>
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
