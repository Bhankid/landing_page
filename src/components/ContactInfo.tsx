import React, { JSX } from "react";

interface ContactInfoProps {
  icon: JSX.Element;
  label: string;
  value: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, label, value }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="bg-slate-900/50 p-3 rounded-xl">{icon}</div>
      <div>
        <p className="text-sm text-slate-400">{label}</p>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
