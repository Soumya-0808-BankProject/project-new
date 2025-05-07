import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css"; // Include your custom styles

const EMICarousel = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [loanTenure, setLoanTenure] = useState(12);
  //const [emi, setEmi] = useState(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [loanYears, setLoanYears] = useState(20);
  const [loanMonths, setLoanMonths] = useState(0);

  const totalMonths = parseInt(loanYears) * 12 + parseInt(loanMonths);
  const monthlyRate = parseFloat(interestRate) / 12 / 100;

  const emi =
    loanAmount && interestRate && totalMonths
      ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      : 0;

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  const handleApply = () => {
    alert(`Application submitted by ${name}, Phone: ${phone}`);
  };

  return (
    <div className="carousel-wrapper">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay={true}
        interval={1000}
        useKeyboardArrows
      >
        {/* Slide 1: EMI Calculator + Form */}
        <div className="slide slide-flex">
          <div className="half">
            <h2>EMI Calculator</h2>
            <div className="emi-container">
              <div className="emi-left">
                <div className="form-group">
                  <label>Loan Amount (₹)</label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
                  />
                </div>
                <div className="form-group">
                  <label>Interest Rate (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) =>
                      setInterestRate(parseFloat(e.target.value))
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Loan Tenure</label>
                  <div className="tenure-row">
                    <input
                      type="number"
                      value={loanYears}
                      onChange={(e) => setLoanYears(parseInt(e.target.value))}
                    />
                    <span>Yr</span>
                    <input
                      type="number"
                      value={loanMonths}
                      onChange={(e) => setLoanMonths(parseInt(e.target.value))}
                    />
                    <span>Mo</span>
                  </div>
                </div>
              </div>

              <div className="emi-right">
                <div className="result-box">
                  <label>Loan EMI</label>
                  <p>₹ {emi ? emi.toFixed(0) : 0}</p>
                </div>
                <div className="result-box">
                  <label>Total Interest Payable</label>
                  <p>₹ {emi ? totalInterest.toFixed(0) : 0}</p>
                </div>
                <div className="result-box">
                  <label>Total (Principal + Interest)</label>
                  <p>₹ {emi ? totalPayment.toFixed(0) : 0}</p>
                </div>
              </div>
            </div>
            {/* <div className="form-group">
              <label>Loan Amount</label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Interest Rate (%)</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Loan Tenure (months)</label>
              <input
                type="number"
                value={loanTenure}
                onChange={(e) => setLoanTenure(e.target.value)}
              />
            </div>
            <button onClick={calculateEMI}>Calculate EMI</button>
            {emi && <p className="emi-result">Estimated EMI: ₹{emi}</p>} */}
          </div>

          <div className="half">
            <h2>Apply Now</h2>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button onClick={handleApply}>Apply Now</button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slide">
          <h2>How It Works</h2>
          <p>
            Enter your loan details to calculate your monthly EMI instantly.
            Fill out the form to apply online.
          </p>
        </div>

        {/* Slide 3 */}
        <div className="slide">
          <h2>Contact Support</h2>
          <p>Email: help@loanmate.com</p>
          <p>Phone: +91 99999 12345</p>
        </div>
      </Carousel>
    </div>
  );
};

export default EMICarousel;
