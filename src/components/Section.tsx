import React from 'react';

export default function ServicesSection() {
  return (
    <section className="bg-[#18181b] text-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 border-b-2 border-gray-700 inline-block pb-2">
          Our Services
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-300">
          At Change Academe, we provide high-quality services to help developers grow,
          designers create stunning interfaces, and backend specialists build robust systems.
          We connect passionate people with real projects and opportunities.
        </p>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-400">
              Building modern web applications with React, Next.js, and other technologies.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-400">
              Crafting beautiful user interfaces and experiences using Figma and design best practices.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Project Mentorship</h3>
            <p className="text-gray-400">
              Guiding beginners and team members to succeed in real-world projects and achieve goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
