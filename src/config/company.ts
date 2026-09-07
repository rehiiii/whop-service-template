export const companyConfig = {
  name: "SparkleClean Co.",
  tagline: "Professional Cleaning Service Plan",
  description: "Book estimate, pay deposit with Whop Payments, get final invoice. Fully reusable template.",
  phone: "(555) 123-4567",
  email: "hello@sparkleclean.com",
  address: "123 Main St, Austin, TX",
  services: [
    { id: "standard", name: "Standard Clean", desc: "2-bed, 2-bath home", basePrice: 150, time: "2-3 hrs" },
    { id: "deep", name: "Deep Clean", desc: "Detailed top-to-bottom", basePrice: 250, time: "4-5 hrs" },
    { id: "moveout", name: "Move-Out Clean", desc: "For renters & landlords", basePrice: 350, time: "5-6 hrs" },
  ],
  pricing: { depositAmount: 50, taxRate: 0.08 },
  whop: { appId: "app_XXXXXXXX", productId: "prod_XXXXXXXX", planId: "plan_XXXXXXXX", pixelsEnabled: true },
  branding: { primaryColor: "#7c3aed", logoText: "SC" }
};
