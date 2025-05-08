const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  {
    label: "Unsecured Loans",
    children: [
      { label: "Personal Loan", path: "/personal-loan" },
      { label: "Transfer Personal Loan", path: "/transfer-loan" },
      { label: "Professional Loan", path: "/professional-loan" },
      { label: "Doctor Plan", path: "/doctor-plan" },
      { label: "Business Plan", path: "/business-plan" },
    ],
  },
  {
    label: "Secured Loans",
    children: [
      { label: "Project Funding", path: "/project-funding" },
      { label: "House Loan", path: "/house-loan" },
      { label: "Transfer Home Loan", path: "/transfer-home-loan" },
    ],
  },
  { label: "For Students", path: "/students" },
  { label: "Insurance & Investments", path: "/insurance" },
  { label: "Social Media Highlights", path: "/social" },
];

export default navLinks;
