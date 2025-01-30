import type { NextPage } from "next";
import Head from "next/head";
import PricingPlan from "@/components/PricingPlan";

const Pricing: NextPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for small schools just getting started.",
      features: [
        "Up to 100 students",
        "Basic attendance tracking",
        "Simple grade book",
        "Email support",
        "Basic reporting",
      ],
    },
    {
      name: "Professional",
      price: "GH₵ 500",
      period: "/month",
      description: "Ideal for growing educational institutions.",
      popular: true,
      features: [
        "Up to 1000 students",
        "Advanced student tracking system",
        "Complete Fee management",
        "24/7 priority support",
        "Advanced analytics",
        "Parent profile",
        "Custom branding",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large institutions with specific needs.",
      features: [
        "Unlimited students",
        "Custom features",
        "Dedicated support team",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee",
        "On-premise option",
        "Training & onboarding",
      ],
    },
  ];

  return (
    <div>
      <Head>
        <title>Pricing</title>
      </Head>
      <div className="container mx-auto pt-24 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Choose the perfect plan for your institution&apos;s needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
