export const demoEntrepreneurs = [
  {
    id: "KGM-00021",
    businessName: "Katosho Honey & Wax",
    district: "Kigoma MC",
    sector: "Agri-business",
    stage: "Incubation",
    isWomenOrYouth: true,
    greenPractice: true,
    riskFlag: false,
    suggestedAction:
      "Complete product labeling and test 2 new retail channels before moving to Market Readiness.",
    coaching: {
      lastDate: "2026-01-18",
      nextDate: "2026-02-05",
      topic: "Pricing & recordkeeping (IYB Marketing)",
      actions: [
        "Update cost sheet for 3 SKUs",
        "Start weekly sales log",
        "Test 1 new outlet (Kigoma mjini)",
      ],
    },
    finance: {
      score: 55,
      bookkeeping: "Basic records",
      account: "Mobile money only",
      applicationStatus: "In progress",
      institution: "NMB (SME desk)",
    },
    compliance: {
      tin: "In progress",
      license: "Pending",
      registration: "Group registered",
    },
  },
  {
    id: "KGM-00034",
    businessName: "Mole Fish Farm Services",
    district: "Kigoma Rural",
    sector: "Aquaculture",
    stage: "Market Readiness",
    isWomenOrYouth: true,
    greenPractice: true,
    riskFlag: true,
    riskReason:
      "No coaching follow-up completed in 30 days and compliance items pending.",
    suggestedAction:
      "Schedule urgent coaching session and finalize TIN + local license to reduce risk and unlock finance linkage.",
    coaching: {
      lastDate: "2025-12-20",
      nextDate: "2026-02-03",
      topic: "Operations planning & cashflow",
      actions: [
        "Finalize production plan",
        "Start daily feed log",
        "Prepare simple cashflow for 3 months",
      ],
    },
    finance: {
      score: 62,
      bookkeeping: "Basic records",
      account: "Bank/MFI account",
      applicationStatus: "Not started",
      institution: "CRDB (SME)",
    },
    compliance: {
      tin: "Pending",
      license: "In progress",
      registration: "Informal",
    },
  },
  {
    id: "KSL-00011",
    businessName: "Kigoma Green Soap Collective",
    district: "Kasulu",
    sector: "Manufacturing",
    stage: "Finance Linkages",
    isWomenOrYouth: true,
    greenPractice: true,
    riskFlag: false,
    suggestedAction:
      "Submit loan application with attached records and confirmed off-taker order to improve approval chance.",
    coaching: {
      lastDate: "2026-01-22",
      nextDate: "2026-02-08",
      topic: "Pitch readiness & documentation",
      actions: [
        "Compile sales records (8 weeks)",
        "Prepare 1-page business profile",
        "Collect 2 supplier quotations",
      ],
    },
    finance: {
      score: 78,
      bookkeeping: "Consistent records",
      account: "Bank/MFI account",
      applicationStatus: "Submitted",
      institution: "SACCO + link to NMB",
    },
    compliance: {
      tin: "Completed",
      license: "Completed",
      registration: "Business registered",
    },
  },
];
