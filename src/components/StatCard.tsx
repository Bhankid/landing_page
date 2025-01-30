"use client";

import React from "react";
import CountUp from "react-countup";
import { Star } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-2xl border border-slate-700/50 text-center hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
      <div className="bg-slate-900/50 p-3 rounded-xl w-fit mx-auto mb-4">
        <div className="text-blue-400">{icon}</div>
      </div>
      <div className="text-3xl font-bold mb-2">
        <span>
          <CountUp
            start={0}
            end={value}
            duration={2}
            separator=","
            decimal="."
            decimals={
              label === "Uptime" || label === "User Rating" ? 1 : 0
            }
          />
          {label === "Active Users" ? (
            "M+"
          ) : label === "Schools" ? (
            "+"
          ) : label === "Uptime" ? (
            "%"
          ) : label === "User Rating" ? (
            <span>
              /5{" "}
              <Star
                className="w-6 h-6 text-yellow-500"
                style={{ display: "inline-block", verticalAlign: "middle" }}
              />
            </span>
          ) : (
            ""
          )}
        </span>
      </div>
      <div className="text-slate-400">{label}</div>
    </div>
  );
};

export default StatCard;
