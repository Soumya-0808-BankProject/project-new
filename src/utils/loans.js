import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";
import CarRepairIcon from "@mui/icons-material/CarRepair";

const loans = [
  {
    type: "Unsecured loans",
    description:
      "Get quick and hassle-free loans without the need for collateral. Whether for personal or business needs, our unsecured loans offer flexible repayment options and fast approval to help you achieve your financial goals. ",
    subtypes: [
      {
        title: "Personal Loan",
        icon: <HomeIcon />,
        description:
          "Instant loans for salaried employees with flexible repayment options.",
        link: "/personal-loan",
      },
      {
        title: "Transfer Personal Loan",
        icon: <HomeIcon />,
        description:
          "Reduce your EMI with lower interest rates on existing loans.",
        link: "/transfer-personal-loan",
      },
      {
        title: "Professional Loan",
        icon: <HomeIcon />,
        description:
          "Special financing for CAs and salaried doctors to support their careers.",
        link: "/professional-loan",
      },
      {
        title: "Doctor Loan",
        icon: <HomeIcon />,
        description:
          "Fund hospital equipment purchases and renovation expenses effortlessly.",
        link: "/doctor-loan",
      },
      {
        title: "Business Loan",
        icon: <HomeIcon />,
        description:
          "Flexible financial solutions for partnerships to grow their businesses.",
        link: "/business-loan",
      },
      {
        title: "Credit Cards",
        icon: <HomeIcon />,
        description: "Enjoy rewards, cashback, and easy spending.",
        link: "/credit-cards",
      },
      {
        title: "Salaried Overdraft",
        icon: <HomeIcon />,
        description:
          "Emergency funds with flexible repayment for salaried individuals.",
        link: "/salaried-overdraft",
      },
    ],
  },
  {
    type: "Secured Loans",
    description:
      "Get high loan amounts at affordable interest rates by securing your assets. Whether for a home, business, or vehicle, our secured loans offer flexible repayment options and quick approvals to help you achieve your financial goals with ease.",
    subtypes: [
      {
        title: "Project Funding",
        icon: <BusinessIcon />,
        description:
          "Ideal for builders to finance under-construction projects.",
        link: "/project-funding",
      },
      {
        title: "House Loan",
        icon: <BusinessIcon />,
        description: "Affordable financing for your dream home.",
        link: "/house-loan",
      },
      {
        title: "Transfer Home Loan",
        icon: <BusinessIcon />,
        description: "Lower your EMI by transferring your existing home loan.",
        link: "/transfer-home-loan",
      },
      {
        title: "Loan Against Property",
        icon: <BusinessIcon />,
        description: "Get funds by leveraging your property’s value",
        link: "/loan-against-property",
      },
      {
        title: "New Car Loan",
        icon: <BusinessIcon />,
        description: "Drive home your dream car with easy financing.",
        link: "/new-car-loan",
      },
      {
        title: "Used Car Loan",
        icon: <BusinessIcon />,
        description: "Hassle-free loans for pre-owned vehicles.",
        link: "/used-car-loan",
      },
    ],
  },
  {
    type: "For Students",
    description:
      "Get hassle-free education loans with low interest rates and flexible repayment options. Fund your tuition, books, and living expenses with quick approvals and minimal paperwork. Empower your dreams with the right financial support!",
    subtypes: [
      {
        title: "Educational Loans",
        icon: <SchoolIcon />,
        description:
          "Easy financing for students with low interest rates and flexible repayment options.",
        link: "/educational-loans",
      },
    ],
  },
  {
    type: "Insurance and investments",
    description:
      "Protect yourself and your assets with comprehensive insurance plans. From life and health to travel and vehicle coverage, our solutions offer peace of mind with flexible plans and reliable benefits. Invest in a secure tomorrow today!",
    subtypes: [
      {
        title: "Life Insurance",
        icon: <CarRepairIcon />,
        description:
          "Ensure your family’s financial security with long-term protection and benefits.",
        link: "/life-insurance",
      },
      {
        title: "Term Insurance",
        icon: <CarRepairIcon />,
        description:
          "Get high coverage at affordable premiums for complete peace of mind.",
        link: "/term-insurance",
      },
      {
        title: "Health Insurance",
        icon: <CarRepairIcon />,
        description:
          "Cover medical expenses with cashless hospitalization and emergency care.",
        link: "/health-insurance",
      },
      {
        title: "General Insurance",
        icon: <CarRepairIcon />,
        description:
          "Safeguard your home, business, and valuable assets from unforeseen risks.",
        link: "/general-insurance",
      },
      {
        title: "Travel Insurance",
        icon: <CarRepairIcon />,
        description:
          "Stay protected against trip cancellations, medical emergencies, and travel mishaps.",
        link: "/travel-insurance",
      },
      {
        title: "Car Insurance",
        icon: <CarRepairIcon />,
        description:
          "Secure your vehicle with comprehensive coverage against accidents, theft, and damages.",
        link: "car-insurance",
      },
      {
        title: "Commercial Vehicle Insurance",
        icon: <CarRepairIcon />,
        description:
          "Protect your business fleet with customized coverage plans",
        link: "/commercial-vehicle-insurance",
      },
    ],
  },
];

export default loans;
