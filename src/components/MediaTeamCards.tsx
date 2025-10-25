import { FaPalette, FaRocket, FaHandshake, FaLightbulb, FaDollarSign, FaCalendarCheck } from "react-icons/fa";
import home1 from "@/images/media-img/home1.png";
import home2 from "@/images/media-img/home2.png";
import home3 from "@/images/media-img/home3.png";
import Link from "next/link";
import ContactUs from "@/components/ContactUs";

export default function FeaturesSection() {
    const features = [
        {
            icon: <FaPalette className="text-[#68d2bc] text-4xl mb-4" />,
            title: "Creative Design",
            description:
                "From logos to full brand identities, we create visuals that capture attention and tell your brand’s story.",
        },
        {
            icon: <FaRocket className="text-[#68d2bc] text-4xl mb-4" />,
            title: "Digital Marketing",
            description:
                "Boost your online presence through data-driven social campaigns and smart advertising strategies.",
        },
        {
            icon: <FaHandshake className="text-[#68d2bc] text-4xl mb-4" />,
            title: "Client-Focused Support",
            description:
                "We make your experience effortless with personalized communication and clear project updates.",
        },
        {
            icon: <FaLightbulb className="text-[#68d2bc] text-4xl mb-4" />,
            title: "Custom Strategies",
            description:
                "Every project is tailored to match your goals, audience, and unique creative vision.",
        },
        {
            icon: <FaDollarSign className="text-[#68d2bc] text-4xl mb-4" />,
            title: "Flexible Pricing",
            description:
                "Get premium-quality design and marketing services that fit your budget and scale with your business.",
        },
        {
            icon: <FaCalendarCheck className="text-[#68d2bc] text-4xl mb-4" />,
            title: "On-Time Delivery",
            description:
                "We value your time — every project is delivered with precision, creativity, and reliability.",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                {/* عنوان و توضیحات */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-snug">
                    Boost Your Brand. Save Your Time. <br /> Let Our Media Team Handle It.
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-12">
                    We help businesses stand out online through creative design, smart marketing, and consistent brand strategy.
                </p>

                {/* بخش ویژگی‌ها */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white hover:bg-gray-50 transition-colors duration-300 shadow-sm"
                        >
                            {feature.icon}
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* بخش نمونه کار */}
                <div className="mt-20">
                    <p className="text-[#68d2bc] text-xl sm:text-2xl font-semibold p-2">
                        Real Estate Design & Marketing Services
                    </p>
                    <p className="text-black text-lg sm:text-xl p-2">
                        Professional Editing of Interior & Exterior Property Photos
                    </p>

                    <div className="px-2 sm:px-6 max-w-4xl mx-auto">
                        <p className="text-base sm:text-lg text-gray-700">
                            We enhance property images by refining colors, lighting, and details to create attractive and realistic visuals — perfect for advertising and sales platforms.
                        </p>

                        <p className="mt-4 font-semibold text-base sm:text-lg text-gray-700">Samples Include:</p>
                        <ul className="list-disc list-inside space-y-1 text-base sm:text-lg text-gray-700">
                            <li>Two interior photos with color correction, lighting adjustment, and noise removal</li>
                            <li>One exterior photo enhanced with improved sky, sunlight, and clarity</li>
                        </ul>

                        <p className="mt-4 font-semibold text-base sm:text-lg text-gray-700">Our Goal:</p>
                        <p className="text-base sm:text-lg text-gray-700">
                            To showcase the best version of every property and capture buyers’ attention and trust.
                        </p>

                        <div className="mt-8">
                            <Link href="/contact">
                                <button className="px-6 py-3 bg-[#68d2bc] text-white font-semibold rounded-xl hover:bg-[#57b0a4] transition-colors duration-300">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* تصاویر نمونه */}
                    <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-8">
                        <div className="w-full sm:w-[320px] md:w-[370px] h-[220px] sm:h-[250px] bg-[#68d2bc] rounded-2xl overflow-hidden shadow-md">
                            <img className="object-cover w-full h-full" src={home1.src} alt="home image" />
                        </div>
                        <div className="w-full sm:w-[320px] md:w-[370px] h-[220px] sm:h-[250px] bg-[#68d2bc] rounded-2xl overflow-hidden shadow-md">
                            <img className="object-cover w-full h-full" src={home2.src} alt="home image" />
                        </div>
                        <div className="w-full sm:w-[320px] md:w-[370px] h-[220px] sm:h-[250px] bg-[#68d2bc] rounded-2xl overflow-hidden shadow-md">
                            <img className="object-cover w-full h-full" src={home3.src} alt="home image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
