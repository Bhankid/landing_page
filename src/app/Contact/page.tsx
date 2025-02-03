"use client";
import type { NextPage } from "next";
import Head from "next/head";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";

const Contact: NextPage = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "alfredfianyo50@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+233 554 572 904",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value: "No. 12, 1st Avenue, Tema Com. 9\nAccra, Ghana",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Business Hours",
      value: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Have questions? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="md:col-span-1 lg:col-span-1 space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-2xl border border-slate-700/50">
                <h2 className="text-xl font-semibold mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <ContactInfo
                      key={index}
                      icon={info.icon}
                      label={info.label}
                      value={info.value}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-1 lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
