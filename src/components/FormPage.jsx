import React, { useState } from "react";
import "../modules/carousel/Carousel.css";
import { useLocation } from "react-router-dom";
export const FormPage = ({ title = "Apply Now and Get Instant Approval!" }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loanType, setLoanType] = useState("");
  const [success, setSuccess] = useState(false);
  const location = useLocation();
  const loanArr = [
    "Select Loan Type",
    "Personal Loan",
    "Transfer Personal Loan",
    "Professional Loan",
    "Doctor Plan",
    "Business Plan",
    "Project Funding",
    "House Loan",
    "Transfer Home Loan",
  ];
  const url = location.pathname;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      Name: name,
      PhoneNumber: phone,
      LoanType: loanType,
    };

    const body = new URLSearchParams();
    for (const key in formData) {
      body.append(key, formData[key]);
    }

    try {
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const url =
        "https://script.google.com/macros/s/AKfycbwaQgqnE7tjORiJORFh7dw_1QjpbQUKs7lyHs39DnAxYbvBHWU6rxyZn84wxk4MlCYB/exec";
      const response = await fetch(url, {
        method: "POST",
        body: body,
      });
    } catch (err) {
      // if (response.ok) {
      setSuccess(true);

      // Hide message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);

      // const result = await response.text();
      setName("");
      setPhone("");
      setLoanType("");
    }
    // } catch (err) {
    //   console.log(err, "..");
    //   alert("Error: " + err.message);
    // }
  };

  const handleDisable = () => {
    if (name && phone && loanType) return false;
    else return true;
  };

  const handleChange = (e) => {
    setLoanType(e.target.value);
  };
  // const handleSubmit = () => {
  //  // const formele = document.querySelector("form");
  //   //e.preventDefault();
  //   const formData ={Name:name,PhoneNumber:phone};
  //   fetch(
  //     "https://script.google.com/macros/s/AKfycbyoQIja2lMLzB3LNW8Cv7e28BbO6kAnzBpXC_4z1rwAtuk2ckK-TxzSR3WPHb93_iB9/exec",
  //     { method: "POST", body: formData }
  //   );
  // };
  return (
    <div className="emi-container emi-container1">
      {title && <h3>{title}</h3>}
      <div className="form-group">
        <label>
          Full Name <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          value={name}
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>
          Phone Number <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="number"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
          required
          pattern="\d{10}"
          maxLength="10"
          minLength="10"
          title="Phone number must be exactly 10 digits"
        />
      </div>
      {/* {url != "/" && (
        <div className="form-group">
          <label>
            Loan Type <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            disabled="true"
            value="Personal Loan"
            placeholder="Personal Loan"
            onChange={(e) => setLoanType(e.target.value)}
          />
        </div>
      )} */}
      {/* {url == "/" && ( */}
      <div className="form-group">
        <label>
          Loan Type <span style={{ color: "red" }}>*</span>
        </label>
        <select value={loanType} onChange={handleChange}>
          {loanArr.map((item, index) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>
      {/* )} */}
      <button
        onClick={handleSubmit}
        disabled={
          name && phone && loanType && loanType != "Select Loan Type"
            ? false
            : true
        }
        className={name && phone && loanType ? "btnenabled" : "btndisabled"}
      >
        Submit
      </button>
      {success && (
        <div style={{ color: "green" }}>
          Thanks for reaching us,will get back to you 😊
        </div>
      )}
    </div>
  );
};

export default FormPage;
