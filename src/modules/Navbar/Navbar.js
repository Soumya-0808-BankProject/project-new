import React from 'react'
import './navbar.css'
import professionalbanking from '../../assets/images/professionalbankers.jpeg'

  const Navbar=()=>{

    return(
         <nav class="navbar">
    <div class="navbar-logo"><img src={professionalbanking} style={{width:"100%",height:"100%"}}/></div>
    <ul class="navbar-menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About Us</a></li>

      <li class="dropdown">
        <a href="#">
          Unsecured Loans
          <span class="arrow"></span>
        </a>
        <ul class="dropdown-menu">
          <li><a href="#">Personal Loan</a></li>
          <li><a href="#">Transfer Personal Loan</a></li>
          <li><a href="#">Professional Loan</a></li>
          <li><a href="#">Doctor Plan</a></li>
          <li><a href="#">Business Plan</a></li>
        </ul>
      </li>

      <li class="dropdown">
        <a href="#">
          Secured Loans
          <span class="arrow"></span>
        </a>
        <ul class="dropdown-menu">
          <li><a href="#">Project Funding</a></li>
          <li><a href="#">House Loan</a></li>
          <li><a href="#">Transfer Home Loan</a></li>
        </ul>
      </li>

      <li><a href="#">For Students</a></li>
      <li><a href="#">Insurance & Investments</a></li>
      <li><a href="#">Social Media Highlights</a></li>
    </ul>
  </nav>

    )

}
export default Navbar;