// "use client";
// import React from "react";

// const features = [
//     {
//         title: "Web Developer",
//         description:
//             "We design and develop modern, responsive websites that deliver an optimal user experience. From user interface design to full website implementation, we bring your projects to life following the latest web development standards.",
//         icon: (
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-square-code-icon lucide-square-code"
//             >
//                 <path d="m10 9-3 3 3 3" />
//                 <path d="m14 15 3-3-3-3" />
//                 <rect x="3" y="3" width="18" height="18" rx="2" />
//             </svg>
//         ),
//     },
//     {
//         title: "Full Stack Developer",
//         description:
//             "We build secure, scalable, and high-performance backend systems that power modern applications. From database architecture to API development and server optimization, we ensure seamless functionality and reliability behind every digital experience.",
//         icon: (
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-server-cog-icon lucide-server-cog"
//             >
//                 <path d="m10.852 14.772-.383.923" />
//                 <path d="M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923" />
//                 <path d="m13.148 9.228.383-.923" />
//                 <path d="m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544" />
//                 <path d="m14.772 10.852.923-.383" />
//                 <path d="m14.772 13.148.923.383" />
//                 <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
//                 <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
//                 <path d="M6 18h.01" />
//                 <path d="M6 6h.01" />
//                 <path d="m9.228 10.852-.923-.383" />
//                 <path d="m9.228 13.148-.923.383" />
//             </svg>
//         ),
//     },
//     {
//         title: "Figma Design",
//         description:
//             "We craft clean, intuitive, and high-quality UI/UX designs that power engaging digital experiences. From design systems to interactive prototypes and reusable components, we ensure seamless usability and visually appealing interfaces across every application.",
//         icon: (
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-figma-icon lucide-figma"
//             >
//                 <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
//                 <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
//                 <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
//                 <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
//                 <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
//             </svg>
//         ),
//     },
//     {
//         title: "User Relationships",
//         description:
//             "We design and cultivate engaging user experiences that strengthen the connection between users and products. From interaction design to seamless digital communication, we ensure meaningful and lasting user relationships.",
//         icon: (
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-users-round-icon lucide-users-round"
//             >
//                 <path d="M18 21a8 8 0 0 0-16 0" />
//                 <circle cx="10" cy="8" r="5" />
//                 <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
//             </svg>
//         ),
//     },
// ];

// const FeaturesSection: React.FC = () => {
//     return (
//         <section className="bg-white dark:bg-[#18181b] py-24 sm:py-32 transition-colors duration-500 overflow-x-hidden max-w-4xl m-auto">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//                 <div className="text-center max-w-2xl mx-auto">
//                     <h2 className="text-base font-semibold text-black  dark:text-white">
//                         Our Services
//                     </h2>
//                     <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
//                         Complete solutions for your digital success
//                     </p>
//                     <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
//                         From web development and UI/UX design to programming training and tech consulting,
//                         our services are tailored to your needs. Whether you are a beginner or a professional,
//                         we are here to support your growth and projects.
//                     </p>
//                 </div>

//                 <div className="mt-16 sm:mt-20 lg:mt-24 ">
//                     <dl className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto ">
//                         {features.map((feature, index) => (
//                             <div
//                                 key={index}
//                                 className="relative bg-white hover:dark:bg-[#242424] dark:bg-[#18181b] p-6 pl-16 rounded-xl shadow-md hover:bg-gray-50  hover:text-teal-500 hover:shadow-lg transition-all duration-300"
//                             >
//                                 <dt className="text-base font-semibold text-gray-900 dark:text-white">
//                                     <div className="absolute top-4 left-1 flex w-12 h-12 items-center justify-center rounded-lg bg-[#68d2bc] text-white">
//                                         {feature.icon}
//                                     </div>
//                                     {feature.title}
//                                 </dt>
//                                 <dd className="mt-2 text-gray-700 dark:text-gray-300">
//                                     {feature.description}
//                                 </dd>
//                             </div>
//                         ))}
//                     </dl>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FeaturesSection;
