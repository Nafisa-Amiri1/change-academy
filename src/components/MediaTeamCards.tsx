import { FaPalette, FaRocket, FaHandshake, FaLightbulb, FaDollarSign, FaCalendarCheck } from "react-icons/fa";
import home1 from "@/images/media-img/home1.png";
import home2 from "@/images/media-img/home2.png";
import home3 from "@/images/media-img/home3.png";
import Link from "next/link";

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
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          {/* عنوان و توضیحات */}
          <h2 className="mb-4 text-2xl leading-snug font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            Boost Your Brand. Save Your Time. <br /> Let Our Media Team Handle
            It.
          </h2>
          <p className="mb-12 text-base text-gray-600 sm:text-lg">
            We help businesses stand out online through creative design, smart
            marketing, and consistent brand strategy.
          </p>

          {/* بخش ویژگی‌ها */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm transition-colors duration-300 hover:bg-gray-50"
              >
                {feature.icon}
                <h3 className="mb-2 text-lg font-semibold text-gray-800 sm:text-xl">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* بخش نمونه کار */}
          <div className="mt-20">
            <p className="p-2 text-xl font-semibold text-[#68d2bc] sm:text-2xl">
              Real Estate Design & Marketing Services
            </p>
            <p className="p-2 text-lg text-black sm:text-xl">
              Professional Editing of Interior & Exterior Property Photos
            </p>

            <div className="mx-auto max-w-4xl px-2 sm:px-6">
              <p className="text-base text-gray-700 sm:text-lg">
                We enhance property images by refining colors, lighting, and
                details to create attractive and realistic visuals — perfect for
                advertising and sales platforms.
              </p>

              <p className="mt-4 text-base font-semibold text-gray-700 sm:text-lg">
                Samples Include:
              </p>
              <ul className="list-inside list-disc space-y-1 text-base text-gray-700 sm:text-lg">
                <li>
                  Two interior photos with color correction, lighting
                  adjustment, and noise removal
                </li>
                <li>
                  One exterior photo enhanced with improved sky, sunlight, and
                  clarity
                </li>
              </ul>

              <p className="mt-4 text-base font-semibold text-gray-700 sm:text-lg">
                Our Goal:
              </p>
              <p className="text-base text-gray-700 sm:text-lg">
                To showcase the best version of every property and capture
                buyers’ attention and trust.
              </p>

              <div className="mt-8">
                <Link href="#contactus">
                  <button className="rounded-xl bg-[#68d2bc] px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-[#57b0a4]">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            {/* تصاویر نمونه */}
            <div className="mt-10 flex flex-col items-center justify-center gap-8 sm:flex-row">
              <div className="h-[220px] w-full overflow-hidden rounded-2xl bg-[#68d2bc] shadow-md sm:h-[250px] sm:w-[320px] md:w-[370px]">
                <img
                  className="h-full w-full object-cover"
                  src={home1.src}
                  alt="home image"
                />
              </div>
              <div className="h-[220px] w-full overflow-hidden rounded-2xl bg-[#68d2bc] shadow-md sm:h-[250px] sm:w-[320px] md:w-[370px]">
                <img
                  className="h-full w-full object-cover"
                  src={home2.src}
                  alt="home image"
                />
              </div>
              <div className="h-[220px] w-full overflow-hidden rounded-2xl bg-[#68d2bc] shadow-md sm:h-[250px] sm:w-[320px] md:w-[370px]">
                <img
                  className="h-full w-full object-cover"
                  src={home3.src}
                  alt="home image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
