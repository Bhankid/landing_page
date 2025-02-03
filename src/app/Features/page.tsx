import type { NextPage } from "next";
import Head from "next/head";
import {
  PieChart,
  Shield,
  Clock,
  Users,
  Calendar,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const Features: NextPage = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Comprehensive Profile Management",
      description:
        "Manage student, parent, and teacher profiles with ease, including contact information and emergency contacts.",
    },
    {
      icon: <Calendar className="w-6 h-6 text-green-400" />,
      title: "Automated Timetable Generation",
      description:
        "Generate timetables automatically, taking into account teacher availability, room allocation, and other constraints.",
    },
    {
      icon: <PieChart className="w-6 h-6 text-yellow-400" />,
      title: "Real-Time Fee Tracking",
      description:
        "Track fees and payments in real-time, with automated reminders and notifications for overdue payments.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-400" />,
      title: "Interactive Dashboards",
      description:
        "Visualize data with interactive dashboards, providing insights into student performance, attendance, and other key metrics.",
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      title: "Detailed Reporting",
      description:
        "Generate detailed reports on student performance, attendance, and other key metrics, with customizable templates and filters.",
    },
    {
      icon: <Settings className="w-6 h-6 text-gray-400" />,
      title: "Customizable Settings",
      description:
        "Configure settings to meet your institution's specific needs, including customizable workflows and notification preferences.",
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: "Enterprise-Grade Security",
      description:
        "Ensure your data is protected with enterprise-grade security features, including encryption, access controls, and regular backups.",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      title: "Real-Time Notifications",
      description:
        "Stay updated with real-time notifications for important events, assignments, and announcements.",
    },
  ];

  return (
    <div>
      <Head>
        <title>Features</title>
      </Head>

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">
              Powerful Features for Modern Education
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Discover the tools that make EduAdminPro the leading choice for
              educational institutions nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
