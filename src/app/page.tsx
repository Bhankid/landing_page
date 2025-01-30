
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  GraduationCap,
  Users,
  Calendar,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import FeatureCard from "../components/FeatureCard";
import Link from "next/link";

const Home: NextPage = () => {
  const features = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
      title: "Student Management",
      description: "Comprehensive student profiles and academic tracking",
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Staff Portal",
      description: "Streamlined tools for teachers and administrators",
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-500" />,
      title: "Schedule Planning",
      description: "Intelligent timetable management system",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-600" />,
      title: "Analytics Dashboard",
      description: "Real-time insights and performance metrics",
    },
  ];

  return (
    <div>
      <Head>
        <title>Next-Gen School Management Solution</title>
      </Head>

      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Next-Gen School Management
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
                {" "}
                Solution
              </span>
            </h1>
            <p className="text-lg text-slate-300">
              Transform your educational institution with our comprehensive
              management system designed for the modern era.
            </p>
            <div className="flex space-x-4">
              <Link href="/Pricing">
                <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full flex items-center space-x-2 transition-all transform hover:scale-105">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <button className="border border-red-500 hover:border-blue-600 px-8 py-3 rounded-full transition-all transform hover:scale-105">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/bg.png"
              alt="Students using modern technology"
              className="rounded-2xl shadow-2xl animate-float"
              width={1500}
              height={1000}
            />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
  );
};

export default Home;
