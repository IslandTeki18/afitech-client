export const PRICING_TIERS = [
    {
      name: "The Spark Plan",
      lowPrice: 500,
      highPrice: 5000,
      tierType: "Basic",
      description:
        "This is for new start-ups or smaller businesses. You may not want or need a designer but the websites we build are scalable, elegant, and ready to go right out of the box.",
      pros: [
        "1 to 5 pages",
        "Fast to launch",
        "Prebuilt templates ready to work",
        "Cost Effective",
      ],
      cons: ["Dedicated Designer", "Custom Functionality"],
      isAvailable: true,
    },
    {
      name: "The Fire Plan",
      lowPrice: 5000,
      highPrice: 15000,
      tierType: "Business",
      description:
        "If you need specific features on your website built, a bigger web application, a full redesign of youre current site, look no further as this plan is a 'Rock' solid choice.",
      pros: [
        "5 to 15 pages",
        "Dedicated Designer",
        "Style guide / custom designs",
        "Basic Ecommerce Funcionality",
        "Code Customization",
      ],
      cons: ["Marketing & Analytic Tools"],
      isAvailable: true,
    },
    {
      name: "The Wildfire Plan",
      lowPrice: 15000,
      highPrice: null,
      tierType: "Enterprise",
      description:
        "When you're to take your business to the next level of growth, the boulder plan is for you. This includes a team of developers, a designer, a qa engineer, and a project manager.",
      pros: [
        "Up to 30 pages",
        "Multi Application",
        "Style guide / custom designs",
        "Enterprise level marketing & analytics",
        "Custom functionality",
        "Control over designs, and layout",
      ],
      cons: [],
      isAvailable: false,
    },
  ];