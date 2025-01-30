"use client";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Award, Users, Globe, Heart } from "lucide-react";
import StatCard from "@/components/StatCard";

const About: NextPage = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: 10000,
      label: "Active Users",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      value: 250,
      label: "Schools",
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: 99.9,
      label: "Uptime",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      value: 4.9,
      label: "User Rating",
    },
  ];

  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              At EduAdminPro, we&apos;re passionate about transforming education
              through technology. Our mission is to provide educational
              institutions with the tools they need to focus on what matters
              most: teaching and learning.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/about.avif"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
                width={1200}
                height={800}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-slate-300">
                Founded in 2025 by Alfred Fianyo, a software engineer with a
                passion for innovative technology solutions, EduAdminPro emerged
                from a simple observation: educational institutions needed
                better tools to manage their operations in the digital age.
              </p>
              <p className="text-slate-300">
                With a vision to revolutionize the education sector, Alfred
                Fianyo set out to create a comprehensive school management
                system that would make education management more efficient and
                effective.
              </p>
              <p className="text-slate-300">
                Today, EduAdminPro is proud to serve millions of users across
                the nation, helping them focus on what truly matters - providing
                quality education to students. Our team of educators and
                developers work tirelessly to create solutions that make a real
                difference in the lives of students, teachers, and institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
