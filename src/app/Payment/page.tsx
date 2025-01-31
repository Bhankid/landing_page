"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import PaystackPop from "@paystack/inline-js";
import Swal from "sweetalert2";

const PaymentPage = () => {
  const searchParams = useSearchParams();
  const initialPlan = searchParams.get("plan") || "Starter";
  const initialAmount = searchParams.get("amount") || "0";

  const plans = [
    { name: "Starter", amount: null }, // Editable amount, require 1-10
    { name: "Professional", amount: 500 },
    { name: "Enterprise", amount: null }, // Editable amount
  ];

  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(initialPlan);
  const [amountState, setAmount] = useState<string | number>(
    initialPlan === "Enterprise" || initialPlan === "Starter"
      ? ""
      : parseFloat(initialAmount)
  );

  const handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPlanName = e.target.value;
    setSelectedPlan(selectedPlanName);

    const selectedPlan = plans.find((plan) => plan.name === selectedPlanName);

    if (selectedPlan && selectedPlan.amount !== null) {
      // If the plan has a predefined amount, set it
      setAmount(selectedPlan.amount);
    } else {
      // Allow user to manually enter the amount for editable plans
      setAmount("");
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value === "" ? "" : parseFloat(e.target.value));
  };

  const handlePayment = () => {
    const parsedAmount =
      typeof amountState === "string" ? parseFloat(amountState) : amountState;

    // Validate Free plan (Starter) amount between 1 and 10
    if (selectedPlan === "Starter" && (parsedAmount < 1 || parsedAmount > 10)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Amount",
        text: "For the Free plan, please enter a value between 1 and 10.",
      });
      return;
    }

    // General validation for other plans
    if (!parsedAmount || parsedAmount <= 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Amount",
        text: "Please enter a valid amount to proceed with the payment.",
      });
      return;
    }

    Swal.fire({
      title: "Confirm Payment",
      text: `You are about to pay GHS ${parsedAmount} for the ${selectedPlan} plan. Proceed?`,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#114CCBFF",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        initiatePayment(parsedAmount);
      } else {
        Swal.fire({
          icon: "error",
          title: "Payment Canceled",
          text: "You canceled the payment process.",
        });
      }
    });
  };

  const initiatePayment = (parsedAmount: number) => {
    const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

    if (!publicKey) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Paystack public key is not set",
      });
      return;
    }

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: publicKey,
      amount: parsedAmount * 100, // Convert to kobo
      email,
      metadata: {
        custom_fields: [
          {
            display_name: "Plan",
            variable_name: "plan",
            value: selectedPlan,
          },
        ],
      },
      onSuccess: (response) => {
        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          text: `Reference: ${response.reference}`,
        });
      },
      onCancel: () => {
        Swal.fire({
          title: "Cancel Payment?",
          text: "Are you sure you want to cancel the payment?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#114CCBFF",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, cancel payment",
          cancelButtonText: "No, proceed with payment",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              icon: "error",
              title: "Payment Canceled",
              text: "You canceled the payment process.",
            });
          } else {
            initiatePayment(parsedAmount);
          }
        });
      },
    });
  };

  return (
    <div className="container mx-auto px-6 pt-24 pb-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Payment</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Please enter your email, select a plan, and proceed with payment.
        </p>
      </div>

      <form>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="plan" className="block text-sm font-medium mb-2">
            Select Plan
          </label>
          <select
            id="plan"
            value={selectedPlan}
            onChange={handlePlanChange}
            className="w-full px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
            required
          >
            {plans.map((plan, index) => (
              <option key={index} value={plan.name}>
                {plan.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="amount" className="block text-sm font-medium mb-2">
            Amount (GHS)
          </label>
          <input
            type="number"
            id="amount"
            value={amountState}
            onChange={handleAmountChange}
            className="w-full px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
            disabled={selectedPlan === "Professional"} // Enable for Starter and Enterprise
            required
          />
        </div>

        <button
          type="button"
          onClick={handlePayment}
          className="w-full bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full transition-all transform hover:scale-105"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
