"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Loading = () => {
  const [progress, setProgress] = useState(0); // Track loading progress
  const router = useRouter();

  useEffect(() => {
    // Simulate loading time (e.g., 5 seconds)
    const loadingTime = 5000; // 5 seconds
    const intervalTime = 50; // Update progress every 50ms

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1; // Increment progress
      });
    }, intervalTime);

    // Redirect after loading time
    const timeout = setTimeout(() => {
      router.push("/dashboard"); // Replace with your target route
    }, loadingTime);

    // Cleanup
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <div className="container flex items-center justify-center ">
      <div className="text-center space-y-6">
        {/* Animated Spinner */}
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute w-full h-full rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
          <div className="absolute w-full h-full rounded-full border-4 border-secondary border-b-transparent animate-spin-reverse"></div>
        </div>

        {/* Loading Text with Progress */}
        <h1 className="text-3xl font-bold text-neutral animate-pulse">
          Loading<span className="animate-bounce">.</span>
          <span className="animate-bounce delay-100">.</span>
          <span className="animate-bounce delay-200">.</span>
        </h1>

        {/* Progress Bar */}
        <div className="w-48 h-2 bg-base-200 rounded-full overflow-hidden mt-4 mx-auto">
          <div
            className="h-full bg-primary rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Subtle Background Animation */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute w-64 h-64 rounded-full bg-primary/10 animate-float -top-32 -left-32"></div>
          <div className="absolute w-96 h-96 rounded-full bg-secondary/10 animate-float-reverse -bottom-48 -right-48"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
