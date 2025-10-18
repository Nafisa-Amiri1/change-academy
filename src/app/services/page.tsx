
"use client";
import React from "react";

const features = [
    {
        title: "Web Developer",
        description:
            "We design and develop modern, responsive websites that deliver an optimal user experience. From user interface design to full website implementation, we bring your projects to life following the latest web development standards.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 392.186 392.186" fill="currentColor" className="w-6 h-6">
                <path d="M368.62,17.951H23.568C10.57,17.951,0,28.524,0,41.52v309.146c0,12.996,10.57,23.568,23.568,23.568h345.053 c12.994,0,23.564-10.572,23.564-23.568V41.52C392.188,28.525,381.614,17.951,368.62,17.951z M297.56,57.528..." />
            </svg>
        ),
    },
    {
        title: "Full Stack Developer",
        description:
            "We build secure, scalable, and high-performance backend systems that power modern applications. From database architecture to API development and server optimization, we ensure seamless functionality and reliability behind every digital experience.",
        icon: (
            <svg viewBox="0 0 508.034 508.034" fill="currentColor" className="w-6 h-6">
                <path d="M331.9,406.367c-7.8,0-14.1,6.3-14.1,14.1v6.7c0,7.8,6.3,14.1,14.1,14.1..." />
            </svg>
        ),
    },
    {
        title: "Figma Design",
        description:
            "We craft clean, intuitive, and high-quality UI/UX designs that power engaging digital experiences. From design systems to interactive prototypes and reusable components, we ensure seamless usability and visually appealing interfaces across every application.",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491z..." />
            </svg>
        ),
    },
    {
        title: "User Relationships",
        description:
            "We design and cultivate engaging user experiences that strengthen the connection between users and products. From interaction design to seamless digital communication, we ensure meaningful and lasting user relationships.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                <circle cx="22.83" cy="22.57" r="7.51" />
                <path d="M38,49.94a15.2,15.2,0,0,0-15.21-15.2..." />
            </svg>
        ),
    },
];

const FeaturesSection: React.FC = () => {
    return (
        <section className="bg-white dark:bg-[#18181b] py-24 sm:py-32 transition-colors duration-500 overflow-x-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-400">Our Services</h2>
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
                                    <div className="absolute top-6 left-6 flex w-12 h-12 items-center justify-center rounded-lg bg-[#68d2bc] text-white">
                                        {feature.icon}
                                    </div>
                                    {feature.title}
                                </dt>
                                <dd className="mt-2 text-gray-700 dark:text-gray-300">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
