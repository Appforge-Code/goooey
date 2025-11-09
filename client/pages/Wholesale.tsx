import { Link } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/Layout";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Wholesale() {
  return (
    <Layout>
      <div className="bg-goooey-blue">
        <HeroSection />
        <WorksSection />
        <BenefitsSection />
        <PricingSection />
        <FAQSection />
      </div>
    </Layout>
  );
}

function HeroSection() {
  return (
    <section className="relative px-4 py-36 overflow-hidden">
      <div className="absolute inset-0 opacity-80">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6773e5b4d214f5eb3d22b680bf13d6f94e7fb149?width=2880"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-goooey-blue/80"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="font-display text-5xl md:text-6xl text-goooey-cream text-stroke-black">
          Wholesale
        </h1>
        <p className="text-white text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Goooey Treats is the perfect high-demand snack for retailers, gyms,
          and specialty stores looking to stock premium, handcrafted treats.
        </p>
      </div>
    </section>
  );
}
function WorksSection() {
  return (
    <section className="relative bg-goooey-cream1 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 w-full h-full ">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 845"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M111.468 18.4221C36.0628 19.8095 -47.9805 69.417 -47.9805 69.417V756.694C-47.9805 756.694 457.039 889.015 721.02 817.431C985 745.847 1490.02 756.167 1490.02 756.167V15.6766C1490.02 15.6766 1435.38 76.5977 1388.55 76.5131C1324.54 76.3974 1326.52 11.4771 1262.59 8.42213C1194.64 5.17494 1189.81 49.3294 1122.14 55.8858C1043.89 63.4667 1033.74 1.58512 957.193 18.4221C884.394 34.4344 912.378 68.0971 840.231 86.4682C767.669 104.945 753.561 30.1038 678.783 37.914C628.111 43.2065 614.288 92.9384 563.321 94.434C483.444 96.7779 490.162 14.2731 410.371 18.4221C343.494 21.8996 344.499 62.6785 277.914 69.417C200.681 77.2328 189.144 16.993 111.468 18.4221Z"
            fill="#FED97C"
            stroke="white"
            strokeWidth="12"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <Sparkles
          className="absolute -top-0 -left-4 w-6 h-6 text-gray-800 hidden sm:block"
          fill="currentColor"
        />
        <Sparkles
          className="absolute -bottom-0 -right-4 w-6 h-6 text-gray-800 hidden sm:block"
          fill="currentColor"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4b13580345bd9243a3b781b337d73b37143ba7f2?width=848"
              alt="Wholesale Product"
              className="w-80 md:w-96 lg:w-full max-w-md rounded-[42px] transform -rotate-[7deg] hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left">
            <div>
              <h2 className="text-black font-bold text-3xl md:text-[42px] leading-tight uppercase">
                How It
              </h2>
              <h3 className="font-display text-5xl md:text-6xl text-goooey-blue text-stroke-white">
                Works?
              </h3>
            </div>

            <div className="space-y-3 text-black text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              <p>• Apply for our wholesale program.</p>
              <p>• Get approved and gain access to bulk pricing.</p>
              <p>• Place your orders and bring Goooey to your customers!</p>
              <p className="font-bold">• Enjoy the Goooey Goodness!</p>
              <p className="mt-4">
                Goooey Treats is the perfect high-demand snack for retailers,
                gyms, and specialty stores looking to stock premium, handcrafted
                treats.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-6 shadow-offset-white hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#fff] transition-all">
                Contact Us
                <span className="bg-white text-goooey-blue rounded-full w-8 h-8 flex items-center justify-center border-2 border-goooey-yellow">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function BenefitsSection() {
  return (
    <section className="relative bg-goooey-blue py-16 md:py-24 overflow-hidden">
      <svg
        className="absolute left-0 top-0 w-full h-auto opacity-10 rotate-45 pointer-events-none"
        viewBox="0 0 1440 496"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M1772.26 390.699C1772.26 390.699 1389.45 33.1031 1249.69 116.582C1162.8 168.479 1233.02 310.337 1162.37 382.803C1029.64 518.942 848.096 -63.1893 761.716 106.189C717.446 192.995 823.183 269.441 776.992 355.241C690.434 516.022 456.261 63.7997 335.63 200.879C290.278 252.415 303.229 303.523 272.752 365.036C214.281 483.049 -155.276 376.685 -155.276 376.685"
          stroke="#FCE29E"
          strokeWidth="150"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <h2 className="text-white font-bold text-3xl md:text-[42px] leading-tight uppercase">
                PROGRAM
              </h2>
              <h3 className="font-display text-5xl text-goooey-cream text-stroke-light">
                Benefits
              </h3>
            </div>

            <div className="space-y-3 text-white text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              <p>• Exclusive wholesale pricing for high profit margins</p>
              <p>• Strong customer appeal with a best-selling product</p>
              <p>• Dedicated marketing and promotional support</p>
              <p>• Fast, reliable shipping and inventory restocking</p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-6 shadow-offset-white hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#fff] transition-all">
                Contact Us
                <span className="bg-white text-goooey-blue rounded-full w-8 h-8 flex items-center justify-center border-2 border-goooey-yellow">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4469001a511ba47de7baf197f8b1f4ee59bc46eb?width=848"
              alt="Happy customer"
              className="w-80 md:w-96 lg:w-full max-w-md rounded-[42px]  transform rotate-[7deg] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function PricingSection() {
  return (
    <section className="relative bg-goooey-cream py-16 md:py-24 overflow-hidden">
      <svg
        className="absolute left-0 bottom-0 w-full h-auto opacity-50 rotate-10 pointer-events-none z-2"
        viewBox="0 0 1440 496"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M1772.26 390.699C1772.26 390.699 1389.45 33.1031 1249.69 116.582C1162.8 168.479 1233.02 310.337 1162.37 382.803C1029.64 518.942 848.096 -63.1893 761.716 106.189C717.446 192.995 823.183 269.441 776.992 355.241C690.434 516.022 456.261 63.7997 335.63 200.879C290.278 252.415 303.229 303.523 272.752 365.036C214.281 483.049 -155.276 376.685 -155.276 376.685"
          stroke="#FCE29E"
          strokeWidth="150"
        />
      </svg>
      <div className="max-w-7xl mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5b5ef82fa0c60cd47c4a8a2ae6dc11b0ef009cdf?width=848"
              alt="Wholesale treats"
              className="w-80 md:w-96 lg:w-full max-w-md rounded-[42px] transform -rotate-[7deg] hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <div>
              <h2 className="text-black font-bold text-3xl md:text-[42px] leading-tight uppercase">
                WHOLESALE
              </h2>
              <h3 className="font-display text-5xl md:text-6xl text-goooey-blue text-stroke-white">
                Pricing
              </h3>
            </div>

            <div className="space-y-3 text-black text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              <p>
                • Min order: 100 treats{" "}
                <span className="font-bold">→ $3.75 each</span>
              </p>
              <p>
                • 300-1,000 treats →{" "}
                <span className="font-bold">$3.50 each</span>
              </p>
              <p>
                • 1,000+ treats → <span className="font-bold">$3.00 each</span>
              </p>
              <p className="font-bold">• Enjoy the Goooey Goodness!</p>

              <div className="mt-6 space-y-2">
                <p className="font-bold">Wholesale Requirements:</p>
                <p>
                  A <span className="font-bold">valid seller's permit</span> is
                  required to qualify for wholesale pricing. Wholesale purchases
                  are strictly for{" "}
                  <span className="font-bold">resale purposes (B2C only).</span>{" "}
                  Eligible buyers include{" "}
                  <span className="font-bold">
                    retail stores, snack shops, online resellers, and businesses
                    selling directly to customers.
                  </span>{" "}
                  Join the Goooey movement and{" "}
                  <span className="font-bold">
                    treat your customers to the best Rice Krispy treats around!
                  </span>{" "}
                  🛒🔥 Fill out our wholesale application and let's get goooey!
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-6 shadow-offset-white hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#fff] transition-all">
                Contact Us
                <span className="bg-white text-goooey-blue rounded-full w-8 h-8 flex items-center justify-center border-2 border-goooey-yellow">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 100"
        >
          <path
            d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z"
            fill="#0441fe"
          />
        </svg>
      </div>
    </section>
  );
}
function FAQSection() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const faqs = [
    {
      question: "What are the minimum order quantities?",
      answer:
        "Our minimum wholesale order is 100 units. Bulk discounts apply for larger orders.",
    },
    {
      question: "Do you offer exclusive product bundles for wholesale?",
      answer:
        "We use real tropical fruits, fresh dairy, and zero artificial flavours. Every batch is handcrafted in small quantities to maintain quality.",
    },
    {
      question: "How long does it take to receive a wholesale order?",
      answer: "Orders typically ship within 5-7 business days after approval.",
    },
    {
      question: "Can I get marketing materials to help promote Goooey treats?",
      answer:
        "Yes! We provide marketing materials and promotional support to all our wholesale partners.",
    },
  ];
  return (
    <section className="relative bg-goooey-blue py-16 md:py-24 overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-24 -translate-y-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 100"
        fill="none"
      >
        <path
          d="M0 50C240 10 480 10 720 50C960 90 1200 90 1440 50V100H0V50Z"
          fill="#0441FE"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-white font-bold text-3xl md:text-[42px] leading-tight uppercase">
            COMMON
          </h2>
          <h3 className="font-display text-5xl md:text-6xl text-goooey-cream text-stroke-light">
            Questions
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-[32px] bg-goooey-cream p-6 transition-all duration-300"
            >
              <button
                onClick={() =>
                  setExpandedFaq(expandedFaq === index ? null : index)
                }
                className="w-full"
              >
                <div className="flex items-center justify-between gap-4 rounded-full bg-goooey-blue px-6 py-3 shadow-[0_2px_31px_0_rgba(0,0,0,0.3),0_3px_0_0_#191919]">
                  <p className="font-mentimun text-white text-left text-base md:text-xl leading-relaxed flex-1">
                    {faq.question}
                  </p>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-[0_1.5px_0_0_#000] flex items-center justify-center flex-shrink-0">
                    <svg
                      className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${expandedFaq === index ? "rotate-90" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {expandedFaq === index && (
                <div className="mt-6 px-6">
                  {/* <div className="w-full h-1 rounded-full bg-white mb-4"></div> */}
                  <p className="text-black text-center text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
