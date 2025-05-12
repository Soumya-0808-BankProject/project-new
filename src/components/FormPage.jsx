import React, { useState } from "react";
import '../modules/carousel/Carousel.css'
import { useLocation } from "react-router-dom";
export const FormPage = ({title}) => {
     const [name, setName] = useState("");
      const [phone, setPhone] = useState("");
      const [loanType,setLoanType]=useState("")
      const location=useLocation();
      const url=location.pathname;
      console.log(url,"..url")
    return(
          <div className="emi-container emi-container1">
          <h3>{title}</h3>
                    <div className="form-group">
                      <label>Full Name <span style={{color:'red'}}>*</span></label>
                      <input
                        type="text"
                        value={name}
                        placeholder="Full Name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number <span style={{color:'red'}}>*</span></label>
                      <input
                        type="text"
                        value={phone}
                        placeholder="Phone Number"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Loan Type <span style={{color:'red'}}>*</span></label>
                      <input
                        type="text"
                        disabled="true"
                        value="Personal Loan"
                        placeholder="Personal Loan"
                        onChange={(e) => setLoanType(e.target.value)}
                      />
                    </div>
                    <button >Submit</button>
                    </div>
    )
}

export default FormPage;