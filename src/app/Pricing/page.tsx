"use client";

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
      <div className="container mx-auto pt-28 pb-24 md:pt-32 lg:pt-40 xl:pt-48">
        <div className="text-center mb-16 md:mb-20 lg:mb-24 xl:mb-28">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl xl:text-7xl">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto md:text-xl lg:text-2xl xl:text-3xl">
            Choose the perfect plan for your institution&apos;s needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12 max-w-6xl mx-auto md:gap-10 lg:gap-12 xl:gap-16 p-4 md:p-6 lg:p-8 xl:p-10">
          {plans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
