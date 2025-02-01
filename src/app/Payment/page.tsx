"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Swal from "sweetalert2";

// Define Paystack response type
interface PaystackResponse {
  reference: string;
}

// Define Paystack instance type
interface PaystackInstance {
  newTransaction: (options: {
    key: string;
    amount: number;
    email: string;
    metadata: {
      custom_fields: {
        display_name: string;
        variable_name: string;
        value: string;
      }[];
    };
    onSuccess: (response: PaystackResponse) => void;
    onCancel: () => void;
  }) => void;
}

// Disable SSR properly using dynamic()
const PaymentPage: React.FC = () => {
  const searchParams = useSearchParams();
  const initialPlan = searchParams?.get("plan") || "Starter";
  const initialAmount = searchParams?.get("amount") || "0";

  const plans = [
    { name: "Starter", amount: null }, // Editable amount, require 1-10
    { name: "Professional", amount: 500 },
    { name: "Enterprise", amount: null }, // Editable amount
  ];

  const [email, setEmail] = useState<string>("");
  const [selectedPlan, setSelectedPlan] = useState<string>(initialPlan);
  const [amountState, setAmount] = useState<number | "">(
    initialPlan === "Enterprise" || initialPlan === "Starter"
      ? ""
      : parseFloat(initialAmount)
  );
  const [PaystackPop, setPaystackPop] = useState<PaystackInstance | null>(null);

  useEffect(() => {
    import("@paystack/inline-js").then((module) =>
      setPaystackPop(new module.default())
    );
  }, []);

  // ✅ Fixed: `handlePlanChange` is now correctly used
  const handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPlanName = e.target.value;
    setSelectedPlan(selectedPlanName);

    const selectedPlan = plans.find((plan) => plan.name === selectedPlanName);

    if (selectedPlan && selectedPlan.amount !== null) {
      setAmount(selectedPlan.amount);
    } else {
      setAmount("");
    }
  };

  // ✅ Fixed: `handleAmountChange` is now correctly used
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value === "" ? "" : parseFloat(e.target.value));
  };

  const handlePayment = () => {
    if (!PaystackPop) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Payment module is still loading. Please wait a moment.",
      });
      return;
    }

    const parsedAmount =
      typeof amountState === "string" ? parseFloat(amountState) : amountState;

    if (selectedPlan === "Starter" && (parsedAmount < 1 || parsedAmount > 10)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Amount",
        text: "For the Free plan, please enter a value between 1 and 10.",
      });
      return;
    }

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

    PaystackPop?.newTransaction({
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
      onSuccess: (response: PaystackResponse) => {
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
          <label htmlFor="amount">Amount (GHS)</label>
          <input
            type="number"
            id="amount"
            value={amountState}
            onChange={handleAmountChange}
            disabled={selectedPlan === "Professional"}
            required
          />
        </div>

        <button type="button" onClick={handlePayment}>
          Pay Now
        </button>
      </form>
    </div>
  );
};

// Disable SSR for this component
export default dynamic(() => Promise.resolve(PaymentPage), { ssr: false });
