"use client";
import React from "react";

const features = [
    {
        title: "Web Developer",
        description:
            "We design and develop modern, responsive websites that deliver an optimal user experience. From user interface design to full website implementation, we bring your projects to life following the latest web development standards.",
        icon: (
            <img
                src="/images/coding.png"
                alt="Full Stack Developer"
                className="w-8 h-8 object-contain"
            />
        ),
    },
    {
        title: "Full Stack Developer",
        description:
            "We build secure, scalable, and high-performance backend systems that power modern applications. From database architecture to API development and server optimization, we ensure seamless functionality and reliability behind every digital experience.",
        icon: (
            <img
                src="/images/coding.png"
                alt="Full Stack Developer"
                className="w-8 h-8 object-contain"
            />
        ),
    },
    {
        title: "Figma Design",
        description:

            "We craft clean, intuitive, and high-quality UI/UX designs that power engaging digital experiences. From design systems to interactive prototypes and reusable components, we ensure seamless usability and visually appealing interfaces across every application.",
        icon: (
            <img
                src="/images/coding.png"
                alt="Full Stack Developer"
                className="w-8 h-8 object-contain"
            />
        ),
    },
    {
        title: "User Relationships",
        description:
            "We design and cultivate engaging user experiences that strengthen the connection between users and products. From interaction design to seamless digital communication, we ensure meaningful and lasting user relationships.",
        icon: (
            <img
                src="/images/coding.png"
                alt="Full Stack Developer"
                className="w-8 h-8 object-contain"
            />
        ),
    },
];

const FeaturesSection: React.FC = () => {
    return (
        <section className="bg-white dark:bg-[#18181b] py-24 sm:py-32 transition-colors duration-500 overflow-x-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
                        Our Services
                    </h2>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                        Complete solutions for your digital success
                    </p>
                    <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
                        From web development and UI/UX design to programming training and tech consulting,
                        our services are tailored to your needs. Whether you are a beginner or a professional,
                        we are here to support your growth and projects.
                    </p>
                </div>

                <div className="mt-16 sm:mt-20 lg:mt-24">
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="relative bg-gray-50 dark:bg-[#242424] p-6 pl-16 rounded-xl shadow-md border border-transparent hover:border-[#68d2bc] hover:shadow-lg transition-all duration-300"
                            >
                                <dt className="text-base font-semibold text-gray-900 dark:text-white">
                                    <div className="absolute top-4 left-1 flex w-12 h-12 items-center justify-center rounded-lg bg-[#68d2bc] text-white">
                                        {feature.icon}
                                    </div>
                                    {feature.title}
                                </dt>
                                <dd className="mt-2 text-gray-700 dark:text-gray-300">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
