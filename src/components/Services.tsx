"use client"
import React from "react";

const features = [
  {
    title: "Web Development",
    description:
      "We design and develop modern, responsive websites that deliver an optimal user experience. From user interface design to full website implementation, we bring your projects to life following the latest web development standards.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 392.186 392.186"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M368.62,17.951H23.568C10.57,17.951,0,28.524,0,41.52v309.146c0,12.996,10.57,23.568,23.568,23.568h345.053 c12.994,0,23.564-10.572,23.564-23.568V41.52C392.188,28.525,381.614,17.951,368.62,17.951z M297.56,57.528 c0-4.806,3.896-8.703,8.701-8.703h8.703c4.808,0,8.701,3.896,8.701,8.703v9.863c0,4.806-3.896,8.702-8.701,8.702h-8.703 c-4.805,0-8.701-3.896-8.701-8.702V57.528z M257.093,57.528c0-4.806,3.898-8.703,8.703-8.703h8.701 c4.805,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.898,8.702-8.703,8.702h-8.701c-4.805,0-8.703-3.896-8.703-8.702V57.528z M363.903,345.951H28.282V102.235h335.621V345.951L363.903,345.951z M364.132,67.391c0,4.806-3.896,8.702-8.701,8.702h-8.703 c-4.809,0-8.702-3.896-8.702-8.702v-9.863c0-4.806,3.896-8.703,8.702-8.703h8.703c4.806,0,8.701,3.896,8.701,8.703V67.391z"></path>
      </svg>
    ),
  },
  {
    title: "Backend Development",
    description:
      "We build secure, scalable, and high-performance backend systems that power modern applications. From database architecture to API development and server optimization, we ensure seamless functionality and reliability behind every digital experience.",
    icon: (
      <svg
        viewBox="0 0 508.034 508.034"
        fill="currentColor"
        className="w-6 h-6"
      >
        <g>
          <path d="M331.9,406.367c-7.8,0-14.1,6.3-14.1,14.1v6.7c0,7.8,6.3,14.1,14.1,14.1c7.8,0,14.1-6.3,14.1-14.1v-6.7C346,412.767,339.7,406.367,331.9,406.367z" />
          <path d="M500.2,427.967l-94.3-153.8c9.4-9.9,14.8-23,14.8-37.2v-51.4c0-16.2-7.2-30.8-18.6-40.7c11.4-10.3,18.6-25.1,18.6-41.6v-46.8c0-31.1-25.3-56.4-56.4-56.4H56.4c-31.1,0-56.4,25.3-56.4,56.4v46.7c0,16.5,7.2,31.3,18.5,41.7c-11.3,9.9-18.5,24.5-18.5,40.6v51.4c0,15.9,6.9,30,17.8,39.9c-10.9,10-17.8,24.3-17.8,40.1v51.4c0,29.8,24.3,54.1,54.1,54.1H167l-3.4,5.5c-21.5,35.1,3.7,80.1,44.9,80.1h246.8C496.4,508.067,521.7,462.967,500.2,427.967z" />
        </g>
      </svg>
    ),
  },
  {
    title: "Figma Designer",
    description:
      "We craft clean, intuitive, and high-quality UI/UX designs that power engaging digital experiences. From design systems to interactive prototypes and reusable components, we ensure seamless usability and visually appealing interfaces across every application.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51z" />
      </svg>
    ),
  },
  {
    title: "User Relationships",
    description:
      "We design and cultivate engaging user experiences that strengthen the connection between users and products. From interaction design to seamless digital communication, we ensure meaningful and lasting user relationships.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="w-6 h-6"
      >
        <circle cx="22.83" cy="22.57" r="7.51" />
        <path d="M38,49.94a15.2,15.2,0,0,0-15.21-15.2h0a15.2,15.2,0,0,0-15.2,15.2Z" />
        <circle cx="44.13" cy="27.22" r="6.05" />
        <path d="M42.4,49.94h14A12.24,12.24,0,0,0,44.13,37.7h0a12.21,12.21,0,0,0-5.75,1.43" />
      </svg>
    ),
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#18181b] py-24 sm:py-32 transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
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

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid gap-x-8 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative pl-16 p-6 m-2 rounded-xl shadow-md border border-transparent hover:border-[#68d2bc] hover:shadow-lg transition-all duration-300 bg-gray-50 dark:bg-[#242424]"
              >
                <dt className="text-base font-semibold text-gray-900 dark:text-white">
                  <div className="absolute top-0 left-0 flex w-12 h-12 items-center justify-center rounded-lg bg-[#68d2bc] mt-2 ml-2 text-white">
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
    </div>
  );
};

export default FeaturesSection;
