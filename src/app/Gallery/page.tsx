"use client";

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Video } from "lucide-react";
import Link from "next/link";

const Gallery: NextPage = () => {
  const images = [
    {
      src: "/img1.png",
      alt: "Image 1",
    },
    {
      src: "/img2.png",
      alt: "Image 2",
    },
    {
      src: "/img3.png",
      alt: "Image 3",
    },
    {
      src: "/img4.png",
      alt: "Image 4",
    },
  ];

  const videos = [
    {
      src: "/vid1.mp4",
      alt: "Video 1",
    },
    {
      src: "/vid2.mp4",
      alt: "Video 2",
    },
    {
      src: "/vid3.mp4",
      alt: "Video 3",
    },
    {
      src: "/vid4.mp4",
      alt: "Video 4",
    },
  ];

  return (
    <div>
      <Head>
        <title>Gallery</title>
      </Head>

      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24 xl:pt-48 xl:pb-28">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          <div className="md:w-1/2 space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Gallery
            </h1>
            <p className="text-lg text-slate-300">
              Explore our gallery to see our school management system in action.
            </p>
            <div className="flex space-x-4">
              <Link href="/Pricing">
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full flex items-center space-x-2 transition-all transform hover:scale-105">
                  <span>Get Started</span>
                  <Video className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
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

      {/* Image Grid */}
      <div className="container mx-auto px-6 py-10 md:py-20 lg:py-24 xl:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-lg p-1 rounded-2xl border border-slate-700/50 animate-bounce delay-100 relative overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="rounded-2xl shadow-md transition-all duration-300"
                width={800}
                height={600}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-transparent hover:bg-slate-900/50 transition-all duration-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="rounded-2xl shadow-md transition-all duration-300"
                  width={800}
                  height={600}
                  style={{
                    transform: "scale(1.2)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Grid */}
      <div className="container mx-auto px-6 py-10 md:py-20 lg:py-24 xl:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-slate-800/ 50 backdrop-blur-lg p-1 rounded-2xl border border-slate-700/50 animate-fade-in-up delay-200"
            >
              <video
                src={video.src}
                className="rounded-2xl shadow-md"
                width={800}
                height={600}
                controls
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
