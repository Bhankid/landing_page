"use client";
import type { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { School } from "lucide-react";

interface NavigationProps {
  // Example: Add properties here
  isLoggedIn?: boolean;
  userRole?: string;
}

const Navigation: NextPage<NavigationProps> = ({}) => {
  // Use the props as needed
  const pathname = usePathname();
 const navItems = [
   { path: "/", label: "Home" },
   { path: "/Features", label: "Features" },
   { path: "/Pricing", label: "Pricing" },
   { path: "/About", label: "About" },
   { path: "/Contact", label: "Contact" },
 ];

  return (
    <nav className="fixed w-full bg-slate-900/50 backdrop-blur-lg border-b border-slate-700/50 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <School className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">EduAdminPro</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={
                  pathname === item.path
                    ? "relative px-2 py-1 transition-colors text-blue-400"
                    : "relative px-2 py-1 transition-colors text-white hover:text-blue-400"
                }
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-all transform hover:scale-105">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
