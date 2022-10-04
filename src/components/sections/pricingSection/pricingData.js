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
        "Has your business grown out of the wix or wordpress stage and you're ready to take your business growth to the next level? Experience a fully flushed out web design that fits your business needs in The Fire Plan!",
      pros: [
        "Up to 15 pages",
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
        "When you're ready to take your business to the next level of growth, the Wildfire Plan is for you. This includes a dedicated team of developers, a designer, a qa engineer, and a project manager.",
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