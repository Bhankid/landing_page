"use client";
import type { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { School } from "lucide-react";
import MobileDock from "./MobileDock";

interface NavigationProps {
  isLoggedIn?: boolean;
  userRole?: string;
}

const Navigation: NextPage<NavigationProps> = ({}) => {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50">
      {/* Desktop Navigation */}
      <div className="block md:flex bg-slate-900/50 backdrop-blur-lg border-b border-slate-700/50 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <School className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">EduAdminPro</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "relative px-2 py-1 transition-colors text-blue-400"
                  : "relative px-2 py-1 transition-colors text-white hover:text-blue-400"
              }
            >
              Home
            </Link>
            <Link
              href="/Features"
              className={
                pathname === "/Features"
                  ? "relative px-2 py-1 transition-colors text-blue-400"
                  : "relative px-2 py-1 transition-colors text-white hover:text-blue-400"
              }
            >
              Features
            </Link>
            <Link
              href="/Pricing"
              className={
                pathname === "/Pricing"
                  ? "relative px-2 py-1 transition-colors text-blue-400"
                  : "relative px-2 py-1 transition-colors text-white hover:text-blue-400"
              }
            >
              Pricing
            </Link>
            <Link
              href="/About"
              className={
                pathname === "/About"
                  ? "relative px-2 py-1 transition-colors text-blue-400"
                  : "relative px-2 py-1 transition-colors text-white hover:text-blue-400"
              }
            >
              About
            </Link>
            <Link
              href="/Contact"
              className={
                pathname === "/Contact"
                  ? "relative px-2 py-1 transition-colors text-blue-400"
                  : "relative px-2 py-1 transition-colors text-white hover:text-blue-400"
              }
            >
              Contact
            </Link>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-all transform hover:scale-105">
              Login
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Dock */}
      <div className="md:hidden">
        <MobileDock />
      </div>
    </nav>
  );
};

export default Navigation;