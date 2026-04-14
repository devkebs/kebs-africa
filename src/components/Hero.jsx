import React, { useState, useEffect } from "react";
import profileImage from "../assets/BJ.jpeg";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    "Web Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    if (currentIndex < texts.length) {
      const currentText = texts[currentIndex];
      let charIndex = 0;

      const typingInterval = setInterval(() => {
        if (charIndex <= currentText.length) {
          setDisplayedText(currentText.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }, 2000);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [currentIndex]);

  const stats = [
    { number: "6+", label: "Years Experience" },
    { number: "30+", label: "Projects Completed" },
    { number: "20+", label: "Happy Clients" },
    { number: "10+", label: "Technologies" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Available for new opportunities
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Kehinde Bolaji
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6 h-12">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h2>

            <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">
              I build{" "}
              <span className="font-semibold text-primary">
                scalable web applications
              </span>{" "}
              that deliver exceptional user experiences and drive business
              growth. Currently specializing in
              <span className="font-semibold"> React ecosystems</span> and{" "}
              <span className="font-semibold">modern web technologies</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#projects"
                className="group bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center border border-primary/10"
              >
                View My Work
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="group border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
              >
                Let's discuss your project
                <svg
                  className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-100"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Clean Profile Card */}
          <div className="relative">
            <div className="relative">
              {/* Remove the glowing background effect */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8 transform group-hover:scale-[1.02] transition-all duration-300">
                <div className="w-48 h-48 mx-auto mb-6 relative">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center shadow-sm">
                      <img
                        src={profileImage}
                        alt="Profile Image"
                        className=" object-cover w-full h-full rounded-2xl"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 border-4 border-white rounded-full w-6 h-6 shadow-sm"></div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Kehinde Bolaji
                  </h3>
                  <p className="text-gray-600 mb-4">Full Stack Developer</p>

                  <div className="flex justify-center space-x-3 mb-6">
                    {["React", "Node.js", "TypeScript","PHP"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Availability</span>
                      <span className="text-green-600 font-semibold">
                        Immediate
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Location</span>
                      <span className="text-gray-700">Remote / Hybrid</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Status</span>
                      <span className="text-primary font-semibold">
                        Open to Work
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
