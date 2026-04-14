import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-600 mb-6">
                I'm a passionate full-stack developer with 4+ years of
                experience creating digital solutions that make a difference. I
                specialize in modern web technologies and love turning complex
                problems into simple, beautiful designs.
              </p>
              <p className="text-gray-600 mb-6">
                When I'm not coding, you can find me contributing to open-source
                projects, learning new technologies, or sharing knowledge with
                the developer community.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="font-semibold text-primary">6+</span>
                  <span className="text-gray-600 ml-2">Years Experience</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="font-semibold text-primary">50+</span>
                  <span className="text-gray-600 ml-2">Projects Completed</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="font-semibold text-primary">30+</span>
                  <span className="text-gray-600 ml-2">Happy Clients</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  Frontend
                </div>
                <p className="text-gray-600">React, Vue, Tailwind</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  Backend
                </div>
                <p className="text-gray-600">Laravel, Node.js, Python, SQL</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  Tools
                </div>
                <p className="text-gray-600">Git, Docker, AWS</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  Mobile
                </div>
                <p className="text-gray-600">React Native, Flutter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
