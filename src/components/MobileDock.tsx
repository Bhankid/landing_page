"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Settings, Currency, Info, Mail, User } from "lucide-react";

const MobileDock = () => {
  const pathname = usePathname();
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/Features", label: "Features", icon: Settings },
    { path: "/Pricing", label: "Pricing", icon: Currency },
    { path: "/About", label: "About", icon: Info },
    { path: "/Contact", label: "Contact", icon: Mail },
  ];

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-slate-900/50 backdrop-blur-lg border-t border-slate-700/50 p-4 flex justify-center space-x-2 z-50">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={
            pathname === item.path
              ? "bg-slate-700 p-2 rounded-full text-blue-400"
              : "bg-slate-700 p-2 rounded-full text-white hover:text-blue-400"
          }
        >
          <item.icon className="h-4 w-4" />
        </Link>
      ))}
      <Link href="/Login">
        <button className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 flex items-center space-x-1">
          <User className="h-4 w-4" />
        </button>
      </Link>
    </div>
  );
};

export default MobileDock;
